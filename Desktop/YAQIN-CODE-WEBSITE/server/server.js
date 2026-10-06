/* =========================================================
   Yaqin Code Server
   - فایل‌های سایت (HTML/CSS/JS) رو serve می‌کنه
   - API واقعی ثبت‌نام / ورود با هش‌کردن رمز و JWT
   ========================================================= */
require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");
const cookieParser = require("cookie-parser");
const { findUserByUsername, createUser } = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || "insecure-dev-secret-change-me";

app.use(express.json());
app.use(cookieParser());

// ---------- سرو کردن فایل‌های استاتیک سایت (پوشه‌ی والد این فولدر) ----------
const SITE_ROOT = path.join(__dirname, "..");
app.use(express.static(SITE_ROOT));

// ---------- ابزار ولیدیشن ساده سمت سرور (هرگز فقط به ولیدیشن کلاینت تکیه نکن) ----------
function validateCredentials(username, password) {
  const errors = {};
  if (!username || username.trim().length < 3) {
    errors.username = "username_invalid";
  }
  if (!password || password.length < 6) {
    errors.password = "password_invalid";
  }
  return errors;
}

// ---------- POST /api/signup ----------
app.post("/api/signup", async (req, res) => {
  const { username, password } = req.body || {};
  const errors = validateCredentials(username, password);
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ ok: false, errors });
  }

  const trimmed = username.trim();
  if (findUserByUsername(trimmed)) {
    return res.status(409).json({ ok: false, errors: { username: "username_taken" } });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = createUser({ username: trimmed, passwordHash });

  return res.json({ ok: true, username: user.username });
});

// ---------- POST /api/login ----------
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body || {};
  const errors = validateCredentials(username, password);
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ ok: false, errors });
  }

  const user = findUserByUsername(username.trim());
  if (!user) {
    return res.status(401).json({ ok: false, message: "not_found" });
  }

  const passwordMatches = await bcrypt.compare(password, user.passwordHash);
  if (!passwordMatches) {
    return res.status(401).json({ ok: false, message: "not_found" });
  }

  const token = jwt.sign({ username: user.username }, JWT_SECRET, {
    expiresIn: "7d",
  });

  return res.json({ ok: true, token, username: user.username });
});

// ---------- Middleware احراز هویت برای مسیرهای محافظت‌شده ----------
function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;

  if (!token) {
    return res.status(401).json({ ok: false, message: "no_token" });
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (e) {
    return res.status(401).json({ ok: false, message: "invalid_token" });
  }
}

// ---------- GET /api/me — بررسی اعتبار توکن و گرفتن نام کاربری ----------
app.get("/api/me", requireAuth, (req, res) => {
  res.json({ ok: true, username: req.user.username });
});

// ---------- POST /api/contact — ارسال پیام فرم تماس به تلگرام ----------
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};
  const errors = {};

  if (!name || name.trim().length < 2) errors.name = "name_invalid";
  if (!email || !isValidEmail(email)) errors.email = "email_invalid";
  if (!message || message.trim().length < 10) errors.message = "message_invalid";

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ ok: false, errors });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("⚠️ TELEGRAM_BOT_TOKEN یا TELEGRAM_CHAT_ID در .env تنظیم نشده.");
    return res.status(500).json({ ok: false, message: "telegram_not_configured" });
  }

  const text =
    `📩 پیام جدید از فرم تماس Yaqin Code\n\n` +
    `👤 نام: ${name.trim()}\n` +
    `✉️ ایمیل: ${email.trim()}\n\n` +
    `${message.trim()}`;

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
    const tgData = await tgRes.json();

    if (!tgData.ok) {
      console.error("Telegram API error:", tgData);
      return res.status(502).json({ ok: false, message: "telegram_failed" });
    }

    return res.json({ ok: true });
  } catch (err) {
    console.error("Telegram request failed:", err);
    return res.status(502).json({ ok: false, message: "telegram_failed" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Yaqin Code server is running: http://localhost:${PORT}`);
});
