/* =========================================================
   Lessons List — رندر دروس + محافظت از صفحه با توکن واقعی سرور
   ========================================================= */
(function () {
  const TOKEN_KEY = "codefarsi_token";
  const token = localStorage.getItem(TOKEN_KEY);

  // بدون توکن، اصلاً اجازه نمایش صفحه نده
  if (!token) {
    window.location.href = "login.html";
    return;
  }

  function currentLang() {
    return document.documentElement.getAttribute("lang") || "fa";
  }

  function renderTrack(containerId, track) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const lang = currentLang();
    const lessons = window.CODEFARSI_LESSONS[track] || [];
    container.innerHTML = "";

    lessons.forEach((lesson, index) => {
      const num = index + 1;
      const row = document.createElement("a");
      row.href = `lesson.html?track=${track}&n=${num}`;
      row.className = "lesson-row";
      row.innerHTML = `
        <span class="lesson-num">${String(num).padStart(2, "0")}</span>
        <span class="lesson-title">${lang === "fa" ? lesson.fa : lesson.en}</span>
      `;
      container.appendChild(row);
    });
  }

  function renderAll(username) {
    renderTrack("listHtml", "html");
    renderTrack("listCss", "css");
    renderTrack("listJs", "js");

    const welcomeEl = document.getElementById("welcomeMsg");
    if (welcomeEl) {
      const lang = currentLang();
      const label = window.CodeFarsiI18N.t("lessons.welcome", lang);
      welcomeEl.textContent = `${label} ${username}`;
    }
  }

  document.addEventListener("DOMContentLoaded", async () => {
    // توکن رو با سرور چک کن — اگه نامعتبر بود بفرست به لاگین
    let username = "";
    try {
      const res = await fetch("/api/me", {
        headers: { Authorization: "Bearer " + token },
      });
      if (!res.ok) throw new Error("unauthorized");
      const data = await res.json();
      username = data.username;
    } catch (e) {
      localStorage.removeItem(TOKEN_KEY);
      window.location.href = "login.html";
      return;
    }

    renderAll(username);

    ["logoutBtn", "logoutLinkMobile"].forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem(TOKEN_KEY);
        window.location.href = "index.html";
      });
    });

    const langBtn = document.getElementById("langToggle");
    if (langBtn) langBtn.addEventListener("click", () => setTimeout(() => renderAll(username), 0));
  });
})();
