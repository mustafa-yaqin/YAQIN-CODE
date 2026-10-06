/* =========================================================
   Lesson Editor — منطق صفحه‌ی هر درس (تب‌ها، اجرا، قبلی/بعدی)
   ========================================================= */
(function () {
  const TOKEN_KEY = "codefarsi_token";
  const token = localStorage.getItem(TOKEN_KEY);

  if (!token) {
    window.location.href = "login.html";
    return;
  }

  function currentLang() {
    return document.documentElement.getAttribute("lang") || "fa";
  }
  function t(key) {
    return window.CodeFarsiI18N.t(key, currentLang());
  }

  const params = new URLSearchParams(window.location.search);
  const track = params.get("track");
  const n = parseInt(params.get("n"), 10);

  const TRACKS = ["html", "css", "js"];
  const lessons = (window.CODEFARSI_LESSONS && window.CODEFARSI_LESSONS[track]) || null;
  const lesson = lessons && n >= 1 && n <= lessons.length ? lessons[n - 1] : null;

  if (track && TRACKS.includes(track)) {
    document.body.classList.add("track-" + track);
  }

  document.addEventListener("DOMContentLoaded", async () => {
    // --- بررسی اعتبار توکن با سرور ---
    try {
      const res = await fetch("/api/me", { headers: { Authorization: "Bearer " + token } });
      if (!res.ok) throw new Error("unauthorized");
    } catch (e) {
      localStorage.removeItem(TOKEN_KEY);
      window.location.href = "login.html";
      return;
    }

    const titleEl = document.getElementById("lessonTitle");
    const breadcrumbEl = document.getElementById("breadcrumb");
    const pageTitleEl = document.getElementById("pageTitle");

    if (!lesson) {
      titleEl.textContent = t("lesson.notFound");
      document.querySelector(".full-editor").style.display = "none";
      document.querySelector(".lesson-nav").style.display = "none";
      document.querySelector(".lesson-explain").style.display = "none";
      document.querySelector(".try-it-heading").style.display = "none";
      const syntaxBoxEl = document.getElementById("syntaxBox");
      if (syntaxBoxEl) syntaxBoxEl.style.display = "none";
      const back = document.createElement("a");
      back.href = "lessons.html";
      back.className = "btn btn-primary";
      back.textContent = t("lesson.backToList");
      document.querySelector(".lesson-header").appendChild(back);
      return;
    }

    const lang = currentLang();
    document.body.classList.add("track-" + track);
    const title = lang === "fa" ? lesson.fa : lesson.en;
    titleEl.textContent = `${String(n).padStart(2, "0")}. ${title}`;
    breadcrumbEl.textContent = `${t("track." + track)} / ${String(n).padStart(2, "0")}·${lessons.length}`;
    pageTitleEl.textContent = `${title} — Yaqin Code`;

    /* ---------- Tabs ---------- */
    const tabButtons = document.querySelectorAll(".full-editor-tabs button");
    const panes = {
      html: document.getElementById("codeHtml"),
      css: document.getElementById("codeCss"),
      js: document.getElementById("codeJs"),
    };
    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        Object.values(panes).forEach((p) => p.classList.remove("active"));
        panes[btn.getAttribute("data-tab")].classList.add("active");
      });
    });

    /* ---------- Starter code + description ---------- */
    const contentList = window.CODEFARSI_LESSON_CONTENT && window.CODEFARSI_LESSON_CONTENT[track];
    const content = contentList ? contentList[n - 1] : null;

    const explainEl = document.getElementById("lessonExplain");
    function renderExplain() {
      if (!explainEl) return;
      explainEl.innerHTML = "";
      if (!content) {
        const p = document.createElement("p");
        p.textContent = t("lesson.descPlaceholder");
        explainEl.appendChild(p);
        return;
      }
      const lang = currentLang();
      const text = lang === "fa" ? content.explain_fa : content.explain_en;
      const paragraphs = text.split("\n\n");

      // پاراگراف اول
      const p1 = document.createElement("p");
      p1.textContent = paragraphs[0].trim();
      explainEl.appendChild(p1);

      // مثال کد نمونه (فقط نمایشی) بین پاراگراف اول و بقیه
      const codeForTrack = track === "js" ? content.js : track === "css" ? content.css : content.html;
      if (codeForTrack && codeForTrack.trim()) {
        const label = document.createElement("div");
        label.className = "lesson-example-label";
        label.textContent = lang === "fa" ? "مثال:" : "Example:";
        explainEl.appendChild(label);

        const pre = document.createElement("pre");
        pre.className = "lesson-example-code";
        const codeEl = document.createElement("code");
        codeEl.textContent = codeForTrack.trim();
        pre.appendChild(codeEl);
        explainEl.appendChild(pre);
      }

      // بقیه‌ی پاراگراف‌ها
      paragraphs.slice(1).forEach((paragraph) => {
        const p = document.createElement("p");
        p.textContent = paragraph.trim();
        explainEl.appendChild(p);
      });
    }
    renderExplain();

    /* ---------- Syntax box ---------- */
    const syntaxBox = document.getElementById("syntaxBox");
    const syntaxCode = document.getElementById("syntaxCode");
    if (content && content.syntax && syntaxBox && syntaxCode) {
      syntaxCode.textContent = content.syntax;
      syntaxBox.style.display = "block";
    }

    const starter = content
      ? { html: content.html, css: content.css, js: content.js }
      : { html: "<!-- محتوای این درس هنوز آماده نشده -->", css: "", js: "" };

    function loadStarter() {
      panes.html.value = starter.html;
      panes.css.value = starter.css;
      panes.js.value = starter.js;
    }
    loadStarter();

    /* ---------- Run ---------- */
    const iframe = document.getElementById("preview");
    function run() {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      doc.open();
      doc.write(`<!DOCTYPE html><html><head><style>${panes.css.value}</style></head><body>${panes.html.value}<script>${panes.js.value}<\/script></body></html>`);
      doc.close();
    }
    run();

    document.getElementById("runBtn").addEventListener("click", run);
    document.getElementById("resetBtn").addEventListener("click", () => {
      loadStarter();
      run();
    });

    let debounce;
    Object.values(panes).forEach((p) => {
      p.addEventListener("input", () => {
        clearTimeout(debounce);
        debounce = setTimeout(run, 400);
      });
    });

    /* ---------- Prev / Next ---------- */
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (n <= 1) {
      prevBtn.disabled = true;
      prevBtn.style.opacity = "0.4";
    } else {
      prevBtn.addEventListener("click", () => {
        window.location.href = `lesson.html?track=${track}&n=${n - 1}`;
      });
    }

    if (n >= lessons.length) {
      nextBtn.disabled = true;
      nextBtn.style.opacity = "0.4";
    } else {
      nextBtn.addEventListener("click", () => {
        window.location.href = `lesson.html?track=${track}&n=${n + 1}`;
      });
    }

    /* ---------- Logout ---------- */
    ["logoutBtn", "logoutLinkMobile"].forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem(TOKEN_KEY);
        window.location.href = "index.html";
      });
    });

    /* ---------- به‌روزرسانی عنوان/توضیح هنگام سوییچ زبان ---------- */
    const langBtn = document.getElementById("langToggle");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        setTimeout(() => {
          const newLang = currentLang();
          const newTitle = newLang === "fa" ? lesson.fa : lesson.en;
          titleEl.textContent = `${String(n).padStart(2, "0")}. ${newTitle}`;
          breadcrumbEl.textContent = `${t("track." + track)} / ${String(n).padStart(2, "0")}·${lessons.length}`;
          pageTitleEl.textContent = `${newTitle} — Yaqin Code`;
          renderExplain();
        }, 0);
      });
    }
  });
})();
