/* =========================================================
   i18n Manager — سوییچ فارسی / انگلیسی
   عناصر صفحه باید attribute زیر را داشته باشند:
     data-i18n="key"          -> متن داخل تگ
     data-i18n-placeholder    -> placeholder اینپوت
   ========================================================= */
(function () {
  const STORAGE_KEY = "codefarsi_lang";
  const html = document.documentElement;

  function getPreferredLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "fa" || saved === "en") return saved;
    const browserLang = navigator.language || "";
    return browserLang.startsWith("fa") ? "fa" : "en";
  }

  function t(key, lang) {
    const dict = window.CODEFARSI_I18N[lang] || {};
    return dict[key] || key;
  }

  function applyLang(lang) {
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"), lang);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute(
        "placeholder",
        t(el.getAttribute("data-i18n-placeholder"), lang)
      );
    });

    const langLabel = document.getElementById("langLabel");
    if (langLabel) langLabel.textContent = lang === "fa" ? "EN" : "فا";

    if (window.CodeFarsiRefreshThemeLabel) window.CodeFarsiRefreshThemeLabel();
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyLang(getPreferredLang());
    const btn = document.getElementById("langToggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const current = html.getAttribute("lang");
      applyLang(current === "fa" ? "en" : "fa");
    });
  });

  window.CodeFarsiI18N = { applyLang, t };
})();
