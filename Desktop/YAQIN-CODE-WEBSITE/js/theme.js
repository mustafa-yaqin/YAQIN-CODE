/* =========================================================
   Theme Manager — دارک / لایت
   ========================================================= */
(function () {
  const STORAGE_KEY = "codefarsi_theme";
  const root = document.documentElement;

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
    const btn = document.getElementById("themeToggle");
    const icon = document.getElementById("themeIcon");
    const label = document.getElementById("themeLabel");
    const lang = root.getAttribute("lang") || "fa";
    if (icon) icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    if (label) {
      label.textContent =
        theme === "dark"
          ? (lang === "fa" ? "روشن" : "Light")
          : (lang === "fa" ? "تاریک" : "Dark");
    }
    if (btn) {
      btn.setAttribute(
        "aria-label",
        theme === "dark" ? "تغییر به حالت روشن" : "تغییر به حالت تاریک"
      );
    }
  }

  // اعمال فوری تم قبل از رندر برای جلوگیری از پرش رنگ (FOUC)
  applyTheme(getPreferredTheme());

  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;
    applyTheme(getPreferredTheme()); // به‌روزرسانی متن دکمه
    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });
  });

  // برای صدا زدن از i18n.js بعد از تغییر زبان (تا برچسب تم هم به‌روز بشه)
  window.CodeFarsiRefreshThemeLabel = () => applyTheme(root.getAttribute("data-theme") || "light");
})();
