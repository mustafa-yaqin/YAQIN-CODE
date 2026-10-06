/* =========================================================
   لایه‌ی داده — ذخیره‌سازی کاربران در یک فایل JSON محلی
   (data/users.json). برای یک سایت آموزشی شخصی با تعداد
   شاگردان معقول کاملاً کافی و قابل‌اعتماده. اگر بعداً سایت
   بزرگ‌تر شد، همین توابع رو می‌شه با یک دیتابیس واقعی
   (Postgres/MySQL/MongoDB) جایگزین کرد بدون تغییر در server.js
   ========================================================= */
const fs = require("fs");
const path = require("path");

const DB_PATH = path.join(__dirname, "data", "users.json");

function ensureDbFile() {
  if (!fs.existsSync(DB_PATH)) {
    fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
    fs.writeFileSync(DB_PATH, JSON.stringify({ users: [] }, null, 2));
  }
}

function readDb() {
  ensureDbFile();
  const raw = fs.readFileSync(DB_PATH, "utf-8");
  try {
    return JSON.parse(raw);
  } catch (e) {
    return { users: [] };
  }
}

function writeDb(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

function findUserByUsername(username) {
  const db = readDb();
  return db.users.find(
    (u) => u.username.toLowerCase() === username.toLowerCase()
  );
}

function createUser({ username, passwordHash }) {
  const db = readDb();
  const user = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
    username,
    passwordHash,
    createdAt: new Date().toISOString(),
  };
  db.users.push(user);
  writeDb(db);
  return user;
}

module.exports = { findUserByUsername, createUser };
