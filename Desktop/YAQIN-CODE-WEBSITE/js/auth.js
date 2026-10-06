/* =========================================================
   Auth — اتصال واقعی به بک‌اند (server/) برای ثبت‌نام و ورود
   توکن JWT در localStorage نگه داشته می‌شود تا بین رفرش‌ها بمونه.
   ⚠️ این صفحه باید از طریق سرور اجرا بشه (نه با دابل‌کلیک فایل)،
   چون به آدرس‌های نسبی /api/... نیاز داره.
   ========================================================= */
(function () {
  const TOKEN_KEY = "codefarsi_token";

  function currentLang() {
    return document.documentElement.getAttribute("lang") || "fa";
  }
  function t(key) {
    return window.CodeFarsiI18N.t(key, currentLang());
  }

  function setFieldError(fieldEl, message) {
    fieldEl.classList.toggle("has-error", Boolean(message));
    const errEl = fieldEl.querySelector(".field-error");
    if (errEl) errEl.textContent = message || "";
  }
  function clearFieldError(fieldEl) {
    setFieldError(fieldEl, "");
  }

  function showAlert(alertEl, message, type) {
    alertEl.textContent = message;
    alertEl.className = "form-alert show " + type;
  }
  function hideAlert(alertEl) {
    alertEl.className = "form-alert";
  }

  async function postJson(url, body) {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    let data = {};
    try {
      data = await res.json();
    } catch (e) {
      /* پاسخ خالی یا غیرمنتظره */
    }
    return { status: res.status, data };
  }

  document.addEventListener("DOMContentLoaded", () => {
    /* ---------- Tabs ---------- */
    const tabLogin = document.getElementById("tabLogin");
    const tabSignup = document.getElementById("tabSignup");
    const formLogin = document.getElementById("loginForm");
    const formSignup = document.getElementById("signupForm");

    function activate(tab) {
      const isLogin = tab === "login";
      tabLogin.classList.toggle("active", isLogin);
      tabSignup.classList.toggle("active", !isLogin);
      formLogin.classList.toggle("active", isLogin);
      formSignup.classList.toggle("active", !isLogin);
      hideAlert(document.getElementById("loginAlert"));
      hideAlert(document.getElementById("signupAlert"));
    }

    if (tabLogin && tabSignup) {
      tabLogin.addEventListener("click", () => activate("login"));
      tabSignup.addEventListener("click", () => activate("signup"));
      document.querySelectorAll("[data-switch-to]").forEach((btn) => {
        btn.addEventListener("click", () =>
          activate(btn.getAttribute("data-switch-to"))
        );
      });
    }

    /* ---------- Signup ---------- */
    if (formSignup) {
      formSignup.addEventListener("submit", async (e) => {
        e.preventDefault();
        const username = document.getElementById("signupUsername");
        const password = document.getElementById("signupPassword");
        const confirm = document.getElementById("signupConfirm");
        const alertEl = document.getElementById("signupAlert");
        let valid = true;

        const uVal = username.value.trim();
        const pVal = password.value;
        const cVal = confirm.value;

        if (uVal.length < 3) {
          setFieldError(username.closest(".field"), t("signup.error.username"));
          valid = false;
        } else clearFieldError(username.closest(".field"));

        if (pVal.length < 6) {
          setFieldError(password.closest(".field"), t("signup.error.password"));
          valid = false;
        } else clearFieldError(password.closest(".field"));

        if (cVal !== pVal || cVal.length === 0) {
          setFieldError(confirm.closest(".field"), t("signup.error.confirm"));
          valid = false;
        } else clearFieldError(confirm.closest(".field"));

        if (!valid) {
          hideAlert(alertEl);
          return;
        }

        const submitBtn = formSignup.querySelector("button[type=submit]");
        submitBtn.disabled = true;

        try {
          const { status, data } = await postJson("/api/signup", {
            username: uVal,
            password: pVal,
          });

          if (status === 409) {
            setFieldError(username.closest(".field"), t("signup.error.usernameTaken"));
          } else if (!data.ok) {
            showAlert(alertEl, t("login.error.notfound"), "error");
          } else {
            showAlert(alertEl, t("signup.success"), "success");
            formSignup.reset();
            setTimeout(() => activate("login"), 900);
          }
        } catch (err) {
          showAlert(alertEl, "⚠ سرور در دسترس نیست. آیا با node server.js اجراش کردی؟", "error");
        } finally {
          submitBtn.disabled = false;
        }
      });
    }

    /* ---------- Login ---------- */
    if (formLogin) {
      formLogin.addEventListener("submit", async (e) => {
        e.preventDefault();
        const username = document.getElementById("loginUsername");
        const password = document.getElementById("loginPassword");
        const alertEl = document.getElementById("loginAlert");
        let valid = true;

        const uVal = username.value.trim();
        const pVal = password.value;

        if (uVal.length < 3) {
          setFieldError(username.closest(".field"), t("login.error.username"));
          valid = false;
        } else clearFieldError(username.closest(".field"));

        if (pVal.length < 6) {
          setFieldError(password.closest(".field"), t("login.error.password"));
          valid = false;
        } else clearFieldError(password.closest(".field"));

        if (!valid) {
          hideAlert(alertEl);
          return;
        }

        const submitBtn = formLogin.querySelector("button[type=submit]");
        submitBtn.disabled = true;

        try {
          const { status, data } = await postJson("/api/login", {
            username: uVal,
            password: pVal,
          });

          if (!data.ok) {
            showAlert(alertEl, t("login.error.notfound"), "error");
          } else {
            localStorage.setItem(TOKEN_KEY, data.token);
            showAlert(alertEl, t("login.success"), "success");
            setTimeout(() => {
              window.location.href = "lessons.html";
            }, 500);
          }
        } catch (err) {
          showAlert(alertEl, "⚠ سرور در دسترس نیست. آیا با node server.js اجراش کردی؟", "error");
        } finally {
          submitBtn.disabled = false;
        }
      });
    }
  });
})();
