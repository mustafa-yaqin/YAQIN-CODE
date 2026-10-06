/* =========================================================
   Scroll Reveal — نمایان‌شدن نرم بخش‌ها هنگام اسکرول
   ========================================================= */
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll(".reveal");
    if (!targets.length) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("reveal-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => observer.observe(el));

    // محافظ: اگه به هر دلیلی (مثلاً محیط پیش‌نمایش خاص) observer فعال نشد،
    // بعد از یه مدت کوتاه همه‌چیز رو به‌هرحال نمایان کن تا محتوا هیچ‌وقت مخفی نمونه.
    setTimeout(() => {
      targets.forEach((el) => el.classList.add("reveal-visible"));
    }, 1200);
  });
})();
