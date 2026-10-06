/* =========================================================
   Mini Live Editor — نسخه کوچک در هیرو صفحه اصلی
   نسخه کامل با تب HTML/CSS/JS جدا در صفحه هر درس (قدم بعدی) ساخته می‌شود
   ========================================================= */
(function () {
  const DEFAULT_CODE = `<h2 style="font-family:sans-serif;color:#C97A2B">
  Hello, Yaqin Code!
</h2>
<p style="font-family:sans-serif">همین‌جا کد بزن ✍️</p>`;

  document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("miniEditorCode");
    const iframe = document.getElementById("miniEditorPreview");
    if (!textarea || !iframe) return;

    function render() {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      doc.open();
      doc.write(textarea.value);
      doc.close();
    }

    textarea.value = DEFAULT_CODE;
    render();

    let debounce;
    textarea.addEventListener("input", () => {
      clearTimeout(debounce);
      debounce = setTimeout(render, 300);
    });
  });
})();
