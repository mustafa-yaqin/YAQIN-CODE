/* =========================================================
   Contact Form — ولیدیشن + ارسال واقعی به تلگرام (از طریق سرور)
   ========================================================= */
(function () {
  function currentLang() {
    return document.documentElement.getAttribute("lang") || "fa";
  }
  function t(key) {
    return window.CodeFarsiI18N.t(key, currentLang());
  }

  function setFieldError(fieldEl, message) {
    fieldEl.classList.toggle("has-error", Boolean(message));
    const errEl = fieldEl.querySelector(".field-error");
    if (errEl && message) errEl.textContent = message;
  }
  function clearFieldError(fieldEl) {
    fieldEl.classList.remove("has-error");
  }

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    if (!form) return;

    const hint = document.getElementById("contactHint");
    const nameField = document.getElementById("cname");
    const emailField = document.getElementById("cemail");
    const messageField = document.getElementById("cmessage");

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      let valid = true;

      const nameVal = nameField.value.trim();
      const emailVal = emailField.value.trim();
      const messageVal = messageField.value.trim();

      if (nameVal.length < 2) {
        setFieldError(nameField.closest(".field"), t("contact.error.name"));
        valid = false;
      } else clearFieldError(nameField.closest(".field"));

      if (!isValidEmail(emailVal)) {
        setFieldError(emailField.closest(".field"), t("contact.error.email"));
        valid = false;
      } else clearFieldError(emailField.closest(".field"));

      if (messageVal.length < 10) {
        setFieldError(messageField.closest(".field"), t("contact.error.message"));
        valid = false;
      } else clearFieldError(messageField.closest(".field"));

      if (!valid) {
        hint.textContent = "";
        return;
      }

      const submitBtn = form.querySelector("button[type=submit]");
      submitBtn.disabled = true;
      hint.textContent = "";
      hint.style.color = "";

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: nameVal, email: emailVal, message: messageVal }),
        });
        const data = await res.json();

        if (!data.ok) {
          hint.textContent = t("contact.error.server");
          hint.style.color = "var(--danger)";
        } else {
          hint.textContent = t("contact.success");
          hint.style.color = "var(--success)";
          form.reset();
        }
      } catch (err) {
        hint.textContent = t("contact.error.server");
        hint.style.color = "var(--danger)";
      } finally {
        submitBtn.disabled = false;
      }
    });
  });
})();
