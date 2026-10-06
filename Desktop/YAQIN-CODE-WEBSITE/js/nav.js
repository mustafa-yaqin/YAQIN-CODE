/* =========================================================
   Mobile Nav Toggle
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menuToggle");
  const nav = document.getElementById("navLinks");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
    btn.textContent = isOpen ? "✕" : "☰";
  });

  // بستن منو با کلیک روی هر لینک
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = "☰";
    });
  });
});
