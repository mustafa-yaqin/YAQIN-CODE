/* =========================================================
   Header State — نمایش وضعیت ورود در هدر صفحه اصلی
   اگه کاربر لاگین کرده باشه، دکمه‌ی «ورود» رو به لینک «درس‌ها» تغییر می‌ده.
   ========================================================= */
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("codefarsi_token");
    if (!token) return; // کاربر لاگین نکرده، هدر همون‌طور که هست بمونه

    document.querySelectorAll(".nav-login-desktop, .nav-login-mobile").forEach((el) => {
      el.setAttribute("href", "lessons.html");
      el.removeAttribute("data-i18n");
      el.textContent = window.CodeFarsiI18N
        ? window.CodeFarsiI18N.t("nav.lessons", document.documentElement.getAttribute("lang") || "fa")
        : "درس‌ها";
    });
  });
})();
