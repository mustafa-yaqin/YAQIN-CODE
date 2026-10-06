/* =========================================================
   محتوای آموزشی کامل هر درس — توضیح + سینتکس مرجع + کد نمونه
   ========================================================= */
window.CODEFARSI_LESSON_CONTENT = {
  "html": [
    {
      "desc_fa": "HTML مخفف HyperText Markup Language و زبان اصلی ساخت صفحات وبه. برخلاف زبان‌های برنامه‌نویسی، HTML یه زبان نشانه‌گذاریه — یعنی با «تگ»ها به مرورگر می‌گه هر بخش از محتوا چیه (تیتر، پاراگراف، عکس و...)، نه اینکه منطق اجرا کنه. هر تگ معمولاً یه جفته: یه تگ باز مثل <p> و یه تگ بسته مثل </p>، و هر چی بینشون باشه محتوای اون عنصره. مثال زیر یه هدینگ و یه پاراگراف ساده رو نشون می‌ده — روی «اجرا» بزن و ببین مرورگر چطور نمایششون می‌ده.",
      "desc_en": "HTML stands for HyperText Markup Language and is the core language of every web page. Unlike programming languages, HTML is a markup language — it uses \"tags\" to tell the browser what each piece of content is (a heading, a paragraph, an image...), not to run logic. Most tags come in pairs: an opening tag like <p> and a closing tag like </p>, with the content in between. The example below shows a simple heading and paragraph — hit Run and see how the browser renders them.",
      "html": "<h1>سلام دنیا!</h1>\n<p>این اولین صفحه‌ی HTML من است.</p>",
      "css": "h1 { color: #2f6bff; font-family: sans-serif; }\np { font-family: sans-serif; }",
      "js": "// هنوز جاوااسکریپت لازم نداریم",
      "explain_fa": "HTML مخفف HyperText Markup Language است و اسکلت هر صفحه‌ی وب رو می‌سازه. برخلاف زبان‌های برنامه‌نویسی، HTML یه زبان نشانه‌گذاریه؛ یعنی به مرورگر می‌گه «این بخش یه هدینگه»، «این یکی یه پاراگرافه»، نه اینکه منطق اجرا کنه.\nهر عنصر HTML از یه تگ باز (<p>) و یه تگ بسته (</p>) تشکیل شده و محتوا بین اون دو قرار می‌گیره. یاد گرفتن HTML اولین قدم برای هر برنامه‌نویس وبه.",
      "explain_en": "HTML stands for HyperText Markup Language and forms the skeleton of every web page. Unlike programming languages, HTML is a markup language — it tells the browser \"this is a heading\" or \"this is a paragraph\", it doesn't run logic.\nEvery HTML element consists of an opening tag (<p>) and a closing tag (</p>), with content in between. Learning HTML is the very first step for any web developer.",
      "syntax": "<p>محتوای پاراگراف</p>"
    },
    {
      "desc_fa": "هر سند HTML یه اسکلت ثابت داره: خط اول <!DOCTYPE html> به مرورگر می‌گه این سند از استاندارد HTML5 استفاده می‌کنه. بعدش تگ <html> کل صفحه رو در بر می‌گیره و به دو بخش تقسیم می‌شه: <head> که شامل اطلاعاتی مثل عنوان تب و متا‌تگ‌هاست (خودش دیده نمی‌شه)، و <body> که همه‌ی محتوای قابل‌مشاهده‌ی صفحه (متن، عکس، دکمه و...) داخلشه. یادگیری این ساختار پایه‌ی همه‌ی صفحاتیه که از این به بعد می‌سازی.",
      "desc_en": "Every HTML document follows a fixed skeleton: the first line <!DOCTYPE html> tells the browser this document follows the HTML5 standard. Then the <html> tag wraps the whole page and splits into two parts: <head>, which holds info like the tab title and meta tags (not shown visually), and <body>, which holds all the visible content (text, images, buttons...). This structure is the foundation of every page you'll build from here on.",
      "html": "<!DOCTYPE html>\n<html lang=\"fa\">\n<head>\n  <title>صفحه‌ی من</title>\n</head>\n<body>\n  <h2>این داخل body است</h2>\n</body>\n</html>",
      "css": "h2 { font-family: sans-serif; color: #7aa8ff; }",
      "js": "",
      "explain_fa": "هر سند HTML یه ساختار استاندارد داره که مرورگر انتظارش رو داره. خط اول همیشه <!DOCTYPE html> است که به مرورگر می‌گه از آخرین نسخه‌ی HTML استفاده کن.\nبعد تگ <html> کل صفحه رو در بر می‌گیره و به دو بخش تقسیم می‌شه: <head> که اطلاعات پشت‌صحنه (عنوان تب، فونت‌ها، متادیتا) رو نگه می‌داره و کاربر مستقیم نمی‌بینتش، و <body> که همه‌ی محتوای قابل‌مشاهده‌ی صفحه (متن، عکس، دکمه) داخلشه.",
      "explain_en": "Every HTML document follows a standard structure the browser expects. The first line is always <!DOCTYPE html>, telling the browser to use the latest HTML standard.\nThen the <html> tag wraps the whole page and splits into two parts: <head>, which holds behind-the-scenes info (tab title, fonts, metadata) the user doesn't see directly, and <body>, which holds all the visible content (text, images, buttons).",
      "syntax": "<!DOCTYPE html>\n<html>\n  <head>...</head>\n  <body>...</body>\n</html>"
    },
    {
      "desc_fa": "برای هدینگ (عنوان) شش سطح داریم: <h1> بزرگ‌ترین و مهم‌ترین (معمولاً فقط یکی در هر صفحه، برای عنوان اصلی) تا <h6> کوچک‌ترین. مرورگر خودش اندازه‌ی فونتشون رو تنظیم می‌کنه ولی مهم‌تر از ظاهر، معنای سلسله‌مراتبیشونه — یعنی h2 زیرمجموعه‌ی h1 حساب می‌شه. برای متن معمولی هم از <p> استفاده می‌کنیم که به‌صورت خودکار یه پاراگراف جدا با فاصله بالا/پایین می‌سازه.",
      "desc_en": "Headings come in six levels: <h1> is the largest and most important (usually just one per page, for the main title) down to <h6>, the smallest. The browser sets their font size automatically, but what matters more than looks is their hierarchical meaning — an h2 is considered a subsection of an h1. For regular text, we use <p>, which automatically creates a separate paragraph with spacing above and below.",
      "html": "<h1>هدینگ یک</h1>\n<h2>هدینگ دو</h2>\n<h3>هدینگ سه</h3>\n<p>یک پاراگراف معمولی زیر هدینگ‌ها.</p>",
      "css": "body { font-family: sans-serif; }\nh1 { color: #2f6bff; }\nh2 { color: #7aa8ff; }",
      "js": "",
      "explain_fa": "تگ‌های <h1> تا <h6> برای هدینگ‌ها (تیتر) استفاده می‌شن؛ <h1> مهم‌ترین و بزرگ‌ترینه، <h6> کم‌اهمیت‌ترین. هر صفحه معمولاً فقط یه <h1> داره (عنوان اصلی صفحه).\nتگ <p> برای پاراگراف‌های معمولی متنه. مرورگر خودکار قبل و بعد هر هدینگ و پاراگراف یه فاصله می‌ذاره، بدون اینکه خودمون CSS بنویسیم.",
      "explain_en": "Tags <h1> through <h6> are used for headings; <h1> is the most important/largest, <h6> the least. A page usually has only one <h1> (the main title).\nThe <p> tag is for regular text paragraphs. The browser automatically adds spacing before and after each heading and paragraph, even without custom CSS.",
      "syntax": "<h1>هدینگ اصلی</h1>\n<h2>هدینگ فرعی</h2>"
    },
    {
      "desc_fa": "توی HTML هر چقدر توی کدت Enter بزنی یا فاصله بذاری، مرورگر اونا رو نادیده می‌گیره و همه رو یه فاصله حساب می‌کنه — پس برای شکست خط واقعی باید از تگ <br> استفاده کنیم (این تگ بسته نداره، چون محتوایی نداره که ببندیم). فرق br با یه پاراگراف جدید اینه که br فقط خط رو می‌شکنه ولی هنوز همون بلوک محتواست، در حالی که <p> جدید یه بلوک کاملاً مستقل با فاصله‌ی بیشتر می‌سازه.",
      "desc_en": "In HTML, extra line breaks or spaces in your code are ignored by the browser — they all collapse into a single space. So for an actual line break, we use the <br> tag (it has no closing tag, since it has no content to wrap). The difference between br and a new paragraph is that br just breaks the line within the same content block, while a new <p> creates a fully separate block with more spacing.",
      "html": "<p>خط اول یک پاراگراف.<br>خط دوم همون پاراگراف با br.</p>\n<p>این یک پاراگراف جداست.</p>",
      "css": "p { font-family: sans-serif; line-height: 1.6; }",
      "js": "",
      "explain_fa": "برای شکست خط داخل یه پاراگراف، از تگ <br> استفاده می‌کنیم که برخلاف اکثر تگ‌ها، تگ بسته نداره (یه تگ «خودبسته»).\nاگه بخوایم واقعاً یه بلوک متنی جدید و مستقل بسازیم (نه فقط شکست خط)، باید از یه <p> جدید استفاده کنیم؛ مرورگر بین دو <p> فاصله‌ی بیشتری از یه <br> ساده می‌ذاره.",
      "explain_en": "To break a line inside a paragraph, use the <br> tag, which unlike most tags has no closing tag (a \"self-closing\" tag).\nIf you want a genuinely new, independent block of text (not just a line break), start a new <p>; the browser adds more spacing between two <p> tags than a simple <br>.",
      "syntax": "خط اول<br>\nخط دوم"
    },
    {
      "desc_fa": "لینک با تگ <a href=\"آدرس\"> ساخته می‌شه؛ href مخصص می‌کنه کاربر با کلیک به کجا بره. اگه بخوایم لینک توی یه تب جدید باز بشه (نه اینکه صفحه‌ی فعلی رو عوض کنه)، ویژگی target=\"_blank\" رو اضافه می‌کنیم. لینک می‌تونه به یه سایت دیگه، یه صفحه‌ی داخلی سایت خودمون، یا حتی با # به یه بخش از همون صفحه اشاره کنه.",
      "desc_en": "A link is created with the <a href=\"url\"> tag; href specifies where the user goes when they click. If we want the link to open in a new tab instead of replacing the current page, we add the target=\"_blank\" attribute. A link can point to another website, an internal page of our own site, or even with # to a section of the same page.",
      "html": "<a href=\"https://developer.mozilla.org\" target=\"_blank\">مستندات MDN</a>\n<br>\n<a href=\"#\">یک لینک داخلی</a>",
      "css": "a { color: #2f6bff; font-family: sans-serif; }",
      "js": "",
      "explain_fa": "لینک‌ها با تگ <a href=\"آدرس\"> ساخته می‌شن؛ href مخصص می‌کنه کاربر با کلیک به کجا بره. متن بین <a> و </a> همون چیزیه که کاربر می‌بینه و کلیک می‌کنه.\nویژگی target=\"_blank\" لینک رو در یه تب جدید مرورگر باز می‌کنه، خیلی مفید برای وقتی نمی‌خوایم کاربر از سایتمون خارج بشه.",
      "explain_en": "Links are created with <a href=\"url\">; href specifies where the user goes on click. The text between <a> and </a> is what the user sees and clicks.\nThe target=\"_blank\" attribute opens the link in a new browser tab — useful when you don't want the user to leave your site.",
      "syntax": "<a href=\"آدرس\" target=\"_blank\">متن لینک</a>"
    },
    {
      "desc_fa": "تگ <img> برخلاف بیشتر تگ‌ها بسته نمی‌شه، چون محتواش نداره — فقط دو ویژگی مهم داره: src که مسیر فایل عکس رو مشخص می‌کنه، و alt که یه توضیح متنیه برای وقتی عکس لود نشه یا کاربر از صفحه‌خوان (برای نابینایان) استفاده کنه. همیشه alt بذار، حتی اگه عکس فقط تزئینیه (در اون حالت alt=\"\" کافیه). ویژگی width هم اندازه‌ی نمایش رو تنظیم می‌کنه.",
      "desc_en": "The <img> tag, unlike most tags, doesn't need a closing tag since it has no content — it has two key attributes: src, which points to the image file, and alt, a text description shown if the image fails to load or read by a screen reader for visually impaired users. Always include alt, even if the image is purely decorative (in that case alt=\"\" is enough). The width attribute controls the display size.",
      "html": "<img src=\"https://via.placeholder.com/200x120\" alt=\"تصویر نمونه\" width=\"200\" />\n<p>یک عکس نمونه بالا نمایش داده شده.</p>",
      "css": "img { border-radius: 8px; }\np { font-family: sans-serif; }",
      "js": "",
      "explain_fa": "برای نمایش تصویر از <img src=\"مسیر\" alt=\"توضیح\"> استفاده می‌کنیم. برخلاف اکثر تگ‌ها، <img> تگ بسته نداره.\nویژگی src آدرس فایل تصویره (لینک اینترنتی یا مسیر محلی)، و alt یه توضیح متنی برای وقتیه که عکس لود نمی‌شه یا کاربر از صفحه‌خوان (برای نابینایان) استفاده می‌کنه. همیشه alt بذار!",
      "explain_en": "To display an image, use <img src=\"path\" alt=\"description\">. Unlike most tags, <img> has no closing tag.\nThe src attribute is the image file's address (a URL or local path), and alt is a text description for when the image fails to load or when a screen reader is used. Always include alt!",
      "syntax": "<img src=\"آدرس-عکس\" alt=\"توضیح\" />"
    },
    {
      "desc_fa": "برای لیست‌ها دو نوع اصلی داریم: <ul> (Unordered List) وقتی ترتیب مهم نیست و هر آیتم با یه bullet نشون داده می‌شه، و <ol> (Ordered List) وقتی ترتیب مهمه و آیتم‌ها شماره‌گذاری می‌شن. مهم نیست کدوم رو استفاده می‌کنی، هر آیتم داخل یه تگ <li> (List Item) قرار می‌گیره. لیست‌ها می‌تونن تودرتو هم باشن (یه <ul> داخل یه <li> دیگه).",
      "desc_en": "There are two main list types: <ul> (Unordered List) when order doesn't matter and each item shows a bullet, and <ol> (Ordered List) when order matters and items get numbered. Either way, each item goes inside an <li> (List Item) tag. Lists can also be nested (a <ul> inside another <li>).",
      "html": "<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>\n<ol>\n  <li>اول یاد بگیر</li>\n  <li>بعد تمرین کن</li>\n</ol>",
      "css": "ul, ol { font-family: sans-serif; }",
      "js": "",
      "explain_fa": "<ul> (Unordered List) لیستی با نقطه (bullet) می‌سازه که ترتیب آیتم‌ها مهم نیست، مثل لیست خرید. <ol> (Ordered List) لیست شماره‌داره که ترتیب مهمه، مثل مراحل یه دستورالعمل.\nهر آیتم داخل هر دو نوع لیست، با تگ <li> (List Item) نوشته می‌شه.",
      "explain_en": "<ul> (Unordered List) creates a bulleted list where item order doesn't matter, like a shopping list. <ol> (Ordered List) creates a numbered list where order matters, like recipe steps.\nEvery item in either list type is written inside an <li> (List Item) tag.",
      "syntax": "<ul><li>آیتم</li></ul>\n<ol><li>آیتم</li></ol>"
    },
    {
      "desc_fa": "لیست توصیفی (Description List) برای زمانیه که می‌خوایم یه واژه رو با توضیحش جفت کنیم — مثلاً واژه‌نامه یا سوالات متداول. با <dl> شروع می‌شه، هر واژه داخل <dt> (Description Term) میاد و توضیحش داخل <dd> (Description Details) درست بعدش. می‌تونیم چند <dd> برای یه <dt> داشته باشیم.",
      "desc_en": "A description list is for pairing a term with its explanation — like a glossary or FAQ. It starts with <dl>, each term goes inside <dt> (Description Term), and its explanation right after in <dd> (Description Details). You can have multiple <dd> elements for one <dt>.",
      "html": "<dl>\n  <dt>HTML</dt>\n  <dd>زبان نشانه‌گذاری صفحات وب</dd>\n  <dt>CSS</dt>\n  <dd>زبان استایل‌دهی صفحات</dd>\n</dl>",
      "css": "dt { font-weight: bold; font-family: sans-serif; color: #2f6bff; }\ndd { font-family: sans-serif; margin-bottom: 8px; }",
      "js": "",
      "explain_fa": "لیست توصیفی برای نمایش جفت‌های «واژه - توضیح» مناسبه، مثل یه واژه‌نامه یا بخش سوالات متداول (FAQ).\nاز <dl> (Description List) به‌عنوان container، <dt> (Description Term) برای خود واژه، و <dd> (Description Details) برای توضیحش استفاده می‌شه.",
      "explain_en": "A description list is great for showing \"term - description\" pairs, like a glossary or FAQ section.\nUse <dl> (Description List) as the container, <dt> (Description Term) for the term itself, and <dd> (Description Details) for its explanation.",
      "syntax": "<dl>\n  <dt>واژه</dt>\n  <dd>توضیح</dd>\n</dl>"
    },
    {
      "desc_fa": "جدول برای نمایش داده‌های ردیف/ستونیه، مثل یه صفحه‌گسترده. تگ <table> کل جدول رو در بر می‌گیره، <tr> (Table Row) هر ردیفه، <th> (Table Header) سرستون‌های بولد و وسط‌چینه، و <td> (Table Data) یه خونه‌ی معمولیه. نکته‌ی مهم: جدول‌ها فقط برای داده‌ی جدولی مناسبن، نه برای چیدمان کلی صفحه (اون کار CSS Grid/Flexbox هست که بعداً یاد می‌گیری).",
      "desc_en": "A table displays row/column data, like a spreadsheet. The <table> tag wraps the whole thing, <tr> (Table Row) is each row, <th> (Table Header) is a bold, centered header cell, and <td> (Table Data) is a regular cell. Note: tables are only meant for tabular data, not general page layout (that's what CSS Grid/Flexbox are for, which you'll learn later).",
      "html": "<table border=\"1\">\n  <tr><th>نام</th><th>نمره</th></tr>\n  <tr><td>سارا</td><td>18</td></tr>\n  <tr><td>علی</td><td>19</td></tr>\n</table>",
      "css": "table { font-family: sans-serif; border-collapse: collapse; }\ntd, th { padding: 8px 14px; }",
      "js": "",
      "explain_fa": "جدول‌ها داده‌ی جدولی (ردیف و ستون) رو نمایش می‌دن. <table> کانتینر اصلیه، <tr> (Table Row) یه ردیفه.\nداخل هر ردیف، <th> (Table Header) برای سرستون‌ها (که معمولاً بولد و وسط‌چین نمایش داده می‌شن) و <td> (Table Data) برای خونه‌های معمولی داده استفاده می‌شه.",
      "explain_en": "Tables display tabular data (rows and columns). <table> is the main container, <tr> (Table Row) is one row.\nInside each row, <th> (Table Header) is for header cells (usually shown bold and centered), and <td> (Table Data) is for regular data cells.",
      "syntax": "<table>\n  <tr><th>سر ستون</th></tr>\n  <tr><td>داده</td></tr>\n</table>"
    },
    {
      "desc_fa": "گاهی می‌خوایم یه سلول چند ستون یا چند ردیف رو اشغال کنه — اینجا colspan (تعداد ستون) و rowspan (تعداد ردیف) به کمک میان. مثلاً یه تیتر که باید بالای دو ستون قرار بگیره از colspan=\"2\" استفاده می‌کنه. این ویژگی‌ها مستقیم روی تگ <td> یا <th> نوشته می‌شن.",
      "desc_en": "Sometimes we want a cell to span multiple columns or rows — that's where colspan (column count) and rowspan (row count) come in. For example, a heading that should sit above two columns uses colspan=\"2\". These attributes are written directly on the <td> or <th> tag.",
      "html": "<table border=\"1\">\n  <tr><th colspan=\"2\">اطلاعات دانش‌آموز</th></tr>\n  <tr><td>نام</td><td>سارا</td></tr>\n  <tr><td rowspan=\"2\">نمرات</td><td>ریاضی: 19</td></tr>\n  <tr><td>ادبیات: 18</td></tr>\n</table>",
      "css": "table { font-family: sans-serif; border-collapse: collapse; }\ntd, th { padding: 8px 14px; text-align: center; }",
      "js": "",
      "explain_fa": "گاهی لازمه یه سلول جدول چند ستون یا چند ردیف رو با هم اشغال کنه. ویژگی colspan تعداد ستون‌هایی که یه سلول باید بگیره رو مشخص می‌کنه.\nویژگی rowspan همین کارو برای تعداد ردیف‌ها انجام می‌ده. این‌ها برای ساخت جدول‌های پیچیده‌تر با سرستون‌های ادغام‌شده خیلی کاربردی‌ان.",
      "explain_en": "Sometimes a table cell needs to span multiple columns or rows. The colspan attribute specifies how many columns a cell should occupy.\nThe rowspan attribute does the same for rows. These are very useful for building more complex tables with merged header cells.",
      "syntax": "<td colspan=\"2\">...</td>\n<td rowspan=\"2\">...</td>"
    },
    {
      "desc_fa": "فرم راه اصلی گرفتن اطلاعات از کاربره — از یه نظرسنجی ساده تا صفحه‌ی ثبت‌نام. با تگ <form> شروع می‌شه که همه‌ی فیلدها رو در بر می‌گیره. تگ <label> یه برچسب برای فیلد می‌سازه (کلیک روی برچسب هم فیلد رو فوکوس می‌کنه، خوبه برای دسترسی‌پذیری)، <input> فیلد ورودیه، و <button type=\"submit\"> فرم رو ارسال می‌کنه.",
      "desc_en": "A form is the main way to collect information from a user — from a simple survey to a signup page. It starts with a <form> tag wrapping all the fields. <label> creates a label for a field (clicking the label also focuses the field, good for accessibility), <input> is the input field, and <button type=\"submit\"> submits the form.",
      "html": "<form>\n  <label>نام: <input type=\"text\" /></label><br><br>\n  <button type=\"submit\">ارسال</button>\n</form>",
      "css": "form { font-family: sans-serif; }\ninput { padding: 6px; }",
      "js": "",
      "explain_fa": "فرم‌ها راه اصلی دریافت اطلاعات از کاربر هستن — از فرم ورود تا نظرسنجی. تگ <form> کل فرم رو در بر می‌گیره.\nداخل فرم، از <input> برای دریافت متن، از <label> برای برچسب هر فیلد (که دسترسی‌پذیری رو هم بهتر می‌کنه)، و از <button type=\"submit\"> برای دکمه‌ی ارسال استفاده می‌شه.",
      "explain_en": "Forms are the main way to collect information from users — from login forms to surveys. The <form> tag wraps the whole form.\nInside it, use <input> to collect text, <label> to label each field (which also improves accessibility), and <button type=\"submit\"> for the submit button.",
      "syntax": "<form>\n  <input type=\"text\" />\n  <button>ارسال</button>\n</form>"
    },
    {
      "desc_fa": "ویژگی type روی <input> نوع فیلد رو مشخص می‌کنه و رفتار متفاوتی به مرورگر می‌ده: text برای متن ساده، email کیبورد مخصوص ایمیل روی موبایل نشون می‌ده و فرمت رو چک می‌کنه، password کاراکترها رو نقطه نشون می‌ده، checkbox برای انتخاب چندگزینه‌ای، radio برای تک‌گزینه‌ای، و date یه تقویم انتخاب تاریخ میاره. انتخاب type درست، هم تجربه‌ی کاربری رو بهتر می‌کنه هم ولیدیشن رایگان می‌ده.",
      "desc_en": "The type attribute on <input> determines the field's kind and gives the browser different behavior: text for plain text, email shows a special mobile keyboard and checks the format, password masks characters as dots, checkbox for multiple selection, radio for single selection, and date brings up a date picker. Choosing the right type improves user experience and gives free validation.",
      "html": "<input type=\"email\" placeholder=\"ایمیل\" /><br><br>\n<input type=\"password\" placeholder=\"رمز عبور\" /><br><br>\n<label><input type=\"checkbox\" /> من قوانین رو می‌پذیرم</label><br><br>\n<input type=\"date\" />",
      "css": "input { font-family: sans-serif; padding: 6px; margin-bottom: 4px; }",
      "js": "",
      "explain_fa": "ویژگی type روی <input> نوع دقیق ورودی رو مشخص می‌کنه: text برای متن ساده، email که فرمت ایمیل رو چک می‌کنه، password که کاراکترها رو مخفی می‌کنه، checkbox برای انتخاب چندگانه، radio برای انتخاب یکی از چند گزینه، و date برای انتخاب تاریخ با تقویم گرافیکی.\nانتخاب type درست، هم تجربه‌ی کاربری رو بهتر می‌کنه هم ولیدیشن پایه رو رایگان به ما می‌ده.",
      "explain_en": "The type attribute on <input> specifies the exact kind of input: text for plain text, email which checks the email format, password which hides characters, checkbox for multiple selection, radio for choosing one of several options, and date for picking a date with a calendar widget.\nChoosing the right type improves both user experience and gives basic validation for free.",
      "syntax": "<input type=\"email\" />\n<input type=\"checkbox\" />"
    },
    {
      "desc_fa": "قبل از اینکه به جاوااسکریپت برسیم، خود HTML چند ویژگی ولیدیشن رایگان داره: required یعنی فیلد نمی‌تونه خالی بمونه، minlength/maxlength محدودیت طول کاراکتر می‌ذاره، و pattern یه الگوی regex تعریف می‌کنه که مقدار باید باهاش مطابقت داشته باشه. اگه این ویژگی‌ها رعایت نشن، مرورگر خودش قبل از ارسال فرم جلوش رو می‌گیره و پیام خطا نشون می‌ده.",
      "desc_en": "Before we get to JavaScript, HTML itself has free validation attributes: required means the field can't be empty, minlength/maxlength limit character length, and pattern defines a regex the value must match. If these aren't satisfied, the browser blocks form submission itself and shows an error message.",
      "html": "<form>\n  <input type=\"text\" required minlength=\"3\" placeholder=\"حداقل ۳ کاراکتر\" /><br><br>\n  <button type=\"submit\">ارسال</button>\n</form>\n<p>روی ارسال بزن بدون پرکردن، مرورگر خودش هشدار می‌ده.</p>",
      "css": "form, p { font-family: sans-serif; }\ninput { padding: 6px; }",
      "js": "",
      "explain_fa": "مرورگر می‌تونه قبل از ارسال فرم، خودش بعضی چیزها رو چک کنه، بدون نیاز به جاوااسکریپت. ویژگی required یعنی این فیلد نباید خالی بمونه.\nminlength و maxlength حداقل/حداکثر طول متن رو محدود می‌کنن، و pattern یه الگوی regex برای فرمت دقیق (مثلاً شماره تلفن) تعریف می‌کنه. اگه شرط برقرار نباشه، مرورگر خودش پیام خطا نشون می‌ده.",
      "explain_en": "The browser can check some things itself before submitting a form, without needing JavaScript. The required attribute means this field can't be left empty.\nminlength and maxlength restrict the min/max text length, and pattern defines a regex pattern for an exact format (e.g. a phone number). If the condition isn't met, the browser shows its own error message.",
      "syntax": "<input required minlength=\"3\" pattern=\"...\" />"
    },
    {
      "desc_fa": "قبل از HTML5 همه‌چیز <div> بود و هیچ‌کس (نه مرورگر، نه موتور جست‌وجو) نمی‌فهمید کدوم بخش هدر صفحه‌ست یا کدوم بخش محتوای اصلیه. عناصر معنایی این مشکل رو حل کردن: <header> برای بالای صفحه، <nav> برای منو، <main> برای محتوای اصلی (فقط یه بار در هر صفحه)، <article> برای یه محتوای مستقل مثل پست وبلاگ، و <footer> برای پایین صفحه. استفاده ازشون هم به سئو کمک می‌کنه هم کد رو خواناتر می‌کنه.",
      "desc_en": "Before HTML5, everything was a <div> and nobody (not the browser, not search engines) could tell which part was the page header or the main content. Semantic elements solved this: <header> for the top, <nav> for the menu, <main> for the primary content (only once per page), <article> for standalone content like a blog post, and <footer> for the bottom. Using them helps SEO and makes your code more readable.",
      "html": "<header><h2>سایت من</h2></header>\n<main><p>محتوای اصلی صفحه</p></main>\n<footer><p>© ۲۰۲۶</p></footer>",
      "css": "header { background:#2f6bff; color:white; padding:10px; font-family:sans-serif; }\nmain { padding:10px; font-family:sans-serif; }\nfooter { background:#eee; padding:8px; font-family:sans-serif; }",
      "js": "",
      "explain_fa": "قبل از HTML5، همه‌چیز با <div> ساخته می‌شد که هیچ معنایی نداشت. عناصر معنایی (Semantic) مثل <header>، <nav>، <main>، <article>، <section> و <footer> دقیقاً همون <div> هستن از نظر ظاهر، ولی به مرورگر، موتورهای جست‌وجو، و صفحه‌خوان‌ها می‌گن این بخش چه نقشی داره.\nاستفاده از اونا هم سئوی سایت رو بهتر می‌کنه، هم کد رو برای برنامه‌نویس‌های دیگه خواناتر.",
      "explain_en": "Before HTML5, everything was built with <div>, which has no meaning. Semantic elements like <header>, <nav>, <main>, <article>, <section>, and <footer> look exactly like a <div>, but they tell the browser, search engines, and screen readers what role that section plays.\nUsing them improves both your site's SEO and makes your code more readable for other developers.",
      "syntax": "<header>...</header>\n<nav>...</nav>\n<main>...</main>\n<footer>...</footer>"
    },
    {
      "desc_fa": "<div> و <span> برخلاف تگ‌های قبلی هیچ معنای خاصی ندارن — فقط برای گروه‌بندی و استایل‌دهی هستن. فرقشون اینه که <div> یه عنصر «بلوکی»ه (همیشه خط جدید می‌سازه، مثل یه جعبه‌ی مستقل)، ولی <span> «درون‌خطی»ه (وسط یه جمله جا می‌گیره، بدون شکستن خط). قانون کلی: وقتی می‌خوای یه بخش بزرگ رو گروه کنی از div، وقتی می‌خوای فقط چندتا کلمه‌ی وسط متن رو استایل بدی از span استفاده کن.",
      "desc_en": "<div> and <span>, unlike previous tags, have no inherent meaning — they exist purely for grouping and styling. The difference: <div> is a \"block\" element (always starts a new line, like a standalone box), while <span> is \"inline\" (fits within a sentence, without breaking the line). Rule of thumb: use div to group a large section, use span to style just a few words within text.",
      "html": "<div>این یک div است (بلوک)</div>\n<p>این متن <span style=\"color:red\">یک کلمه‌ی قرمز</span> با span دارد.</p>",
      "css": "div { background: #eee; padding: 8px; font-family: sans-serif; }\np { font-family: sans-serif; }",
      "js": "",
      "explain_fa": "<div> یه عنصر بلوکی عمومیه (همیشه یه خط جدید شروع می‌کنه) که برای گروه‌بندی و چیدمان بخش‌های بزرگ‌تر صفحه استفاده می‌شه.\n<span> برعکس، یه عنصر درون‌خطیه (inline) — یعنی داخل یه خط از متن جا می‌گیره بدون اینکه خط جدید بسازه، مناسب برای استایل‌دادن به یه بخش کوچیک از متن، مثل یه کلمه‌ی رنگی وسط یه جمله.",
      "explain_en": "<div> is a generic block-level element (always starts a new line) used for grouping and laying out larger sections of the page.\n<span>, in contrast, is an inline element — it fits within a line of text without starting a new one, perfect for styling a small part of text, like one colored word in the middle of a sentence.",
      "syntax": "<div>بلوک</div>\n<span>درون‌خط</span>"
    },
    {
      "desc_fa": "کامنت‌ها بخشی از کدن که مرورگر کاملاً نادیده‌شون می‌گیره و فقط برای خود برنامه‌نویس (یا هم‌تیمی‌هاش) هستن — مثلاً برای توضیح دادن «این بخش چیکار می‌کنه» یا موقتاً غیرفعال کردن یه تیکه کد. سینتکسش <!-- متن کامنت --> هست. عادت خوبیه که کدهای پیچیده یا غیرواضح رو کامنت‌گذاری کنی.",
      "desc_en": "Comments are parts of your code that the browser completely ignores — they exist only for you (or your teammates), for example to explain \"what this section does\" or to temporarily disable a piece of code. The syntax is <!-- comment text -->. It's good practice to comment complex or non-obvious code.",
      "html": "<!-- این یک کامنت است و دیده نمی‌شود -->\n<p>این متن قابل مشاهده است.</p>",
      "css": "p { font-family: sans-serif; }",
      "js": "",
      "explain_fa": "کامنت در HTML با <!-- و --> نوشته می‌شه. هر چیزی بین این دو، توسط مرورگر پردازش نمی‌شه و به کاربر نهایی نشون داده نمی‌شه.\nکامنت‌ها برای یادداشت‌گذاری برای خودمون یا هم‌تیمی‌ها مفیدن — مثلاً توضیح اینکه یه بخش از کد چیکار می‌کنه، یا موقتاً غیرفعال‌کردن یه تکه کد بدون حذفش.",
      "explain_en": "HTML comments are written with <!-- and -->. Anything between these is not processed by the browser and not shown to the end user.\nComments are useful for leaving notes for yourself or teammates — e.g. explaining what a section of code does, or temporarily disabling a chunk of code without deleting it.",
      "syntax": "<!-- این یک کامنت است -->"
    },
    {
      "desc_fa": "بعضی کاراکترها توی HTML معنای خاص دارن (مثلاً < و > برای تعریف تگ‌ها)، پس اگه بخوایم خودشون رو به‌عنوان متن نشون بدیم باید از entity استفاده کنیم: &lt; به‌جای <، &gt; به‌جای >، &amp; به‌جای &، و &copy; برای علامت کپی‌رایت ©. این‌ها یه کد خاص هستن که مرورگر می‌فهمه باید چه کاراکتری نشون بده.",
      "desc_en": "Some characters have special meaning in HTML (like < and > for defining tags), so to display them literally as text we use entities: &lt; for <, &gt; for >, &amp; for &, and &copy; for the copyright symbol ©. These are special codes the browser knows how to translate into the actual character.",
      "html": "<p>برای نمایش تگ می‌نویسیم: &lt;p&gt;</p>\n<p>کپی‌رایت: &copy; ۲۰۲۶</p>",
      "css": "p { font-family: sans-serif; }",
      "js": "",
      "explain_fa": "بعضی کاراکترها در HTML معنای خاص دارن (مثل < و > که برای تگ‌ها استفاده می‌شن)، پس اگه بخوایم خودشون رو به‌عنوان متن نشون بدیم، باید از entity استفاده کنیم.\nمثلاً &lt; برای نمایش <، &gt; برای >، &amp; برای &، و &copy; برای علامت کپی‌رایت ©. مرورگر این کدها رو به کاراکتر واقعیش تبدیل می‌کنه.",
      "explain_en": "Some characters have special meaning in HTML (like < and > used for tags), so to display them literally as text, we need entities.\nFor example, &lt; displays <, &gt; displays >, &amp; displays &, and &copy; displays the copyright symbol ©. The browser converts these codes into the actual character.",
      "syntax": "&lt; &gt; &amp; &copy;"
    },
    {
      "desc_fa": "<iframe> (Inline Frame) یه پنجره‌ی کوچیک داخل صفحه‌ی توئه که یه صفحه‌ی وب کاملاً دیگه رو نشون می‌ده — مثلاً یه نقشه‌ی گوگل، یه ویدیوی یوتیوب، یا حتی یه سایت دیگه. با ویژگی src آدرس اون صفحه رو می‌دیم، و width/height اندازه‌ش رو مشخص می‌کنه. نکته: بعضی سایت‌ها به دلایل امنیتی اجازه نمی‌دن داخل iframe نمایش داده بشن.",
      "desc_en": "<iframe> (Inline Frame) is a small window inside your page that shows an entirely different web page — like a Google Map, a YouTube video, or even another website. The src attribute gives that page's URL, and width/height set its size. Note: some sites don't allow being embedded in an iframe for security reasons.",
      "html": "<iframe src=\"about:blank\" width=\"300\" height=\"150\" style=\"border:2px dashed #ccc;\"></iframe>\n<p>یک آی‌فریم خالی نمونه (به‌جای src یک آدرس واقعی بذار)</p>",
      "css": "p { font-family: sans-serif; }",
      "js": "",
      "explain_fa": "<iframe> یه پنجره‌ی مستطیلی داخل صفحه‌ی ماست که یه صفحه‌ی وب کاملاً جدا (حتی از یه سایت دیگه) رو نشون می‌ده — مثل جاسازی‌کردن یه نقشه‌ی گوگل یا ویدیوی یوتیوب.\nویژگی src آدرس اون صفحه‌ی جداست، و width/height اندازه‌ی پنجره رو تعیین می‌کنه.",
      "explain_en": "<iframe> is a rectangular window inside our page that shows a completely separate web page (even from another site) — like embedding a Google Map or a YouTube video.\nThe src attribute is the address of that separate page, and width/height set the window's size.",
      "syntax": "<iframe src=\"آدرس\" width=\"300\" height=\"150\"></iframe>"
    },
    {
      "desc_fa": "قبل از HTML5، پخش صدا/ویدیو نیاز به پلاگین‌هایی مثل فلش داشت. حالا با <audio controls> و <video controls> مرورگر خودش یه پلیر کامل (پخش، توقف، صدا) می‌سازه. ویژگی controls این دکمه‌ها رو نشون می‌ده؛ بدونش، فایل پخش می‌شه ولی هیچ کنترلی نداری. داخلش می‌تونیم چند <source> با فرمت‌های مختلف بذاریم تا مرورگر هر کدوم رو پشتیبانی کرد استفاده کنه.",
      "desc_en": "Before HTML5, playing audio/video required plugins like Flash. Now with <audio controls> and <video controls>, the browser itself builds a complete player (play, pause, volume). The controls attribute shows these buttons; without it, the file plays but you have no controls. Inside, we can add multiple <source> tags with different formats so the browser uses whichever it supports.",
      "html": "<video controls width=\"280\">\n  <source src=\"movie.mp4\" type=\"video/mp4\" />\n  مرورگرت از ویدیو پشتیبانی نمی‌کند.\n</video>\n<p>به‌جای movie.mp4 آدرس فایل واقعی رو بذار.</p>",
      "css": "p { font-family: sans-serif; }",
      "js": "",
      "explain_fa": "<video controls> و <audio controls> اجازه می‌دن ویدیو/صدا رو بدون نیاز به هیچ افزونه یا کتابخونه‌ی جانبی، مستقیم توی صفحه پخش کنیم. ویژگی controls یعنی دکمه‌های پخش/توقف/صدا به‌صورت خودکار نشون داده بشن.\nداخل هر دو تگ، از <source src=\"...\" type=\"...\"> استفاده می‌کنیم تا اگه فرمت اول پشتیبانی نشد، مرورگر فرمت بعدی رو امتحان کنه.",
      "explain_en": "<video controls> and <audio controls> let us play video/audio directly on the page without any plugin or external library. The controls attribute means play/pause/volume buttons are shown automatically.\nInside either tag, we use <source src=\"...\" type=\"...\"> so if the first format isn't supported, the browser tries the next one.",
      "syntax": "<video controls>\n  <source src=\"...\" type=\"video/mp4\" />\n</video>"
    },
    {
      "desc_fa": "متا تگ‌ها توی <head> اطلاعاتی «درباره‌ی صفحه» می‌دن که خود صفحه دیده نمی‌شن ولی برای مرورگر و موتورهای جست‌وجو مهمن. meta charset کدگذاری کاراکترها رو مشخص می‌کنه، meta name=\"description\" همون متنیه که گوگل زیر لینک سایتت توی نتایج جست‌وجو نشون می‌ده. نوشتن یه description خوب و دقیق مستقیم روی نرخ کلیک سایتت در گوگل اثر می‌ذاره.",
      "desc_en": "Meta tags in <head> give \"information about the page\" that isn't displayed itself but matters to browsers and search engines. meta charset sets the character encoding, and meta name=\"description\" is the text Google shows under your site's link in search results. Writing a good, accurate description directly affects your site's click-through rate on Google.",
      "html": "<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"description\" content=\"یک صفحه‌ی آموزشی درباره HTML\">\n</head>\n<body>\n  <p>این متا تگ‌ها در body دیده نمی‌شن، فقط در head هستن.</p>\n</body>",
      "css": "p { font-family: sans-serif; }",
      "js": "",
      "explain_fa": "متا تگ‌ها داخل <head> اطلاعاتی درباره‌ی صفحه به مرورگر و موتورهای جست‌وجو می‌دن، بدون اینکه خودشون توی صفحه دیده بشن.\n<meta name=\"description\" content=\"...\"> توضیحی که گوگل زیر لینک سایتمون در نتایج جست‌وجو نشون می‌ده رو مشخص می‌کنه — یه متن خوب اینجا می‌تونه نرخ کلیک روی سایتمون رو بیشتر کنه.",
      "explain_en": "Meta tags inside <head> give information about the page to the browser and search engines, without being visible on the page themselves.\n<meta name=\"description\" content=\"...\"> specifies the text Google shows under our site's link in search results — good text here can increase our site's click-through rate.",
      "syntax": "<meta name=\"description\" content=\"...\" />"
    },
    {
      "desc_fa": "ویژگی‌های data-* (مثل data-user-id) به ما اجازه می‌دن هر داده‌ی دلخواهی رو مستقیم روی یه تگ HTML ذخیره کنیم، بدون نیاز به یه دیتابیس یا متغیر جدا. این داده بعداً با جاوااسکریپت و متد getAttribute («data-user-id») یا element.dataset.userId قابل خوندنه. خیلی مفیده برای وقتی می‌خوایم یه اطلاعات مرتبط با یه دکمه یا کارت رو نگه داریم، مثلاً آیدی یه محصول در یه فروشگاه آنلاین.",
      "desc_en": "data-* attributes (like data-user-id) let us store any custom data directly on an HTML tag, without needing a database or separate variable. This data can later be read with JavaScript using getAttribute(\"data-user-id\") or element.dataset.userId. Very useful when you need to keep info tied to a button or card, like a product ID in an online store.",
      "html": "<button id=\"btn\" data-user-id=\"42\">نمایش آیدی</button>\n<p id=\"out\"></p>",
      "css": "button { font-family: sans-serif; padding: 8px; }\np { font-family: sans-serif; }",
      "js": "document.getElementById(\"btn\").addEventListener(\"click\", function () {\n  const id = this.getAttribute(\"data-user-id\");\n  document.getElementById(\"out\").textContent = \"آیدی کاربر: \" + id;\n});",
      "explain_fa": "ویژگی‌های data-* (مثل data-user-id=\"42\") به ما اجازه می‌دن هر داده‌ی دلخواهی رو مستقیم روی یه عنصر HTML ذخیره کنیم، بدون اینکه HTML استاندارد رو خراب کنیم.\nبعداً با جاوااسکریپت، از element.dataset.userId یا element.getAttribute(\"data-user-id\") می‌تونیم همون مقدار رو بخونیم — خیلی مفید برای وصل‌کردن داده به رابط کاربری.",
      "explain_en": "data-* attributes (like data-user-id=\"42\") let us store any custom data directly on an HTML element, without breaking standard HTML.\nLater in JavaScript, we can read that value with element.dataset.userId or element.getAttribute(\"data-user-id\") — very useful for attaching data to the UI.",
      "syntax": "<div data-user-id=\"42\">...</div>"
    },
    {
      "desc_fa": "ARIA (Accessible Rich Internet Applications) یه سری ویژگی اضافه‌ست که به صفحه‌خوان‌ها (نرم‌افزارهایی که افراد نابینا یا کم‌بینا برای مرور وب استفاده می‌کنن) کمک می‌کنه عناصر رو بهتر بفهمن. مثلاً aria-label یه توضیح متنی برای یه دکمه‌ی فقط-آیکون‌دار می‌ده، و aria-hidden یه عنصر رو از صفحه‌خوان مخفی می‌کنه (نه از نمایش بصری). دسترسی‌پذیری فقط یه «قابلیت اضافه» نیست؛ در خیلی جاها الزام قانونی هم هست.",
      "desc_en": "ARIA (Accessible Rich Internet Applications) is a set of extra attributes that help screen readers (software used by blind or low-vision users to browse the web) understand elements better. For example, aria-label gives a text description for an icon-only button, and aria-hidden hides an element from screen readers (not from visual display). Accessibility isn't just a \"nice extra\" — in many places it's a legal requirement too.",
      "html": "<button aria-label=\"بستن پنجره\">✕</button>\n<p>این دکمه فقط یه علامت ✕ داره ولی صفحه‌خوان می‌گه «بستن پنجره».</p>",
      "css": "button { font-size: 18px; font-family: sans-serif; }\np { font-family: sans-serif; }",
      "js": "",
      "explain_fa": "ARIA (Accessible Rich Internet Applications) ویژگی‌هاییه که به صفحه‌خوان‌ها (نرم‌افزارهایی که افراد نابینا استفاده می‌کنن) کمک می‌کنه محتوای صفحه رو بهتر توصیف کنن.\nمثلاً aria-label یه توضیح متنی برای عنصرهایی می‌ده که فقط یه آیکون دارن (مثل دکمه‌ی ✕ که می‌گه aria-label=\"بستن\"). دسترسی‌پذیری فقط یه ویژگی «اضافی» نیست، بخشی از یه سایت خوبه.",
      "explain_en": "ARIA (Accessible Rich Internet Applications) attributes help screen readers (software used by visually impaired people) better describe page content.\nFor example, aria-label gives a text description to elements that only show an icon (like a ✕ button with aria-label=\"Close\"). Accessibility isn't just an \"extra\" feature — it's part of building a good site.",
      "syntax": "<button aria-label=\"بستن\">✕</button>"
    },
    {
      "desc_fa": "تگ <canvas> یه بوم خالیه که فقط با جاوااسکریپت روش چیزی رسم می‌شه — خودش هیچ ابزار ترسیم داخلی نداره. برای رسم، اول با getContext(\"2d\") یه «زمینه‌ی رسم» می‌گیریم، بعد با متدهایی مثل fillRect (رسم مستطیل) یا arc (رسم دایره) شکل می‌سازیم. Canvas برای گرافیک‌های پویا مثل نمودار، بازی، یا انیمیشن پیکسلی استفاده می‌شه.",
      "desc_en": "The <canvas> tag is a blank drawing surface — it has no built-in drawing tools itself; everything is drawn via JavaScript. To draw, we first get a \"drawing context\" with getContext(\"2d\"), then use methods like fillRect (draw a rectangle) or arc (draw a circle). Canvas is used for dynamic graphics like charts, games, or pixel-based animation.",
      "html": "<canvas id=\"c\" width=\"250\" height=\"120\" style=\"border:1px solid #ccc;\"></canvas>",
      "css": "",
      "js": "const ctx = document.getElementById(\"c\").getContext(\"2d\");\nctx.fillStyle = \"#2f6bff\";\nctx.fillRect(20, 20, 100, 60);",
      "explain_fa": "<canvas> یه بوم خالیه که خودش هیچ کاری نمی‌کنه؛ باید با جاوااسکریپت روش نقاشی کنیم. اول یه context می‌گیریم (معمولاً \"2d\")، بعد با دستوراتی مثل fillRect یا arc شکل رسم می‌کنیم.\nبرخلاف SVG که هر شکل یه عنصر جداست، Canvas مثل یه بوم واقعی نقاشیه — فقط پیکسل‌ها رو رنگ می‌کنه و شکل‌های قبلی رو «یادش» نمی‌مونه مگر خودمون کد بنویسیم.",
      "explain_en": "<canvas> is a blank surface that does nothing by itself; we must draw on it with JavaScript. First we get a context (usually \"2d\"), then draw shapes with commands like fillRect or arc.\nUnlike SVG where each shape is a separate element, Canvas is like a real painting canvas — it just colors pixels and doesn't \"remember\" previous shapes unless we code that ourselves.",
      "syntax": "<canvas id=\"c\" width=\"200\" height=\"100\"></canvas>"
    },
    {
      "desc_fa": "SVG (Scalable Vector Graphics) برخلاف عکس‌های معمولی (jpg/png که پیکسلی هستن)، با فرمول‌های ریاضی شکل‌ها رو توصیف می‌کنه — به همین خاطر توی هر اندازه‌ای که بزرگش کنی، همیشه تیز و بدون پیکسلی شدن می‌مونه. می‌تونیم SVG رو مستقیم داخل HTML بنویسیم (مثل مثال زیر) یا به‌عنوان فایل جدا لینکش کنیم. مناسب برای آیکون، لوگو و نمودارهای ساده‌ست.",
      "desc_en": "SVG (Scalable Vector Graphics), unlike regular images (jpg/png which are pixel-based), describes shapes using math formulas — which is why it stays crisp at any size without pixelating. We can write SVG directly inside HTML (like the example below) or link it as a separate file. Great for icons, logos, and simple diagrams.",
      "html": "<svg width=\"150\" height=\"150\">\n  <circle cx=\"75\" cy=\"75\" r=\"60\" fill=\"#7aa8ff\" />\n  <text x=\"75\" y=\"80\" fill=\"white\" text-anchor=\"middle\">SVG</text>\n</svg>",
      "css": "",
      "js": "",
      "explain_fa": "SVG (Scalable Vector Graphics) گرافیک برداریه که مستقیم به‌صورت تگ‌های HTML نوشته می‌شه، مثل <circle> یا <rect>. چون برداریه (نه پیکسلی)، توی هر اندازه‌ای بدون افت کیفیت و شکسته‌شدن نمایش داده می‌شه.\nبرخلاف Canvas، هر شکل SVG یه عنصر مجزا در DOM هست که می‌شه با CSS استایلش داد یا با جاوااسکریپت بهش دسترسی داشت.",
      "explain_en": "SVG (Scalable Vector Graphics) is vector graphics written directly as HTML tags, like <circle> or <rect>. Because it's vector-based (not pixel-based), it displays at any size without losing quality or becoming pixelated.\nUnlike Canvas, each SVG shape is a separate element in the DOM that can be styled with CSS or accessed with JavaScript.",
      "syntax": "<svg><circle cx=\"50\" cy=\"50\" r=\"40\" /></svg>"
    },
    {
      "desc_fa": "فاوآیکون همون آیکون کوچیکیه که کنار عنوان یه سایت توی تب مرورگر می‌بینی — با <link rel=\"icon\" href=\"...\"> توی head تنظیم می‌شه. عناصر دیگه‌ی head که مهمن: <title> که متن تب مرورگر رو تعیین می‌کنه، و <meta> که اطلاعات مختلفی مثل کدگذاری یا توضیح صفحه رو نگه می‌داره. هیچ‌کدوم از این‌ها توی body دیده نمی‌شن.",
      "desc_en": "A favicon is the small icon you see next to a site's title in the browser tab — set with <link rel=\"icon\" href=\"...\"> in head. Other important head elements: <title>, which sets the browser tab text, and <meta>, which holds various info like encoding or page description. None of these appear in body.",
      "html": "<head>\n  <title>عنوان تب مرورگر</title>\n  <link rel=\"icon\" href=\"favicon.png\">\n</head>\n<body>\n  <p>این تگ‌ها در بالای تب مرورگر اثر می‌ذارن.</p>\n</body>",
      "css": "p { font-family: sans-serif; }",
      "js": "",
      "explain_fa": "فاوآیکون همون آیکون کوچیکیه که کنار عنوان تب مرورگر می‌بینیم؛ با <link rel=\"icon\" href=\"...\"> در head تنظیم می‌شه.\nعناصر مهم دیگه‌ی head شامل <title> (عنوان تب)، <meta charset> (کدگذاری کاراکترها)، و لینک‌های فایل‌های CSS/فونت هستن — همه‌شون تنظیمات پشت‌صحنه‌ان که مستقیم توی body دیده نمی‌شن.",
      "explain_en": "A favicon is the small icon we see next to the browser tab's title; it's set with <link rel=\"icon\" href=\"...\"> in head.\nOther important head elements include <title> (tab title), <meta charset> (character encoding), and links to CSS/font files — all behind-the-scenes settings not directly visible in the body.",
      "syntax": "<link rel=\"icon\" href=\"favicon.png\" />"
    },
    {
      "desc_fa": "کدگذاری کاراکتر مشخص می‌کنه کامپیوتر چطور بایت‌ها رو به حروف تبدیل کنه. UTF-8 استاندارد امروزیه که تقریباً همه‌ی زبان‌های دنیا (فارسی، عربی، چینی، ایموجی و...) رو پشتیبانی می‌کنه، و با <meta charset=\"UTF-8\"> اونو در ابتدای head تنظیم می‌کنیم. بدون این تگ، ممکنه متن فارسی یا ایموجی‌ها به‌صورت علامت سوال یا کاراکترهای عجیب نمایش داده بشن.",
      "desc_en": "Character encoding determines how the computer translates bytes into letters. UTF-8 is today's standard, supporting nearly every language in the world (Persian, Arabic, Chinese, emojis...), set with <meta charset=\"UTF-8\"> at the start of head. Without this tag, Persian text or emojis might display as question marks or garbled characters.",
      "html": "<head>\n  <meta charset=\"UTF-8\">\n</head>\n<body>\n  <p>سلام 👋 فارسی و ایموجی درست نمایش داده می‌شن.</p>\n</body>",
      "css": "p { font-family: sans-serif; }",
      "js": "",
      "explain_fa": "<meta charset=\"UTF-8\"> اولین چیزیه که باید در head هر صفحه بذاریم. UTF-8 یه استاندارد کدگذاریه که تقریباً همه‌ی زبان‌های دنیا (از جمله فارسی) و ایموجی‌ها رو پشتیبانی می‌کنه.\nبدون این خط، ممکنه حروف فارسی یا ایموجی‌ها به‌صورت علامت‌های عجیب و غریب (مثل �) نمایش داده بشن.",
      "explain_en": "<meta charset=\"UTF-8\"> should be the very first thing in every page's head. UTF-8 is an encoding standard that supports nearly every language in the world (including Persian) and emojis.\nWithout this line, Persian letters or emojis might display as strange garbled symbols (like ?).",
      "syntax": "<meta charset=\"UTF-8\" />"
    },
    {
      "desc_fa": "بعد از یادگیری تگ‌ها، وقتشه چند عادت خوب رو یاد بگیری: تورفتگی (indentation) منظم بذار تا کد خواناتر باشه، همیشه از تگ‌های semantic به‌جای div بی‌معنی استفاده کن، هیچ‌وقت alt عکس‌ها رو فراموش نکن، و مطمئن شو هر تگی که باز کردی رو بستی. این عادت‌ها باعث می‌شن کدت هم برای خودت بعداً، هم برای هم‌تیمی‌هات قابل‌فهم بمونه.",
      "desc_en": "After learning the tags, it's time for some good habits: keep consistent indentation for readability, always prefer semantic tags over meaningless divs, never forget alt text on images, and make sure every tag you open gets closed. These habits keep your code understandable both for your future self and your teammates.",
      "html": "<article>\n  <h2>عنوان مقاله</h2>\n  <p>یک پاراگراف تمیز و مرتب.</p>\n  <img src=\"https://via.placeholder.com/100\" alt=\"توضیح تصویر\" />\n</article>",
      "css": "article { font-family: sans-serif; }",
      "js": "",
      "explain_fa": "HTML تمیز یعنی: تورفتگی (indentation) درست و منظم برای خوانایی، استفاده از تگ‌های semantic به‌جای <div> برای همه‌چی، همیشه alt گذاشتن روی عکس‌ها، و بستن همه‌ی تگ‌هایی که نیاز به بسته‌شدن دارن.\nاین عادت‌ها باعث می‌شن کدت هم برای خودت بعد از چند ماه، هم برای هم‌تیمی‌هات قابل‌فهم بمونه.",
      "explain_en": "Clean HTML means: proper, consistent indentation for readability, using semantic tags instead of <div> for everything, always adding alt to images, and closing every tag that needs closing.\nThese habits keep your code understandable both for yourself months later and for your teammates.",
      "syntax": "<article>\n  <h2>...</h2>\n  <p>...</p>\n</article>"
    },
    {
      "desc_fa": "ابزار توسعه‌دهنده‌ی مرورگر (با زدن F12 یا راست‌کلیک → Inspect باز می‌شه) مهم‌ترین ابزاریه که هر برنامه‌نویس فرانت‌اندی روزانه ازش استفاده می‌کنه. تب Elements ساختار HTML زنده‌ی صفحه رو نشون می‌ده (حتی می‌تونی موقتاً ویرایشش کنی)، و تب Console پیام‌های console.log و خطاهای جاوااسکریپت رو نشون می‌ده. یاد گرفتن این ابزار سرعت پیدا کردن و رفع باگ‌ها رو چند برابر می‌کنه.",
      "desc_en": "Browser DevTools (opened with F12 or right-click → Inspect) is the most important tool every frontend developer uses daily. The Elements tab shows the live HTML structure of the page (you can even edit it temporarily), and the Console tab shows console.log messages and JavaScript errors. Learning this tool massively speeds up finding and fixing bugs.",
      "html": "<p id=\"debug-me\">راست‌کلیک کن و Inspect رو بزن تا این پاراگراف رو توی DevTools ببینی.</p>",
      "css": "#debug-me { font-family: sans-serif; color: #7aa8ff; }",
      "js": "console.log(\"این پیام رو توی تب Console مرورگر می‌بینی\");",
      "explain_fa": "ابزار توسعه‌دهنده‌ی مرورگر (با زدن F12 یا راست‌کلیک → Inspect باز می‌شه) بهت اجازه می‌ده HTML صفحه رو زنده ببینی، تغییرش بدی (فقط موقتاً، توی خود مرورگر)، و خطاهای جاوااسکریپت رو توی تب Console پیدا کنی.\nاین مهم‌ترین ابزار روزمره‌ی هر برنامه‌نویس وبه — یاد بگیر باهاش راحت باشی.",
      "explain_en": "Browser DevTools (opened with F12 or right-click → Inspect) let you see the page's HTML live, temporarily edit it (only in the browser, not the actual file), and find JavaScript errors in the Console tab.\nThis is the most important everyday tool for any web developer — get comfortable using it.",
      "syntax": "// F12 برای باز کردن DevTools"
    },
    {
      "desc_fa": "نوار ناوبری (Navbar) یکی از پرکاربردترین بخش‌های هر سایته و معمولاً از ترکیب <nav> (که سمانتیک درسته) و یه لیست از لینک‌ها ساخته می‌شه. اینجا فقط ساختار HTML رو یاد می‌گیریم؛ توی درس‌های CSS بعدی (فلکس‌باکس) یاد می‌گیری چطور این لینک‌ها رو به‌صورت افقی و شیک بچینی.",
      "desc_en": "A navbar is one of the most common parts of any site, usually built from a <nav> (the semantically correct choice) with a list of links. Here we just learn the HTML structure; in later CSS lessons (flexbox) you'll learn to arrange these links horizontally and stylishly.",
      "html": "<nav>\n  <a href=\"#\">خانه</a>\n  <a href=\"#\">درباره</a>\n  <a href=\"#\">تماس</a>\n</nav>",
      "css": "nav { display: flex; gap: 16px; font-family: sans-serif; background:#2f6bff; padding: 10px; }\nnav a { color: white; text-decoration: none; }",
      "js": "",
      "explain_fa": "نوار ناوبری (Navbar) معمولاً بالای هر صفحه‌ی وبه و لینک‌های اصلی سایت رو نشون می‌ده. از نظر ساختار HTML، یه <nav> که داخلش یه لیست از <a> هست کافیه.\nچیدمان افقی (کنار هم قرارگرفتن لینک‌ها) کار CSS هست (معمولاً با Flexbox)، نه HTML — این درس رو با درس‌های Flexbox توی بخش CSS ترکیب کن.",
      "explain_en": "A navbar is usually at the top of every web page and shows the site's main links. Structurally in HTML, a <nav> containing a list of <a> tags is enough.\nHorizontal layout (links sitting side by side) is CSS's job (usually with Flexbox), not HTML's — combine this lesson with the Flexbox lessons in the CSS section.",
      "syntax": "<nav>\n  <a href=\"#\">خانه</a>\n  <a href=\"#\">درباره</a>\n</nav>"
    },
    {
      "desc_fa": "به آخرین درس بخش HTML رسیدی! وقتشه همه چیزی که یاد گرفتی رو با هم ترکیب کنی: هدینگ برای اسم، تگ img برای عکس پروفایل (با alt درست)، پاراگراف برای بیوگرافی، و یه لینک برای رزومه. سعی کن این کد رو ویرایش کنی و اطلاعات خودت رو جایگزین کن — این بهترین راه برای تثبیت یادگیریه.",
      "desc_en": "You've reached the final HTML lesson! Time to combine everything you've learned: a heading for the name, an img tag for a profile picture (with proper alt), a paragraph for the bio, and a link for a resume. Try editing this code and replacing it with your own info — that's the best way to cement what you've learned.",
      "html": "<div class=\"profile\">\n  <img src=\"https://via.placeholder.com/100\" alt=\"عکس پروفایل\" />\n  <h2>نام شما</h2>\n  <p>یک برنامه‌نویس علاقه‌مند به وب.</p>\n  <a href=\"#\">مشاهده‌ی رزومه</a>\n</div>",
      "css": ".profile { font-family: sans-serif; text-align: center; padding: 20px; }\n.profile img { border-radius: 50%; }",
      "js": "",
      "explain_fa": "این پروژه همه‌ی چیزهایی که تا الان یاد گرفتی رو با هم ترکیب می‌کنه: یه هدینگ برای اسم، یه <img> برای عکس پروفایل، یه <p> برای بیوگرافی کوتاه، و یه <a> برای لینک به رزومه یا شبکه‌ی اجتماعی.\nسعی کن از تگ‌های semantic (مثل <article> یا <section>) هم برای دورش استفاده کنی — این دقیقاً همون کاریه که یه صفحه‌ی پروفایل واقعی نیاز داره.",
      "explain_en": "This project combines everything you've learned so far: a heading for the name, an <img> for a profile photo, a <p> for a short bio, and an <a> linking to a resume or social profile.\nTry wrapping it in semantic tags too (like <article> or <section>) — this is exactly what a real profile page needs.",
      "syntax": "<div class=\"profile\">...</div>"
    }
  ],
  "css": [
    {
      "desc_fa": "CSS به مرورگر می‌گه HTML چطور نمایش داده بشه: رنگ، فونت، فاصله و چیدمان.",
      "desc_en": "CSS tells the browser how HTML should look: color, font, spacing, and layout.",
      "html": "<h2>سلام CSS!</h2>\n<p>این متن با CSS استایل گرفته.</p>",
      "css": "h2 { color: #C97A2B; }\np { font-family: sans-serif; font-size: 18px; }",
      "js": "",
      "explain_fa": "CSS (Cascading Style Sheets) مسئول ظاهر صفحه‌ست: رنگ، فونت، فاصله، اندازه، و چیدمان. بدون CSS، هر صفحه‌ی HTML فقط متن سیاه روی پس‌زمینه‌ی سفیده.\nیه قانون CSS از یه سلکتور (چه چیزی رو استایل بده) و یه بلوک {} (چطور استایلش بده) تشکیل شده: مثلاً p { color: blue; } یعنی «همه‌ی پاراگراف‌ها آبی بشن».",
      "explain_en": "CSS (Cascading Style Sheets) is responsible for a page's appearance: color, font, spacing, size, and layout. Without CSS, every HTML page is just black text on a white background.\nA CSS rule consists of a selector (what to style) and a {} block (how to style it): e.g. p { color: blue; } means \"make all paragraphs blue\".",
      "syntax": "selector {\n  property: value;\n}"
    },
    {
      "desc_fa": "سه راه برای اضافه‌کردن CSS: inline (روی خود تگ با style)، internal (تگ <style> در head)، و external (فایل .css جدا).",
      "desc_en": "Three ways to add CSS: inline (style attribute), internal (<style> tag in head), and external (.css file).",
      "html": "<p style=\"color:red\">این استایل inline دارد</p>\n<p class=\"internal\">این با استایل internal (پایین) رنگ گرفته</p>",
      "css": ".internal { color: #1E8A7A; font-family: sans-serif; }",
      "js": "",
      "explain_fa": "سه راه برای اضافه‌کردن CSS به صفحه هست. Inline یعنی مستقیم روی خود تگ با ویژگی style (مثل <p style=\"color:red\">) — سریع ولی برای پروژه‌های بزرگ توصیه نمی‌شه.\nInternal یعنی یه تگ <style> داخل head سند. External (بهترین روش) یعنی نوشتن استایل‌ها در یه فایل .css جدا و لینک‌کردنش با <link rel=\"stylesheet\" href=\"style.css\">.",
      "explain_en": "There are three ways to add CSS. Inline means directly on the tag via the style attribute (like <p style=\"color:red\">) — fast but not recommended for larger projects.\nInternal means a <style> tag inside the document's head. External (the best approach) means writing styles in a separate .css file and linking it with <link rel=\"stylesheet\" href=\"style.css\">.",
      "syntax": "<link rel=\"stylesheet\" href=\"style.css\" />"
    },
    {
      "desc_fa": "سلکتور مشخص می‌کنه استایل روی کدوم عنصرها اعمال بشه: تگ (p)، کلاس (.name)، یا آیدی (#name).",
      "desc_en": "A selector determines which elements a style applies to: tag (p), class (.name), or id (#name).",
      "html": "<p>یک پاراگراف معمولی</p>\n<p class=\"special\">یک پاراگراف با کلاس</p>\n<p id=\"unique\">یک پاراگراف با آیدی</p>",
      "css": "p { font-family: sans-serif; }\n.special { color: #C97A2B; }\n#unique { color: #1E8A7A; font-weight: bold; }",
      "js": "",
      "explain_fa": "سلکتور مشخص می‌کنه یه قانون CSS روی کدوم عنصرها اثر بذاره. سلکتور تگ (مثل p) همه‌ی اون تگ‌ها رو هدف می‌گیره.\nسلکتور کلاس (با نقطه، مثل .card) هر عنصری که class=\"card\" داشته باشه رو هدف می‌گیره و می‌شه چندبار استفادش کرد. سلکتور آیدی (با #، مثل #header) فقط یه عنصر با اون id خاص رو هدف می‌گیره و باید توی صفحه یکتا باشه.",
      "explain_en": "A selector determines which elements a CSS rule applies to. A tag selector (like p) targets all elements of that tag.\nA class selector (with a dot, like .card) targets any element with class=\"card\" and can be reused many times. An id selector (with #, like #header) targets only one element with that specific id and should be unique on the page.",
      "syntax": "p { }        /* تگ */\n.name { }     /* کلاس */\n#name { }     /* آیدی */"
    },
    {
      "desc_fa": "سلکتورهای پیشرفته: p.class ترکیبی، div > p فرزند مستقیم، a:hover حالت هاور، و li:first-child اولین فرزند.",
      "desc_en": "Advanced selectors: p.class combination, div > p direct child, a:hover state, li:first-child.",
      "html": "<div>\n  <p>فرزند مستقیم div</p>\n  <span><p>این فرزند مستقیم نیست</p></span>\n</div>",
      "css": "div > p { color: #C97A2B; font-family: sans-serif; }\nspan p { color: gray; font-family: sans-serif; }",
      "js": "",
      "explain_fa": "سلکتورهای پیشرفته‌تر رابطه بین عناصر رو توصیف می‌کنن. div p یعنی هر <p> که داخل یه <div> باشه (فرزند در هر عمقی).\ndiv > p یعنی فقط فرزند مستقیم (بدون واسطه). می‌شه چند کلاس رو هم ترکیب کرد: p.warning یعنی یه <p> که کلاس warning داره. این دقت بیشتر باعث می‌شه CSS مون تمیزتر و قابل‌پیش‌بینی‌تر باشه.",
      "explain_en": "More advanced selectors describe relationships between elements. div p means any <p> inside a <div> (a descendant at any depth).\ndiv > p means only a direct child (no intermediary). Classes can be combined too: p.warning means a <p> that has the class warning. This extra precision makes our CSS cleaner and more predictable.",
      "syntax": "div > p { }   /* فرزند مستقیم */\np.warning { } /* ترکیبی */"
    },
    {
      "desc_fa": "رنگ‌ها با نام (red)، کد هگز (#ff0000)، rgb()، یا hsl() تعریف می‌شن.",
      "desc_en": "Colors are defined by name (red), hex code (#ff0000), rgb(), or hsl().",
      "html": "<p class=\"a\">رنگ با نام</p>\n<p class=\"b\">رنگ با هگز</p>\n<p class=\"c\">رنگ با rgb</p>",
      "css": ".a { color: tomato; font-family: sans-serif; }\n.b { color: #1E8A7A; font-family: sans-serif; }\n.c { color: rgb(200, 100, 50); font-family: sans-serif; }",
      "js": "",
      "explain_fa": "رنگ‌ها در CSS چند شکل دارن: نام رنگ (مثل red یا tomato)، کد هگزادسیمال (#ff0000 که سه جفت عدد برای قرمز/سبز/آبی هست)، rgb(255,0,0) که همون رو با اعداد ده‌دهی می‌نویسه، و hsl() که رنگ رو با فام (Hue)، اشباع (Saturation) و روشنایی (Lightness) توصیف می‌کنه.\nhsl معمولاً برای ساخت درجه‌های مختلف از یه رنگ (روشن‌تر/تیره‌تر) راحت‌تره.",
      "explain_en": "Colors in CSS come in several forms: a color name (like red or tomato), a hex code (#ff0000, three pairs of digits for red/green/blue), rgb(255,0,0) which writes the same thing in decimal, and hsl() which describes color by Hue, Saturation, and Lightness.\nhsl is usually easier for generating different shades of one color (lighter/darker).",
      "syntax": "color: red;\ncolor: #ff0000;\ncolor: rgb(255,0,0);"
    },
    {
      "desc_fa": "background-color برای رنگ پس‌زمینه، و background-image برای عکس پس‌زمینه استفاده می‌شه.",
      "desc_en": "background-color sets a background color, and background-image sets a background picture.",
      "html": "<div class=\"box\">پس‌زمینه‌ی رنگی</div>",
      "css": ".box { background-color: #1E8A7A; color: white; padding: 20px; font-family: sans-serif; text-align:center; }",
      "js": "",
      "explain_fa": "background-color رنگ پس‌زمینه‌ی یه عنصر رو تنظیم می‌کنه. background-image یه عکس رو به‌عنوان پس‌زمینه می‌ذاره — می‌شه background-size: cover رو هم اضافه کرد تا عکس کل فضا رو بدون کش‌آمدن پر کنه.\nمی‌شه چند background رو هم ترکیب کرد (مثلاً یه گرادینت رنگی روی یه عکس)، که خیلی برای طراحی‌های مدرن استفاده می‌شه.",
      "explain_en": "background-color sets an element's background color. background-image places a picture as the background — you can add background-size: cover so the image fills the space without stretching.\nMultiple backgrounds can be combined too (e.g. a color gradient over an image), which is used a lot in modern design.",
      "syntax": "background-color: #1E8A7A;\nbackground-image: url(...);"
    },
    {
      "desc_fa": "هر عنصر HTML یه باکسه با content، padding (فاصله‌ی داخلی)، border (حاشیه)، و margin (فاصله‌ی خارجی).",
      "desc_en": "Every HTML element is a box with content, padding (inner space), border (edge), and margin (outer space).",
      "html": "<div class=\"box\">باکس مدل</div>",
      "css": ".box {\n  background: #F2E3CE;\n  padding: 20px;\n  border: 4px solid #C97A2B;\n  margin: 30px;\n  font-family: sans-serif;\n  text-align: center;\n}",
      "js": "",
      "explain_fa": "باکس مدل (Box Model) قانون اصلی چیدمان در CSS ئه: هر عنصر یه مستطیله که از داخل به بیرون از content (خود محتوا)، padding (فاصله‌ی داخلی بین محتوا و حاشیه)، border (خود حاشیه)، و margin (فاصله‌ی بیرونی تا عنصرهای دیگه) تشکیل شده.\nفهمیدن این مدل، کلید حل کردن ۹۰٪ مشکلات چیدمان و فاصله‌بندیه.",
      "explain_en": "The Box Model is the core layout rule in CSS: every element is a rectangle made of, from inside out, content (the content itself), padding (inner space between content and border), border (the edge itself), and margin (outer space to other elements).\nUnderstanding this model is the key to solving 90% of layout and spacing issues.",
      "syntax": "padding: 10px;\nborder: 2px solid;\nmargin: 20px;"
    },
    {
      "desc_fa": "padding فاصله‌ی بین محتوا و حاشیه‌س، margin فاصله‌ی بیرون عنصر با بقیه‌ی صفحه‌ست.",
      "desc_en": "padding is the space between content and border; margin is the space outside the element.",
      "html": "<div class=\"outer\"><div class=\"inner\">محتوا</div></div>",
      "css": ".outer { background:#eee; padding: 30px; }\n.inner { background:#1E8A7A; color:white; padding:15px; margin:10px; font-family:sans-serif; text-align:center; }",
      "js": "",
      "explain_fa": "padding فاصله‌ی داخل خود عنصره — بین محتوا و لبه‌ی عنصر. هرچی padding بیشتر باشه، عنصر «فراخ‌تر» به نظر می‌رسه بدون اینکه محتواش عوض بشه.\nmargin برعکس، فاصله‌ی بیرون عنصره — بین اون عنصر و همسایه‌هاش. با margin: auto روی یه عنصر با عرض مشخص، می‌شه اون رو افقی وسط‌چین کرد.",
      "explain_en": "padding is the space inside the element itself — between the content and the element's edge. More padding makes an element feel \"roomier\" without changing its content.\nmargin, conversely, is the space outside the element — between it and its neighbors. With margin: auto on an element with a set width, you can center it horizontally.",
      "syntax": "padding: 10px 20px;\nmargin: 0 auto;"
    },
    {
      "desc_fa": "border حاشیه‌ی دور عنصره (ضخامت، نوع، رنگ)، و border-radius گوشه‌ها رو گرد می‌کنه.",
      "desc_en": "border is the edge around an element (width, style, color), and border-radius rounds the corners.",
      "html": "<div class=\"box\">گوشه‌ی گرد</div>",
      "css": ".box {\n  border: 3px dashed #C97A2B;\n  border-radius: 16px;\n  padding: 20px;\n  font-family: sans-serif;\n  text-align:center;\n}",
      "js": "",
      "explain_fa": "border حاشیه‌ی دور یه عنصره و سه بخش داره: ضخامت (مثل 2px)، نوع خط (solid، dashed، dotted)، و رنگ. مثلاً border: 2px solid black.\nborder-radius گوشه‌های عنصر رو گرد می‌کنه؛ یه مقدار کوچیک (مثل 8px) گوشه‌ی ملایم می‌سازه، و یه مقدار بزرگ (مثل 50%) عنصر رو کاملاً دایره‌ای یا بیضی می‌کنه.",
      "explain_en": "border is the edge around an element and has three parts: width (like 2px), line style (solid, dashed, dotted), and color. For example border: 2px solid black.\nborder-radius rounds an element's corners; a small value (like 8px) creates a gentle curve, and a large value (like 50%) makes the element fully circular or oval.",
      "syntax": "border: 2px solid black;\nborder-radius: 8px;"
    },
    {
      "desc_fa": "با font-family نوع فونت، با font-size اندازه، و با font-weight ضخامت متن رو تنظیم می‌کنیم.",
      "desc_en": "font-family sets the typeface, font-size the size, and font-weight the boldness of the text.",
      "html": "<p class=\"a\">فونت معمولی</p>\n<p class=\"b\">فونت بزرگ و بولد</p>",
      "css": ".a { font-family: sans-serif; font-size: 14px; }\n.b { font-family: sans-serif; font-size: 24px; font-weight: bold; color:#C97A2B; }",
      "js": "",
      "explain_fa": "font-family فونت متن رو تعیین می‌کنه — بهتره چند فونت پشت‌سرهم بنویسیم (مثلاً 'Inter', sans-serif) تا اگه فونت اول لود نشد، مرورگر بعدی رو امتحان کنه.\nfont-size اندازه، و font-weight ضخامت (normal، bold، یا عدد مثل 600) رو کنترل می‌کنه. انتخاب درست فونت، تاثیر زیادی روی حس کلی سایت داره.",
      "explain_en": "font-family sets the text's typeface — it's best to list several fonts in a row (like 'Inter', sans-serif) so if the first doesn't load, the browser tries the next.\nfont-size controls size, and font-weight controls boldness (normal, bold, or a number like 600). Choosing the right font has a big impact on a site's overall feel.",
      "syntax": "font-family: 'Inter', sans-serif;\nfont-size: 16px;\nfont-weight: bold;"
    },
    {
      "desc_fa": "text-align چینش متن، text-decoration خط‌زیر/خط‌خورده، و text-transform حروف بزرگ/کوچیک رو کنترل می‌کنه.",
      "desc_en": "text-align controls alignment, text-decoration underline/strikethrough, and text-transform uppercase/lowercase.",
      "html": "<p class=\"a\">متن وسط‌چین</p>\n<p class=\"b\">متن خط‌دار</p>\n<p class=\"c\">حروف بزرگ</p>",
      "css": ".a { text-align: center; font-family: sans-serif; }\n.b { text-decoration: underline; font-family: sans-serif; }\n.c { text-transform: uppercase; font-family: sans-serif; }",
      "js": "",
      "explain_fa": "text-align چینش افقی متن رو کنترل می‌کنه: left، center، right، یا justify (کشیده‌شدن متن تا لبه‌ها).\ntext-decoration خط‌های اضافی مثل underline (زیرخط) یا line-through (خط‌خورده) رو اضافه یا حذف می‌کنه (مثلاً برای حذف زیرخط پیش‌فرض لینک‌ها). text-transform حروف رو بزرگ (uppercase)، کوچیک (lowercase)، یا حرف اول هر کلمه بزرگ (capitalize) می‌کنه.",
      "explain_en": "text-align controls the horizontal alignment of text: left, center, right, or justify (stretching text to the edges).\ntext-decoration adds or removes extra lines like underline or line-through (e.g. to remove the default underline on links). text-transform makes text uppercase, lowercase, or capitalize (first letter of each word).",
      "syntax": "text-align: center;\ntext-decoration: underline;"
    },
    {
      "desc_fa": "display مشخص می‌کنه عنصر چطور در صفحه قرار بگیره: block (کل عرض)، inline (هم‌ردیف)، یا none (مخفی).",
      "desc_en": "display determines how an element is placed: block (full width), inline (in-line), or none (hidden).",
      "html": "<span class=\"a\">Inline یک</span><span class=\"a\">Inline دو</span>\n<div class=\"b\">Block</div>",
      "css": ".a { background:#F2E3CE; padding:4px; }\n.b { display:block; background:#1E8A7A; color:white; padding:10px; font-family:sans-serif; }",
      "js": "",
      "explain_fa": "ویژگی display مشخص می‌کنه یه عنصر چطور در جریان صفحه قرار بگیره. block یعنی کل عرض رو می‌گیره و خط جدید می‌سازه (مثل div و p).\ninline یعنی فقط به اندازه‌ی محتواش جا می‌گیره و کنار عنصرهای دیگه می‌شینه (مثل span و a). none یعنی عنصر کاملاً از صفحه حذف می‌شه (نه فقط نامرئی، بلکه جاش هم گرفته نمی‌شه) — پایه‌ی نمایش/مخفی‌کردن پویا با جاوااسکریپته.",
      "explain_en": "The display property determines how an element sits in the page flow. block means it takes the full width and starts a new line (like div and p).\ninline means it only takes as much space as its content and sits beside other elements (like span and a). none means the element is completely removed from the page (not just invisible, its space is gone too) — the basis for dynamic show/hide with JavaScript.",
      "syntax": "display: block | inline | none;"
    },
    {
      "desc_fa": "position: relative عنصر رو نسبت به جای اصلیش جابه‌جا می‌کنه، و absolute نسبت به نزدیک‌ترین والد positioned.",
      "desc_en": "position: relative moves an element relative to its normal spot, and absolute relative to the nearest positioned parent.",
      "html": "<div class=\"parent\">\n  <div class=\"child\">من absolute هستم</div>\n</div>",
      "css": ".parent { position: relative; height: 100px; background:#eee; }\n.child { position: absolute; top: 10px; right: 10px; background:#C97A2B; color:white; padding:8px; font-family:sans-serif; }",
      "js": "",
      "explain_fa": "position: relative عنصر رو نسبت به جای طبیعی خودش جابه‌جا می‌کنه (با top/left/right/bottom)، ولی جاش توی صفحه خالی می‌مونه.\nposition: absolute عنصر رو کاملاً از جریان عادی صفحه خارج می‌کنه و نسبتِ به نزدیک‌ترین والدی که position غیر از static داره، جایگذاریش می‌کنه — به همین خاطر معمولاً روی والدش relative می‌ذاریم تا مرجع درستی داشته باشه.",
      "explain_en": "position: relative moves an element relative to its natural spot (using top/left/right/bottom), but its original space in the page stays empty.\nposition: absolute completely removes an element from normal page flow and positions it relative to the nearest ancestor that has a position other than static — that's why we usually set relative on its parent to give it the right reference point.",
      "syntax": "position: relative | absolute;\ntop: 10px; left: 10px;"
    },
    {
      "desc_fa": "Flexbox با display:flex عناصر رو در یه ردیف (یا ستون) می‌چینه؛ justify-content و align-items چیدمانشون رو کنترل می‌کنه.",
      "desc_en": "Flexbox with display:flex arranges elements in a row (or column); justify-content and align-items control their positioning.",
      "html": "<div class=\"row\">\n  <div class=\"item\">۱</div>\n  <div class=\"item\">۲</div>\n  <div class=\"item\">۳</div>\n</div>",
      "css": ".row { display: flex; justify-content: space-between; gap: 10px; }\n.item { background:#1E8A7A; color:white; padding:16px; font-family:sans-serif; }",
      "js": "",
      "explain_fa": "Flexbox یه سیستم چیدمان یک‌بعدیه (یا ردیف یا ستون). با display: flex روی والد، همه‌ی فرزندهای مستقیمش «آیتم فلکس» می‌شن.\njustify-content چیدمان روی محور اصلی (افقی به‌طور پیش‌فرض) رو کنترل می‌کنه — مثل space-between که فاصله‌ی مساوی بین آیتم‌ها می‌ذاره. align-items چیدمان روی محور عمود بر اون رو کنترل می‌کنه.",
      "explain_en": "Flexbox is a one-dimensional layout system (either row or column). With display: flex on a parent, all its direct children become \"flex items\".\njustify-content controls alignment along the main axis (horizontal by default) — like space-between which puts equal spacing between items. align-items controls alignment along the cross axis.",
      "syntax": "display: flex;\njustify-content: space-between;\nalign-items: center;"
    },
    {
      "desc_fa": "flex-direction جهت چیدمان رو عوض می‌کنه، flex-wrap اجازه‌ی شکستن خط می‌ده، و flex-grow فضای اضافی رو تقسیم می‌کنه.",
      "desc_en": "flex-direction changes the layout axis, flex-wrap allows wrapping, and flex-grow distributes extra space.",
      "html": "<div class=\"row\">\n  <div class=\"item grow\">بزرگ‌شونده</div>\n  <div class=\"item\">عادی</div>\n</div>",
      "css": ".row { display:flex; gap:10px; }\n.item { background:#C97A2B; color:white; padding:16px; font-family:sans-serif; }\n.grow { flex-grow: 1; }",
      "js": "",
      "explain_fa": "flex-direction محور اصلی چیدمان رو تغییر می‌ده: row (پیش‌فرض، افقی) یا column (عمودی).\nflex-wrap: wrap اجازه می‌ده وقتی آیتم‌ها جا نمی‌شن، به خط بعدی بشکنن (پیش‌فرض عدم شکستنه). flex-grow روی یه آیتم خاص می‌گه چقدر از فضای خالیِ باقی‌مونده رو نسبت به بقیه بگیره — flex-grow: 1 یعنی این آیتم هر فضای اضافه‌ای رو خودش می‌گیره.",
      "explain_en": "flex-direction changes the main layout axis: row (default, horizontal) or column (vertical).\nflex-wrap: wrap allows items to break onto the next line when they don't fit (the default is not to wrap). flex-grow tells a specific item how much of the remaining empty space to take relative to others — flex-grow: 1 means this item takes any extra space itself.",
      "syntax": "flex-direction: row | column;\nflex-wrap: wrap;\nflex-grow: 1;"
    },
    {
      "desc_fa": "CSS Grid با display:grid صفحه رو به ردیف و ستون تقسیم می‌کنه؛ grid-template-columns تعداد و اندازه‌ی ستون‌ها رو مشخص می‌کنه.",
      "desc_en": "CSS Grid with display:grid divides the page into rows and columns; grid-template-columns sets column count and size.",
      "html": "<div class=\"grid\">\n  <div class=\"cell\">۱</div>\n  <div class=\"cell\">۲</div>\n  <div class=\"cell\">۳</div>\n</div>",
      "css": ".grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }\n.cell { background:#1E8A7A; color:white; padding:16px; text-align:center; font-family:sans-serif; }",
      "js": "",
      "explain_fa": "CSS Grid یه سیستم چیدمان دوبعدیه (هم ردیف هم ستون هم‌زمان)، برخلاف Flexbox که یک‌بعدیه. با display: grid روی والد شروع می‌شه.\ngrid-template-columns: 1fr 1fr 1fr سه ستون هم‌عرض می‌سازه (fr یعنی «واحد کسری» از فضای موجود). gap فاصله‌ی بین سلول‌ها رو مشخص می‌کنه، بدون نیاز به margin دستی روی هر آیتم.",
      "explain_en": "CSS Grid is a two-dimensional layout system (rows and columns simultaneously), unlike Flexbox which is one-dimensional. It starts with display: grid on the parent.\ngrid-template-columns: 1fr 1fr 1fr creates three equal-width columns (fr means a \"fractional unit\" of available space). gap sets the spacing between cells, without needing manual margin on each item.",
      "syntax": "display: grid;\ngrid-template-columns: 1fr 1fr 1fr;"
    },
    {
      "desc_fa": "grid-column و grid-row به یه آیتم می‌گن چند ستون/ردیف رو اشغال کنه؛ خیلی قدرتمندتر از فلکس‌باکس برای چیدمان دوبعدیه.",
      "desc_en": "grid-column and grid-row tell an item how many columns/rows to span; much more powerful than flexbox for 2D layouts.",
      "html": "<div class=\"grid\">\n  <div class=\"cell wide\">پهن (۲ ستون)</div>\n  <div class=\"cell\">۲</div>\n  <div class=\"cell\">۳</div>\n</div>",
      "css": ".grid { display:grid; grid-template-columns: repeat(3, 1fr); gap:10px; }\n.cell { background:#C97A2B; color:white; padding:16px; text-align:center; font-family:sans-serif; }\n.wide { grid-column: span 2; background:#1E8A7A; }",
      "js": "",
      "explain_fa": "با گرید پیشرفته، می‌شه به یه آیتم گفت چند ستون یا ردیف رو اشغال کنه: grid-column: span 2 یعنی این آیتم عرض دو ستون رو می‌گیره.\nهمچنین می‌شه با grid-template-areas یه چیدمان بصری با اسم‌گذاری بخش‌ها (مثل \"header\"، \"sidebar\"، \"main\") تعریف کرد که خوندن کد رو خیلی راحت‌تر می‌کنه.",
      "explain_en": "With advanced grid, you can tell an item how many columns or rows to span: grid-column: span 2 means this item takes up two columns' width.\nYou can also use grid-template-areas to define a visual layout with named sections (like \"header\", \"sidebar\", \"main\"), which makes reading the code much easier.",
      "syntax": "grid-column: span 2;\ngrid-template-areas: \"header header\";"
    },
    {
      "desc_fa": "float قبل از فلکس‌باکس/گرید برای چیدمان استفاده می‌شد؛ clear مانع اثرگذاری float روی عنصرهای بعدی می‌شه. امروز کمتر استفاده می‌شه.",
      "desc_en": "float was used for layout before flexbox/grid; clear stops float from affecting following elements. Rarely used today.",
      "html": "<div class=\"box\">شناور به راست</div>\n<p>این متن دور باکس شناور می‌چرخد...</p>",
      "css": ".box { float: right; background:#1E8A7A; color:white; padding:10px; margin:10px; }\np { font-family: sans-serif; }",
      "js": "",
      "explain_fa": "float قبل از اینکه Flexbox و Grid وجود داشته باشن، روش اصلی چیدمان چندستونی بود — عنصر رو به چپ یا راست «شناور» می‌کرد و متن دورش می‌چرخید.\nclear جلوی این «شناور شدن» رو برای عنصرهای بعدی می‌گیره. امروز float عمدتاً فقط برای دور یه عکس متن پیچوندن استفاده می‌شه، نه چیدمان کلی صفحه — Flexbox/Grid جایگزین بهترشن.",
      "explain_en": "Before Flexbox and Grid existed, float was the main way to build multi-column layouts — it made an element \"float\" left or right with text wrapping around it.\nclear stops this \"floating\" effect from affecting following elements. Today float is mainly used just to wrap text around an image, not for overall page layout — Flexbox/Grid are better replacements.",
      "syntax": "float: right;\nclear: both;"
    },
    {
      "desc_fa": "شبه‌کلاس‌ها حالت خاص یه عنصر رو هدف می‌گیرن: :hover (هاور)، :focus (فوکوس)، :first-child (اولین فرزند).",
      "desc_en": "Pseudo-classes target a special state of an element: :hover, :focus, :first-child.",
      "html": "<button>موس رو بیار روم</button>",
      "css": "button { padding:10px 20px; font-family:sans-serif; background:#1E8A7A; color:white; border:none; border-radius:6px; }\nbutton:hover { background:#C97A2B; cursor:pointer; }",
      "js": "",
      "explain_fa": "شبه‌کلاس‌ها (Pseudo-classes) حالت خاصی از یه عنصر رو هدف می‌گیرن، نه یه عنصر جدا. :hover وقتی موس روی عنصره فعال می‌شه.\n:focus وقتی عنصر (مثل یه input) فوکوس گرفته فعال می‌شه. :first-child اولین فرزند یه والد رو هدف می‌گیره، و :nth-child(2) دومین فرزند رو. همه با دو نقطه (:) نوشته می‌شن.",
      "explain_en": "Pseudo-classes target a specific state of an element, not a separate element. :hover activates when the mouse is over the element.\n:focus activates when the element (like an input) has focus. :first-child targets the first child of a parent, and :nth-child(2) the second child. All are written with a colon (:).",
      "syntax": "a:hover { }\ninput:focus { }\nli:first-child { }"
    },
    {
      "desc_fa": "شبه‌عنصرها یه بخش خاص از محتوا رو هدف می‌گیرن: ::before و ::after محتوای مجازی قبل/بعد از عنصر اضافه می‌کنن.",
      "desc_en": "Pseudo-elements target a specific part of content: ::before and ::after insert virtual content before/after an element.",
      "html": "<p class=\"quote\">این یک نقل قول است</p>",
      "css": ".quote::before { content: \"\\201C\"; color:#C97A2B; font-size:24px; }\n.quote::after { content: \"\\201D\"; color:#C97A2B; font-size:24px; }\n.quote { font-family: sans-serif; }",
      "js": "",
      "explain_fa": "شبه‌عنصرها (Pseudo-elements) یه بخش مجازیِ از محتوای یه عنصر رو هدف می‌گیرن، با دو نقطه‌ی پشت‌سرهم (::). ::before و ::after محتوای اضافی رو قبل یا بعد از محتوای واقعی عنصر تزریق می‌کنن (با ویژگی content).\nخیلی برای تزئینات کوچیک استفاده می‌شن — مثل اضافه‌کردن یه علامت نقل‌قول یا آیکون بدون نیاز به یه تگ HTML جدا.",
      "explain_en": "Pseudo-elements target a virtual part of an element's content, using a double colon (::). ::before and ::after inject extra content before or after the element's real content (via the content property).\nThey're widely used for small decorations — like adding a quote mark or an icon without needing a separate HTML tag.",
      "syntax": "p::before { content: \"«\"; }\np::after { content: \"»\"; }"
    },
    {
      "desc_fa": "متغیرهای CSS با -- تعریف می‌شن (مثلاً --main-color) و با var(--main-color) استفاده می‌شن — برای رنگ‌های تکرار‌شونده عالیه.",
      "desc_en": "CSS variables are defined with -- (e.g. --main-color) and used with var(--main-color) — great for repeated colors.",
      "html": "<div class=\"box\">من از متغیر رنگ استفاده می‌کنم</div>",
      "css": ":root { --main-color: #C97A2B; }\n.box { background: var(--main-color); color: white; padding: 16px; font-family: sans-serif; }",
      "js": "",
      "explain_fa": "متغیرهای CSS (CSS Custom Properties) با -- تعریف می‌شن، معمولاً روی :root (یعنی کل صفحه) مثل --main-color: #2f6bff;.\nبعد هر جای دیگه با var(--main-color) استفاده می‌شن. بزرگ‌ترین فایده: اگه بخوایم رنگ اصلی سایت رو عوض کنیم، فقط یه خط رو تغییر می‌دیم، نه صدها جای پراکنده توی فایل CSS.",
      "explain_en": "CSS variables (Custom Properties) are defined with --, usually on :root (meaning the whole page), like --main-color: #2f6bff;.\nThen used anywhere with var(--main-color). The biggest benefit: if we want to change the site's main color, we change just one line, not hundreds of scattered places in the CSS file.",
      "syntax": ":root { --main-color: #2f6bff; }\ncolor: var(--main-color);"
    },
    {
      "desc_fa": "transition باعث می‌شه تغییر یه ویژگی (مثل رنگ یا اندازه) به‌جای ناگهانی، نرم و تدریجی اتفاق بیفته.",
      "desc_en": "transition makes a property change (like color or size) happen smoothly instead of instantly.",
      "html": "<button class=\"btn\">موس رو بیار روم</button>",
      "css": ".btn {\n  padding: 12px 24px;\n  background: #1E8A7A;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-family: sans-serif;\n  transition: background 0.3s, transform 0.3s;\n}\n.btn:hover { background: #C97A2B; transform: scale(1.1); }",
      "js": "",
      "explain_fa": "transition باعث می‌شه تغییر یه ویژگی (مثل رنگ یا اندازه، معمولاً وقتی :hover اتفاق می‌افته) به‌جای یهویی، به‌مرور و نرم اتفاق بیفته.\nسینتکسش: transition: <ویژگی> <مدت‌زمان> <نوع‌حرکت>؛ مثلاً transition: background 0.3s ease; یعنی «تغییر پس‌زمینه رو در ۰.۳ ثانیه به‌آرومی انجام بده».",
      "explain_en": "transition makes a property change (like color or size, usually triggered on :hover) happen gradually and smoothly instead of instantly.\nSyntax: transition: <property> <duration> <easing>; e.g. transition: background 0.3s ease; means \"change the background smoothly over 0.3 seconds\".",
      "syntax": "transition: background 0.3s ease;"
    },
    {
      "desc_fa": "با @keyframes می‌شه یه انیمیشن چندمرحله‌ای تعریف کرد و با animation به عنصر وصلش کرد.",
      "desc_en": "With @keyframes you can define a multi-step animation and attach it with the animation property.",
      "html": "<div class=\"box\"></div>",
      "css": "@keyframes bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-20px); }\n}\n.box {\n  width: 50px; height: 50px;\n  background: #C97A2B;\n  border-radius: 8px;\n  animation: bounce 1s infinite;\n}",
      "js": "",
      "explain_fa": "@keyframes یه انیمیشن چندمرحله‌ای تعریف می‌کنه — می‌گیم در 0% (شروع) چه حالتی، در 50% (وسط) چه حالتی، و در 100% (پایان) چه حالتی داشته باشه.\nبعد با ویژگی animation (نام انیمیشن + مدت‌زمان + infinite برای تکرار بی‌نهایت) اون رو به یه عنصر وصل می‌کنیم. برخلاف transition که فقط بین دو حالت حرکت می‌کنه، keyframes می‌تونه چند مرحله و حتی تکرار بی‌نهایت داشته باشه.",
      "explain_en": "@keyframes defines a multi-step animation — we say at 0% (start) what state, at 50% (middle) what state, and at 100% (end) what state.\nThen we attach it to an element with the animation property (animation name + duration + infinite for endless repeat). Unlike transition which just moves between two states, keyframes can have multiple steps and even infinite repetition.",
      "syntax": "@keyframes bounce {\n  0% {...} 50% {...} 100% {...}\n}"
    },
    {
      "desc_fa": "transform اجازه می‌ده عنصر رو بدون تغییر جریان صفحه، چرخوند (rotate)، بزرگ/کوچیک (scale) یا جابه‌جا (translate) کرد.",
      "desc_en": "transform lets you rotate, scale, or translate an element without affecting the page flow.",
      "html": "<div class=\"box\">چرخیده</div>",
      "css": ".box {\n  background: #1E8A7A;\n  color: white;\n  padding: 20px;\n  width: fit-content;\n  font-family: sans-serif;\n  transform: rotate(-8deg);\n  margin: 40px;\n}",
      "js": "",
      "explain_fa": "transform اجازه می‌ده ظاهر یه عنصر رو بدون تاثیر روی چیدمان بقیه‌ی صفحه تغییر بدیم. rotate(deg) عنصر رو می‌چرخونه، scale(عدد) بزرگ/کوچیکش می‌کنه، و translate(x,y) جابه‌جاش می‌کنه.\nچون transform «جریان صفحه» (layout) رو تغییر نمی‌ده، خیلی برای انیمیشن‌های نرم و پرفورمنس بهتر از تغییردادن مستقیم width/height/margin هست.",
      "explain_en": "transform lets us change how an element looks without affecting the rest of the page's layout. rotate(deg) rotates it, scale(number) makes it bigger/smaller, and translate(x,y) moves it.\nBecause transform doesn't change the page's \"layout flow\", it's much better for smooth animations and performance than directly changing width/height/margin.",
      "syntax": "transform: rotate(10deg) scale(1.2) translate(5px, 0);"
    },
    {
      "desc_fa": "@media (max-width: ...) اجازه می‌ده استایل‌های متفاوتی برای اندازه‌های مختلف صفحه (موبایل، تبلت، دسکتاپ) بنویسیم.",
      "desc_en": "@media (max-width: ...) lets you write different styles for different screen sizes (mobile, tablet, desktop).",
      "html": "<div class=\"box\">اندازه‌ی صفحه رو عوض کن (پنجره رو باریک کن)</div>",
      "css": ".box { background:#1E8A7A; color:white; padding:20px; font-family:sans-serif; text-align:center; }\n@media (max-width: 500px) {\n  .box { background:#C97A2B; }\n}",
      "js": "",
      "explain_fa": "@media (max-width: 768px) { ... } یعنی «این استایل‌ها فقط وقتی عرض صفحه ۷۶۸ پیکسل یا کمتره اجرا بشن» — پایه‌ی طراحی ریسپانسیو.\nمعمولاً از رویکرد «موبایل-اول» استفاده می‌شه: اول استایل پایه رو برای موبایل می‌نویسیم، بعد با min-width برای صفحه‌های بزرگ‌تر (تبلت، دسکتاپ) اضافه می‌کنیم. بدون media query، سایت روی موبایل معمولاً خراب یا خیلی کوچیک به نظر می‌رسه.",
      "explain_en": "@media (max-width: 768px) { ... } means \"only run these styles when the screen width is 768px or less\" — the foundation of responsive design.\nA \"mobile-first\" approach is often used: write base styles for mobile first, then add for larger screens (tablet, desktop) with min-width. Without media queries, a site usually looks broken or too small on mobile.",
      "syntax": "@media (max-width: 768px) {\n  ...\n}"
    },
    {
      "desc_fa": "px اندازه‌ی ثابت، % نسبت به والد، em نسبت به فونت والد، و rem نسبت به فونت ریشه‌ی صفحه‌ست.",
      "desc_en": "px is a fixed size, % relative to parent, em relative to parent's font, and rem relative to the root font size.",
      "html": "<p class=\"a\">16px</p>\n<p class=\"b\">2em</p>\n<p class=\"c\">1.5rem</p>",
      "css": "p { font-family: sans-serif; }\n.a { font-size: 16px; }\n.b { font-size: 2em; }\n.c { font-size: 1.5rem; }",
      "js": "",
      "explain_fa": "px یه واحد ثابته (پیکسل واقعی صفحه). % نسبت به اندازه‌ی والده (مثلاً width: 50% یعنی نصف عرض والد).\nem نسبت به اندازه‌ی فونت والد (اگه والد 16px باشه، 2em می‌شه 32px). rem مشابه em ولی همیشه نسبت به فونت ریشه‌ی کل صفحه (تگ html) حساب می‌شه، نه والد مستقیم — به همین خاطر برای اندازه‌ی فونت، rem معمولاً قابل‌پیش‌بینی‌تر و امن‌تره.",
      "explain_en": "px is a fixed unit (a real screen pixel). % is relative to the parent's size (e.g. width: 50% means half the parent's width).\nem is relative to the parent's font size (if the parent is 16px, 2em becomes 32px). rem is similar to em but always calculated relative to the whole page's root font size (the html tag), not the direct parent — that's why rem is usually more predictable and safer for font sizes.",
      "syntax": "font-size: 16px | 1rem | 2em | 50%;"
    },
    {
      "desc_fa": "z-index ترتیب روی‌هم‌قرارگیری عنصرها رو مشخص می‌کنه (فقط روی عنصرهای position غیر از static اثر داره).",
      "desc_en": "z-index determines the stacking order of overlapping elements (only works on elements with position other than static).",
      "html": "<div class=\"box back\">پشت</div>\n<div class=\"box front\">جلو</div>",
      "css": ".box { position:absolute; width:120px; height:80px; font-family:sans-serif; color:white; display:flex; align-items:center; justify-content:center; }\n.back { background:#1E8A7A; top:20px; left:20px; z-index:1; }\n.front { background:#C97A2B; top:50px; left:60px; z-index:2; }",
      "js": "",
      "explain_fa": "وقتی چند عنصر روی هم قرار می‌گیرن (مثلاً با position: absolute)، z-index تعیین می‌کنه کدوم جلوتر (روی بقیه) نمایش داده بشه — عدد بزرگ‌تر یعنی جلوتر.\nنکته‌ی مهم: z-index فقط روی عنصرهایی اثر داره که position اونا چیزی غیر از static باشه (یعنی relative، absolute، fixed، یا sticky).",
      "explain_en": "When several elements overlap (e.g. with position: absolute), z-index determines which one appears in front (on top) — a higher number means more in front.\nImportant note: z-index only works on elements whose position is something other than static (i.e. relative, absolute, fixed, or sticky).",
      "syntax": "position: absolute;\nz-index: 10;"
    },
    {
      "desc_fa": "box-shadow سایه دور یه باکس می‌ندازه، و text-shadow سایه دور متن.",
      "desc_en": "box-shadow adds a shadow around a box, and text-shadow adds a shadow around text.",
      "html": "<div class=\"box\">سایه‌دار</div>\n<h2 class=\"txt\">متن سایه‌دار</h2>",
      "css": ".box { background:white; padding:20px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); font-family:sans-serif; width:fit-content; }\n.txt { text-shadow: 2px 2px 4px rgba(0,0,0,0.4); font-family:sans-serif; color:#C97A2B; }",
      "js": "",
      "explain_fa": "box-shadow یه سایه دور یه باکس می‌ندازه: box-shadow: افقی عمودی محو رنگ؛ مثلاً box-shadow: 0 4px 12px rgba(0,0,0,0.3) یه سایه‌ی نرم پایین باکس می‌سازه.\ntext-shadow دقیقاً همون کارو برای متن انجام می‌ده. سایه‌های ظریف، عمق و برجستگی بصری به کارت‌ها و دکمه‌ها می‌دن و طراحی رو حرفه‌ای‌تر می‌کنن.",
      "explain_en": "box-shadow casts a shadow around a box: box-shadow: horizontal vertical blur color; e.g. box-shadow: 0 4px 12px rgba(0,0,0,0.3) creates a soft shadow below the box.\ntext-shadow does exactly the same for text. Subtle shadows give cards and buttons visual depth and make a design feel more polished.",
      "syntax": "box-shadow: 0 4px 12px rgba(0,0,0,0.3);\ntext-shadow: 2px 2px 4px gray;"
    },
    {
      "desc_fa": "کد تمیز CSS یعنی: نام‌گذاری واضح کلاس‌ها، استفاده از متغیرها برای رنگ‌ها، و اجتناب از !important.",
      "desc_en": "Clean CSS means: clear class naming, using variables for colors, and avoiding !important.",
      "html": "<button class=\"btn btn-primary\">دکمه‌ی اصلی</button>",
      "css": ":root { --primary: #C97A2B; }\n.btn { padding: 10px 20px; border: none; border-radius: 6px; font-family: sans-serif; }\n.btn-primary { background: var(--primary); color: white; }",
      "js": "",
      "explain_fa": "CSS تمیز یعنی: اسم‌گذاری واضح و معنادار کلاس‌ها (مثل .card-title به‌جای .ct1)، استفاده از متغیرها برای رنگ‌ها و فاصله‌های تکراری، و پرهیز از !important که اولویت‌بندی عادی CSS رو می‌شکنه و دیباگ‌کردن رو سخت می‌کنه.\nسازمان‌دهی خوب CSS، مخصوصاً وقتی پروژه بزرگ می‌شه، جلوی خیلی از سردرگمی‌ها رو می‌گیره.",
      "explain_en": "Clean CSS means: clear, meaningful class names (like .card-title instead of .ct1), using variables for repeated colors and spacing, and avoiding !important which breaks CSS's normal priority system and makes debugging hard.\nGood CSS organization, especially as a project grows, prevents a lot of confusion.",
      "syntax": ".btn-primary { background: var(--primary); }"
    },
    {
      "desc_fa": "این پروژه ترکیبیه از فلکس‌باکس، رنگ، سایه و ترنزیشن — یه بخش هیرو‌ی ساده از یه صفحه‌ی لندینگ بساز.",
      "desc_en": "This project combines flexbox, color, shadow, and transitions — build a simple hero section for a landing page.",
      "html": "<section class=\"hero\">\n  <h1>به سایت من خوش آمدید</h1>\n  <p>یک توضیح کوتاه و جذاب اینجا</p>\n  <button class=\"cta\">شروع کن</button>\n</section>",
      "css": ".hero { background:#12141A; color:white; text-align:center; padding:60px 20px; font-family: sans-serif; }\n.cta { background:#C97A2B; color:white; border:none; padding:12px 28px; border-radius:6px; margin-top:16px; transition: transform 0.2s; }\n.cta:hover { transform: scale(1.05); cursor:pointer; }",
      "js": "",
      "explain_fa": "این پروژه همه‌چیزی که یاد گرفتی رو با هم ترکیب می‌کنه: Flexbox برای چیدمان، رنگ و فونت برای ظاهر، box-shadow برای عمق، و transition برای یه دکمه‌ی تعاملی.\nسعی کن یه بخش هیرو (اولین چیزی که کاربر می‌بینه) با یه عنوان بزرگ، یه توضیح کوتاه، و یه دکمه‌ی فراخوان‌به‌اقدام (Call To Action) بسازی — این دقیقاً ساختار اکثر صفحات لندینگ واقعیه.",
      "explain_en": "This project combines everything you've learned: Flexbox for layout, color and font for appearance, box-shadow for depth, and transition for an interactive button.\nTry building a hero section (the first thing a user sees) with a big title, a short description, and a call-to-action button — this is exactly the structure of most real landing pages.",
      "syntax": ".hero { display:flex; ... }"
    }
  ],
  "js": [
    {
      "desc_fa": "جاوااسکریپت زبانیه که به صفحه‌ی وب رفتار و تعامل می‌ده — مثلاً واکنش به کلیک دکمه.",
      "desc_en": "JavaScript is the language that gives web pages behavior and interactivity — like reacting to a button click.",
      "html": "<button id=\"btn\">کلیک کن</button>\n<p id=\"out\">هنوز کلیک نشده</p>",
      "css": "button { padding:8px 16px; font-family:sans-serif; }\np { font-family: sans-serif; }",
      "js": "document.getElementById(\"btn\").addEventListener(\"click\", function () {\n  document.getElementById(\"out\").textContent = \"دکمه کلیک شد! 🎉\";\n});",
      "explain_fa": "جاوااسکریپت زبانیه که به صفحه‌ی وب «رفتار» می‌ده — یعنی می‌تونه به کارهای کاربر (کلیک، تایپ) واکنش نشون بده و محتوای صفحه رو بدون رفرش‌کردن تغییر بده.\nاگه HTML اسکلت و CSS ظاهره، جاوااسکریپت مغز و عضله‌ی سایته. کد جاوااسکریپت معمولاً داخل تگ <script> یا یه فایل .js جدا نوشته می‌شه.",
      "explain_en": "JavaScript is the language that gives a web page \"behavior\" — it can react to user actions (clicks, typing) and change page content without a refresh.\nIf HTML is the skeleton and CSS is the appearance, JavaScript is the site's brain and muscle. JavaScript code is usually written inside a <script> tag or a separate .js file.",
      "syntax": "document.getElementById(\"id\").addEventListener(\"click\", fn);"
    },
    {
      "desc_fa": "let برای متغیرهایی که تغییر می‌کنن، const برای مقادیر ثابت، و var روش قدیمی‌تره که کمتر توصیه می‌شه.",
      "desc_en": "let is for variables that change, const for constant values, and var is the older way that's less recommended.",
      "html": "<p id=\"out\"></p>",
      "css": "p { font-family: sans-serif; }",
      "js": "let name = \"سارا\";\nconst age = 25;\nname = \"مریم\"; // let قابل تغییره\ndocument.getElementById(\"out\").textContent = name + \" - \" + age + \" ساله\";",
      "explain_fa": "متغیر جایی برای ذخیره‌ی یه مقداره که بعداً می‌تونیم بهش دسترسی پیدا کنیم یا تغییرش بدیم. let برای متغیرهایی که قراره بعداً تغییر کنن (مثل شمارنده)، و const برای مقادیری که هیچ‌وقت عوض نمی‌شن (مثل نام یه شخص در یه لحظه‌ی خاص) استفاده می‌شه.\nvar روش قدیمی‌تره که مشکلاتی با scope داره و در کد جدید معمولاً باهاش کار نمی‌کنیم — همیشه let یا const رو ترجیح بده.",
      "explain_en": "A variable is a place to store a value that we can access or change later. let is for variables that will change later (like a counter), and const is for values that never change (like a person's name at a specific moment).\nvar is the older way that has scope-related issues and isn't typically used in modern code — always prefer let or const.",
      "syntax": "let x = 5;\nconst y = 10;"
    },
    {
      "desc_fa": "انواع داده در جاوااسکریپت: string (متن)، number (عدد)، boolean (درست/غلط)، array، object، و undefined/null.",
      "desc_en": "JavaScript data types: string, number, boolean, array, object, and undefined/null.",
      "html": "<p id=\"out\"></p>",
      "css": "p { font-family: sans-serif; }",
      "js": "const text = \"سلام\";\nconst num = 42;\nconst isTrue = true;\ndocument.getElementById(\"out\").textContent =\n  typeof text + \", \" + typeof num + \", \" + typeof isTrue;",
      "explain_fa": "جاوااسکریپت چند نوع داده‌ی اصلی داره: string برای متن (بین کوتیشن یا دابل‌کوتیشن)، number برای هر نوع عدد (صحیح یا اعشاری)، boolean که فقط true یا false هست، و بعداً array و object که ساختارهای پیچیده‌تری هستن.\nبا typeof می‌تونیم نوع یه مقدار رو بفهمیم — مثلاً typeof \"سلام\" همیشه \"string\" برمی‌گردونه.",
      "explain_en": "JavaScript has several core data types: string for text (in quotes), number for any kind of number (whole or decimal), boolean which is only true or false, and later array and object which are more complex structures.\nWe can check a value's type with typeof — for example typeof \"hello\" always returns \"string\".",
      "syntax": "typeof value  // \"string\" | \"number\" | \"boolean\""
    },
    {
      "desc_fa": "عملگرها شامل ریاضی (+ - * /)، مقایسه (=== !==)، و منطقی (&& ||) هستن.",
      "desc_en": "Operators include arithmetic (+ - * /), comparison (=== !==), and logical (&& ||).",
      "html": "<p id=\"out\"></p>",
      "css": "p { font-family: sans-serif; }",
      "js": "const a = 10, b = 3;\ndocument.getElementById(\"out\").textContent =\n  \"جمع: \" + (a + b) + \" | ضرب: \" + (a * b) + \" | برابرن؟ \" + (a === b);",
      "explain_fa": "عملگرهای ریاضی (+ - * /) روی اعداد محاسبه انجام می‌دن (و + روی رشته‌ها اونا رو به هم می‌چسبونه). عملگرهای مقایسه‌ای دو مقدار رو با هم مقایسه می‌کنن و true/false برمی‌گردونن.\nمهم: === (سه تا مساوی) هم مقدار هم نوع رو مقایسه می‌کنه، ولی == فقط مقدار رو (و ممکنه تبدیل نوع خودکار انجام بده) — همیشه === رو ترجیح بده تا رفتار غیرمنتظره نگیری.",
      "explain_en": "Arithmetic operators (+ - * /) perform calculations on numbers (and + on strings joins them together). Comparison operators compare two values and return true/false.\nImportant: === (triple equals) compares both value and type, but == only compares value (and may do automatic type conversion) — always prefer === to avoid unexpected behavior.",
      "syntax": "a + b   a - b   a * b   a / b\na === b   a !== b"
    },
    {
      "desc_fa": "if/else بر اساس یه شرط، مسیر متفاوتی از کد رو اجرا می‌کنه.",
      "desc_en": "if/else runs a different path of code based on a condition.",
      "html": "<p id=\"out\"></p>",
      "css": "p { font-family: sans-serif; }",
      "js": "const score = 15;\nlet result;\nif (score >= 10) {\n  result = \"قبول شدی ✅\";\n} else {\n  result = \"رد شدی ❌\";\n}\ndocument.getElementById(\"out\").textContent = result;",
      "explain_fa": "if یه بلوک کد رو فقط وقتی یه شرط true باشه اجرا می‌کنه. else بلوک جایگزین رو وقتی شرط false باشه اجرا می‌کنه.\nمی‌شه چند شرط رو با else if زنجیره کرد. این ساختار پایه‌ی «تصمیم‌گیری» توی کده — تقریباً هر برنامه‌ای از اون استفاده می‌کنه.",
      "explain_en": "if runs a block of code only when a condition is true. else runs an alternative block when the condition is false.\nYou can chain multiple conditions with else if. This structure is the foundation of \"decision-making\" in code — almost every program uses it.",
      "syntax": "if (condition) {\n  ...\n} else {\n  ...\n}"
    },
    {
      "desc_fa": "switch جایگزین خوبی برای زنجیره‌ی طولانی if/else هست وقتی یه متغیر رو با چند مقدار مقایسه می‌کنیم.",
      "desc_en": "switch is a good alternative to a long if/else chain when comparing one variable against several values.",
      "html": "<p id=\"out\"></p>",
      "css": "p { font-family: sans-serif; }",
      "js": "const day = \"شنبه\";\nlet msg;\nswitch (day) {\n  case \"جمعه\":\n    msg = \"آخر هفته‌ست!\";\n    break;\n  case \"شنبه\":\n    msg = \"شروع هفته‌ست!\";\n    break;\n  default:\n    msg = \"یه روز عادیه\";\n}\ndocument.getElementById(\"out\").textContent = msg;",
      "explain_fa": "switch جایگزین خوبیه برای زنجیره‌ی طولانی if/else وقتی می‌خوایم یه متغیر رو با چند مقدار ثابت مقایسه کنیم (مثل روزهای هفته).\nهر case یه مقدار احتمالی رو چک می‌کنه، و break از ادامه‌ی اجرا به case‌های بعدی جلوگیری می‌کنه (فراموش‌کردنش یه اشتباه رایجه!). default وقتی هیچ‌کدوم از case ها مچ نشدن اجرا می‌شه.",
      "explain_en": "switch is a good replacement for a long if/else chain when comparing one variable against several fixed values (like days of the week).\nEach case checks one possible value, and break prevents execution from falling through to the next case (forgetting it is a common mistake!). default runs when none of the cases matched.",
      "syntax": "switch (value) {\n  case 1: ...; break;\n  default: ...;\n}"
    },
    {
      "desc_fa": "حلقه‌ی for وقتی تعداد تکرار مشخصه استفاده می‌شه، و while تا وقتی یه شرط برقراره تکرار می‌کنه.",
      "desc_en": "for loops are used when the repeat count is known, and while repeats as long as a condition holds.",
      "html": "<p id=\"out\"></p>",
      "css": "p { font-family: sans-serif; }",
      "js": "let result = \"\";\nfor (let i = 1; i <= 5; i++) {\n  result += i + \" \";\n}\ndocument.getElementById(\"out\").textContent = result;",
      "explain_fa": "حلقه (loop) بهمون اجازه می‌ده یه تکه کد رو چندبار تکرار کنیم بدون کپی-پیست‌کردنش. for وقتی از قبل می‌دونیم دقیقاً چندبار باید تکرار بشه استفاده می‌شه: for (let i=0; i<5; i++).\nwhile تا زمانی که یه شرط true باشه ادامه می‌ده، حتی اگه ندونیم دقیقاً چندبار طول می‌کشه — مراقب باش شرطش یه جایی false بشه، وگرنه حلقه‌ی بی‌نهایت می‌سازی!",
      "explain_en": "A loop lets us repeat a piece of code multiple times without copy-pasting it. for is used when we know exactly how many times to repeat: for (let i=0; i<5; i++).\nwhile continues as long as a condition is true, even if we don't know exactly how long — be careful that the condition eventually becomes false, or you create an infinite loop!",
      "syntax": "for (let i = 0; i < 5; i++) { ... }\nwhile (condition) { ... }"
    },
    {
      "desc_fa": "آرایه لیستی مرتبه از مقادیره؛ با [] ساخته می‌شه و هر آیتم یه index داره (از صفر شروع می‌شه).",
      "desc_en": "An array is an ordered list of values; created with [], each item has an index (starting from 0).",
      "html": "<p id=\"out\"></p>",
      "css": "p { font-family: sans-serif; }",
      "js": "const fruits = [\"سیب\", \"موز\", \"پرتقال\"];\ndocument.getElementById(\"out\").textContent =\n  \"اولین: \" + fruits[0] + \" | تعداد: \" + fruits.length;",
      "explain_fa": "آرایه (Array) یه لیست مرتب از مقادیره که با [] ساخته می‌شه، مثل const fruits = [\"سیب\", \"موز\"]؛. هر عنصر یه اندیس (index) داره که از صفر شروع می‌شه — یعنی fruits[0] اولین عنصره، نه دومی.\nبا fruits.length می‌تونیم تعداد عناصر رو بفهمیم. آرایه‌ها می‌تونن هر نوع داده‌ای (حتی آرایه یا شیء دیگه) رو نگه دارن.",
      "explain_en": "An array is an ordered list of values created with [], like const fruits = [\"apple\", \"banana\"];. Each element has an index starting from zero — meaning fruits[0] is the first element, not the second.\nWe can find the number of elements with fruits.length. Arrays can hold any type of data (even another array or object).",
      "syntax": "const arr = [1, 2, 3];\narr[0]; arr.length;"
    },
    {
      "desc_fa": "متدهای آرایه مثل map (تبدیل)، filter (فیلتر)، و forEach (پیمایش) کارهای رایج روی آرایه رو راحت می‌کنن.",
      "desc_en": "Array methods like map, filter, and forEach make common array operations easy.",
      "html": "<p id=\"out\"></p>",
      "css": "p { font-family: sans-serif; }",
      "js": "const nums = [1, 2, 3, 4, 5];\nconst doubled = nums.map(n => n * 2);\nconst evens = nums.filter(n => n % 2 === 0);\ndocument.getElementById(\"out\").textContent =\n  \"دوبرابر: \" + doubled.join(\",\") + \" | زوج‌ها: \" + evens.join(\",\");",
      "explain_fa": "متدهای آرایه کارهای رایج رو راحت می‌کنن. map یه آرایه‌ی جدید می‌سازه که هر عنصرش نتیجه‌ی اعمال یه تابع روی عنصر اصلیه (مثلاً دوبرابرکردن هر عدد).\nfilter یه آرایه‌ی جدید فقط با عنصرهایی می‌سازه که شرط خاصی رو پاس کنن (مثلاً فقط اعداد زوج). forEach هر عنصر رو یکی‌یکی پیمایش می‌کنه بدون اینکه آرایه‌ی جدید بسازه — برای وقتیه که فقط می‌خوایم یه کاری روی هر عنصر انجام بدیم.",
      "explain_en": "Array methods make common tasks easy. map creates a new array where each element is the result of applying a function to the original element (e.g. doubling each number).\nfilter creates a new array with only the elements that pass a certain condition (e.g. only even numbers). forEach iterates over each element one by one without creating a new array — for when we just want to do something with each element.",
      "syntax": "arr.map(fn)\narr.filter(fn)\narr.forEach(fn)"
    },
    {
      "desc_fa": "شیء (object) داده رو به‌صورت key-value نگه می‌داره؛ با نقطه (obj.key) به مقدارها دسترسی داریم.",
      "desc_en": "An object stores data as key-value pairs; access values with dot notation (obj.key).",
      "html": "<p id=\"out\"></p>",
      "css": "p { font-family: sans-serif; }",
      "js": "const user = { name: \"علی\", age: 28, city: \"تهران\" };\ndocument.getElementById(\"out\").textContent =\n  user.name + \" - \" + user.age + \" ساله - \" + user.city;",
      "explain_fa": "شیء (Object) داده رو به‌صورت جفت‌های key-value نگه می‌داره، مثل const user = { name: \"علی\", age: 28 };. برخلاف آرایه که با اندیس عددی دسترسی داری، به مقدارهای شیء با نام کلید (اسمش) دسترسی داری: user.name.\nشیءها برای نمایش موجودیت‌های دنیای واقعی (یه کاربر، یه محصول، یه تنظیمات) خیلی طبیعی و پرکاربردن.",
      "explain_en": "An object stores data as key-value pairs, like const user = { name: \"Ali\", age: 28 };. Unlike an array which you access by numeric index, you access an object's values by key name: user.name.\nObjects are very natural and widely used for representing real-world entities (a user, a product, a settings config).",
      "syntax": "const obj = { key: \"value\" };\nobj.key;"
    },
    {
      "desc_fa": "تابع بلوکی از کده که می‌تونیم چندبار صداش بزنیم؛ با function یا به‌صورت کوتاه‌تر با arrow function ساخته می‌شه.",
      "desc_en": "A function is a reusable block of code; created with the function keyword or the shorter arrow syntax.",
      "html": "<p id=\"out\"></p>",
      "css": "p { font-family: sans-serif; }",
      "js": "function greet(name) {\n  return \"سلام \" + name + \"!\";\n}\ndocument.getElementById(\"out\").textContent = greet(\"دنیا\");",
      "explain_fa": "تابع (Function) یه بلوک کد قابل‌استفاده‌ی مجدده که یه بار تعریفش می‌کنیم و هر جا لازم بود صداش می‌زنیم. با کلمه‌ی function و یه اسم تعریف می‌شه: function greet(name) { return \"سلام \" + name; }.\nمقدارهایی که به تابع می‌فرستیم «آرگومان» یا «پارامتر» نامیده می‌شن، و return مقداری هست که تابع به‌عنوان خروجی برمی‌گردونه.",
      "explain_en": "A function is a reusable block of code that we define once and call whenever needed. It's defined with the function keyword and a name: function greet(name) { return \"Hello \" + name; }.\nThe values we send to a function are called \"arguments\" or \"parameters\", and return is the value the function outputs back.",
      "syntax": "function name(param) {\n  return value;\n}"
    },
    {
      "desc_fa": "توابع پیکانی (arrow function) نسخه‌ی کوتاه‌تر توابع معمولی‌ان: (a, b) => a + b به‌جای function(a,b){return a+b}.",
      "desc_en": "Arrow functions are a shorter form of regular functions: (a, b) => a + b instead of function(a,b){return a+b}.",
      "html": "<p id=\"out\"></p>",
      "css": "p { font-family: sans-serif; }",
      "js": "const add = (a, b) => a + b;\nconst square = n => n * n;\ndocument.getElementById(\"out\").textContent =\n  \"جمع: \" + add(3, 4) + \" | مربع: \" + square(5);",
      "explain_fa": "توابع پیکانی (Arrow Functions) نسخه‌ی کوتاه‌تر و مدرن‌تر نوشتن توابع‌ان: (a, b) => a + b دقیقاً معادل function(a, b) { return a + b; } است.\nوقتی تابع فقط یه پارامتر داره، می‌شه پرانتز دورش رو هم حذف کرد: name => \"سلام \" + name. این سینتکس مخصوصاً وقتی تابع رو به‌عنوان آرگومان به متدهایی مثل map یا filter می‌فرستیم، خیلی رایجه.",
      "explain_en": "Arrow functions are a shorter, more modern way of writing functions: (a, b) => a + b is exactly equivalent to function(a, b) { return a + b; }.\nWhen a function has only one parameter, you can even drop the parentheses: name => \"Hello \" + name. This syntax is especially common when passing a function as an argument to methods like map or filter.",
      "syntax": "const fn = (a, b) => a + b;"
    },
    {
      "desc_fa": "Scope مشخص می‌کنه یه متغیر کجا در دسترسه؛ Closure یعنی یه تابع می‌تونه به متغیرهای بیرون از خودش (حتی بعد از اجرا) دسترسی داشته باشه.",
      "desc_en": "Scope determines where a variable is accessible; a closure means a function can access outer variables even after execution.",
      "html": "<button id=\"btn\">افزایش شمارنده</button>\n<p id=\"out\">0</p>",
      "css": "button { padding:8px 16px; font-family:sans-serif; }\np { font-family: sans-serif; }",
      "js": "function makeCounter() {\n  let count = 0;\n  return function () {\n    count++;\n    return count;\n  };\n}\nconst counter = makeCounter();\ndocument.getElementById(\"btn\").addEventListener(\"click\", function () {\n  document.getElementById(\"out\").textContent = counter();\n});",
      "explain_fa": "Scope مشخص می‌کنه یه متغیر کجا در دسترسه — یه متغیر تعریف‌شده داخل یه تابع، فقط داخل همون تابع در دسترسه (Local Scope)، نه بیرونش.\nClosure یه مفهوم پیشرفته‌تره: یه تابع می‌تونه به متغیرهای محیط اطرافش دسترسی داشته باشه، حتی بعد از اینکه اون تابع بیرونی تموم شده. این برای ساخت شمارنده‌ها یا مقادیر «خصوصی» که فقط از طریق یه تابع خاص قابل‌تغییرن، خیلی مفیده.",
      "explain_en": "Scope determines where a variable is accessible — a variable defined inside a function is only accessible inside that function (Local Scope), not outside it.\nClosure is a more advanced concept: a function can access variables from its surrounding environment, even after that outer function has finished. This is useful for building counters or \"private\" values that can only be changed through a specific function.",
      "syntax": "function outer() {\n  let x = 0;\n  return function () { return x++; };\n}"
    },
    {
      "desc_fa": "متدهای رشته‌ای مثل toUpperCase، slice، و includes روی متن‌ها عملیات انجام می‌دن.",
      "desc_en": "String methods like toUpperCase, slice, and includes perform operations on text.",
      "html": "<p id=\"out\"></p>",
      "css": "p { font-family: sans-serif; }",
      "js": "const text = \"Yaqin Code\";\ndocument.getElementById(\"out\").textContent =\n  text.toUpperCase() + \" | طول: \" + text.length + \" | شامل Code؟ \" + text.includes(\"Code\");",
      "explain_fa": "متدهای رشته‌ای روی متن‌ها عملیات انجام می‌دن. toUpperCase و toLowerCase حروف رو بزرگ/کوچیک می‌کنن. slice یه بخش از متن رو بر اساس موقعیت برمی‌گردونه.\nincludes چک می‌کنه آیا یه رشته داخل رشته‌ی دیگه‌ای وجود داره یا نه (و true/false برمی‌گردونه) — خیلی برای جست‌وجوی متن ساده مفیده.",
      "explain_en": "String methods perform operations on text. toUpperCase and toLowerCase make text upper/lowercase. slice returns a portion of text based on position.\nincludes checks whether a string exists inside another string (returning true/false) — very useful for simple text searching.",
      "syntax": "str.toUpperCase()\nstr.slice(0, 3)\nstr.includes(\"x\")"
    },
    {
      "desc_fa": "Template literals با بک‌تیک (`) نوشته می‌شن و اجازه می‌دن متغیر رو مستقیم داخل متن با ${} بذاریم.",
      "desc_en": "Template literals use backticks (`) and let you embed variables directly in text with ${}.",
      "html": "<p id=\"out\"></p>",
      "css": "p { font-family: sans-serif; }",
      "js": "const name = \"سارا\";\nconst age = 22;\ndocument.getElementById(\"out\").textContent = `${name} ${age} ساله است`;",
      "explain_fa": "Template literals با بک‌تیک (`) به‌جای کوتیشن معمولی نوشته می‌شن و اجازه می‌دن متغیرها رو مستقیم داخل متن با ${متغیر} جاسازی کنیم، بدون نیاز به + برای چسبوندن رشته‌ها.\nمثلاً `${name} خوش اومدی` خیلی خواناتر از \"سلام \" + name + \" خوش اومدی\" است. همچنین اجازه می‌دن متن چندخطی هم بنویسیم.",
      "explain_en": "Template literals are written with backticks (`) instead of regular quotes and let us embed variables directly in text with ${variable}, without needing + to concatenate strings.\nFor example `Welcome, ${name}` is much more readable than \"Welcome, \" + name + \"!\". They also let us write multi-line text.",
      "syntax": "`متن ${variable} متن`"
    },
    {
      "desc_fa": "برای انتخاب عنصر از DOM از getElementById، querySelector، یا querySelectorAll استفاده می‌کنیم.",
      "desc_en": "To select an element from the DOM, use getElementById, querySelector, or querySelectorAll.",
      "html": "<p class=\"target\">این پاراگراف رو انتخاب می‌کنیم</p>",
      "css": ".target { font-family: sans-serif; }",
      "js": "const el = document.querySelector(\".target\");\nel.style.color = \"#C97A2B\";\nel.style.fontWeight = \"bold\";",
      "explain_fa": "برای دستکاری صفحه با جاوااسکریپت، اول باید عنصر مورد نظر رو «انتخاب» کنیم. document.getElementById(\"id\") یه عنصر با اون id رو برمی‌گردونه.\ndocument.querySelector(\".class\") یا (\"tag\") انعطاف‌پذیرتره و از همون سلکتورهای CSS استفاده می‌کنه. querySelectorAll همه‌ی عنصرهای مچ‌شده رو (نه فقط اولی) به‌صورت یه لیست برمی‌گردونه.",
      "explain_en": "To manipulate a page with JavaScript, we first need to \"select\" the target element. document.getElementById(\"id\") returns an element with that id.\ndocument.querySelector(\".class\") or (\"tag\") is more flexible and uses the same CSS selectors. querySelectorAll returns all matching elements (not just the first) as a list.",
      "syntax": "document.getElementById(\"id\")\ndocument.querySelector(\".class\")"
    },
    {
      "desc_fa": "با textContent، innerHTML، classList.add و createElement می‌تونیم محتوای صفحه رو با جاوااسکریپت تغییر بدیم.",
      "desc_en": "Use textContent, innerHTML, classList.add, and createElement to change page content with JavaScript.",
      "html": "<div id=\"container\"></div>",
      "css": "#container { font-family: sans-serif; }",
      "js": "const newP = document.createElement(\"p\");\nnewP.textContent = \"این پاراگراف با جاوااسکریپت ساخته شد!\";\nnewP.style.color = \"#1E8A7A\";\ndocument.getElementById(\"container\").appendChild(newP);",
      "explain_fa": "بعد از انتخاب یه عنصر، می‌تونیم تغییرش بدیم. textContent متن داخل عنصر رو عوض می‌کنه (امن‌تره). innerHTML اجازه می‌ده HTML واقعی هم داخلش بذاریم (باید مراقب امنیت باشیم).\nclassList.add(\"نام-کلاس\") یه کلاس CSS جدید بهش اضافه می‌کنه، و document.createElement(\"tag\") یه عنصر کاملاً جدید می‌سازه که بعد با appendChild به صفحه اضافه می‌شه.",
      "explain_en": "After selecting an element, we can change it. textContent changes the text inside an element (safer). innerHTML lets us insert real HTML too (be careful of security).\nclassList.add(\"class-name\") adds a new CSS class to it, and document.createElement(\"tag\") creates a brand-new element that's then added to the page with appendChild.",
      "syntax": "el.textContent = \"...\";\nel.classList.add(\"class\");"
    },
    {
      "desc_fa": "addEventListener به یه عنصر می‌گه وقتی یه رویداد (مثل click) اتفاق افتاد، چه تابعی رو اجرا کنه.",
      "desc_en": "addEventListener tells an element which function to run when an event (like click) happens.",
      "html": "<button id=\"btn\">من رو کلیک کن</button>\n<p id=\"out\"></p>",
      "css": "button { padding:8px 16px; font-family:sans-serif; }\np { font-family: sans-serif; }",
      "js": "document.getElementById(\"btn\").addEventListener(\"click\", function () {\n  document.getElementById(\"out\").textContent = \"رویداد کلیک اجرا شد!\";\n});",
      "explain_fa": "addEventListener به یه عنصر می‌گه «وقتی این اتفاق (رویداد) افتاد، این تابع رو اجرا کن». مثلاً element.addEventListener(\"click\", function() {...}) وقتی روی element کلیک بشه، تابع رو اجرا می‌کنه.\nرویدادهای رایج دیگه شامل input (تایپ‌کردن)، submit (ارسال فرم)، و mouseover (رفتن موس روی عنصر) هستن. این پایه‌ی هر تعامل واقعی کاربر با صفحه‌ست.",
      "explain_en": "addEventListener tells an element \"when this event happens, run this function\". For example element.addEventListener(\"click\", function() {...}) runs the function when element is clicked.\nOther common events include input (typing), submit (form submission), and mouseover (mouse over an element). This is the foundation of any real user interaction with a page.",
      "syntax": "el.addEventListener(\"click\", function () { ... });"
    },
    {
      "desc_fa": "Event bubbling یعنی رویداد از عنصر داخلی به سمت بیرونی «حباب» می‌کنه؛ event.stopPropagation() جلوش رو می‌گیره.",
      "desc_en": "Event bubbling means an event travels from inner to outer elements; event.stopPropagation() stops it.",
      "html": "<div id=\"outer\" style=\"padding:20px;background:#eee;\">\n  <button id=\"inner\">کلیک کن</button>\n</div>\n<p id=\"out\"></p>",
      "css": "p { font-family: sans-serif; }",
      "js": "document.getElementById(\"outer\").addEventListener(\"click\", () => {\n  document.getElementById(\"out\").textContent = \"روی div بیرونی هم رویداد اجرا شد (bubbling)\";\n});\ndocument.getElementById(\"inner\").addEventListener(\"click\", (e) => {\n  console.log(\"دکمه کلیک شد\");\n});",
      "explain_fa": "وقتی روی یه عنصر تو در توی (nested) کلیک می‌کنیم، رویداد اول روی خود اون عنصر اجرا می‌شه، بعد به سمت والدینش «حباب می‌کنه» (bubble) و روی اون‌ها هم اجرا می‌شه — به همین خاطر بهش Event Bubbling می‌گن.\nevent.stopPropagation() داخل یه تابع رویداد، جلوی این حباب‌شدن رو می‌گیره تا رویداد فقط روی خود عنصر انتخاب‌شده بمونه و به والدین نره.",
      "explain_en": "When we click a nested element, the event first fires on that element itself, then \"bubbles\" up to its parents and fires on them too — that's why it's called Event Bubbling.\nevent.stopPropagation() inside an event handler function stops this bubbling, so the event stays only on the clicked element and doesn't reach its parents.",
      "syntax": "event.stopPropagation();"
    },
    {
      "desc_fa": "با جاوااسکریپت می‌تونیم مقدار فرم رو بخونیم و قبل از ارسال، خودمون ولیدیشن انجام بدیم.",
      "desc_en": "With JavaScript, we can read form values and run our own validation before submitting.",
      "html": "<input id=\"email\" placeholder=\"ایمیل\" />\n<button id=\"check\">بررسی</button>\n<p id=\"out\"></p>",
      "css": "input { padding:6px; font-family:sans-serif; }\np { font-family: sans-serif; }",
      "js": "document.getElementById(\"check\").addEventListener(\"click\", () => {\n  const val = document.getElementById(\"email\").value;\n  const valid = val.includes(\"@\");\n  document.getElementById(\"out\").textContent = valid ? \"ایمیل معتبره ✅\" : \"ایمیل نامعتبره ❌\";\n});",
      "explain_fa": "قبل از ارسال یه فرم، معمولاً می‌خوایم مطمئن بشیم داده‌ها معتبرن — این کارو با جاوااسکریپت انجام می‌دیم چون منطقی‌تر و قابل‌سفارشی‌سازی‌تر از ولیدیشن پیش‌فرض HTML ئه.\nمقدار یه input رو با element.value می‌خونیم، بعد با شرط (if) بررسی می‌کنیم که آیا معتبره یا نه، و بر اساس نتیجه، پیام خطا نشون می‌دیم یا اجازه‌ی ارسال می‌دیم.",
      "explain_en": "Before submitting a form, we usually want to make sure the data is valid — we do this with JavaScript because it's more flexible and customizable than HTML's built-in validation.\nWe read an input's value with element.value, then check with a condition (if) whether it's valid, and based on the result, show an error message or allow submission.",
      "syntax": "input.value\nif (input.value.length > 0) { ... }"
    },
    {
      "desc_fa": "JSON فرمتی برای ذخیره و تبادل داده‌ست؛ JSON.stringify شیء رو به متن، و JSON.parse متن رو به شیء تبدیل می‌کنه.",
      "desc_en": "JSON is a format for storing and exchanging data; JSON.stringify converts an object to text, JSON.parse converts text back to an object.",
      "html": "<p id=\"out\"></p>",
      "css": "p { font-family: sans-serif; }",
      "js": "const user = { name: \"مریم\", age: 30 };\nconst json = JSON.stringify(user);\nconst back = JSON.parse(json);\ndocument.getElementById(\"out\").textContent = json + \" → \" + back.name;",
      "explain_fa": "JSON (JavaScript Object Notation) فرمت استانداردی برای ذخیره و تبادل داده‌ست — تقریباً همه‌ی API های وب باهاش کار می‌کنن.\nJSON.stringify(obj) یه شیء جاوااسکریپتی رو به یه رشته‌ی متنی JSON تبدیل می‌کنه (مثلاً برای ذخیره یا ارسال). JSON.parse(text) برعکسش رو انجام می‌ده و یه رشته‌ی JSON رو به شیء واقعی جاوااسکریپت برمی‌گردونه.",
      "explain_en": "JSON (JavaScript Object Notation) is a standard format for storing and exchanging data — almost every web API works with it.\nJSON.stringify(obj) converts a JavaScript object into a JSON text string (e.g. for storing or sending). JSON.parse(text) does the reverse, converting a JSON string back into a real JavaScript object.",
      "syntax": "JSON.stringify(obj)\nJSON.parse(text)"
    },
    {
      "desc_fa": "Fetch API برای گرفتن داده از یه سرور استفاده می‌شه؛ چون async هست، معمولاً با then یا await کار می‌کنیم.",
      "desc_en": "The Fetch API is used to get data from a server; since it's async, we typically use then or await.",
      "html": "<p id=\"out\">در حال بارگذاری...</p>",
      "css": "p { font-family: sans-serif; }",
      "js": "fetch(\"https://jsonplaceholder.typicode.com/todos/1\")\n  .then(res => res.json())\n  .then(data => {\n    document.getElementById(\"out\").textContent = \"عنوان: \" + data.title;\n  })\n  .catch(() => {\n    document.getElementById(\"out\").textContent = \"خطا در اتصال (شاید اینترنت نداری)\";\n  });",
      "explain_fa": "Fetch API راهیه برای درخواست‌دادن به یه سرور از داخل جاوااسکریپت (بدون رفرش صفحه) — مثلاً گرفتن لیست محصولات یا ارسال فرم.\nچون fetch یه عملیات async (نامتقارن) هست — یعنی زمان می‌بره و بلافاصله جواب نمی‌ده — معمولاً با .then() (برای وقتی جواب اومد) و .catch() (برای مدیریت خطا) کار می‌کنیم.",
      "explain_en": "The Fetch API is a way to make requests to a server from within JavaScript (without a page refresh) — e.g. getting a product list or submitting a form.\nBecause fetch is an async operation — meaning it takes time and doesn't respond immediately — we typically work with .then() (for when the response arrives) and .catch() (for handling errors).",
      "syntax": "fetch(url).then(res => res.json()).then(data => {...});"
    },
    {
      "desc_fa": "ES6+ ویژگی‌های مدرنی مثل let/const، arrow function، template literal، و destructuring رو به جاوااسکریپت اضافه کرد.",
      "desc_en": "ES6+ added modern features like let/const, arrow functions, template literals, and destructuring to JavaScript.",
      "html": "<p id=\"out\"></p>",
      "css": "p { font-family: sans-serif; }",
      "js": "const greet = name => `سلام ${name}!`;\ndocument.getElementById(\"out\").textContent = greet(\"دنیا\");",
      "explain_fa": "ES6 (منتشرشده در ۲۰۱۵) و نسخه‌های بعدیش، ویژگی‌های مدرن زیادی به جاوااسکریپت اضافه کردن که کد رو کوتاه‌تر و خواناتر می‌کنن: let/const به‌جای var، توابع پیکانی، template literals، و destructuring از جمله‌شونن.\nامروز تقریباً هر کد جاوااسکریپت مدرنی از این ویژگی‌ها استفاده می‌کنه، پس آشنایی باهاشون ضروریه.",
      "explain_en": "ES6 (released in 2015) and later versions added many modern features to JavaScript that make code shorter and more readable: let/const instead of var, arrow functions, template literals, and destructuring among them.\nToday almost every modern JavaScript codebase uses these features, so familiarity with them is essential.",
      "syntax": "let x = 5;\nconst greet = name => `سلام ${name}`;"
    },
    {
      "desc_fa": "Destructuring اجازه می‌ده مقادیر رو مستقیم از آرایه یا شیء با یه خط بگیریم: const { name } = user.",
      "desc_en": "Destructuring lets you extract values directly from an array or object in one line: const { name } = user.",
      "html": "<p id=\"out\"></p>",
      "css": "p { font-family: sans-serif; }",
      "js": "const user = { name: \"سارا\", age: 25 };\nconst { name, age } = user;\ndocument.getElementById(\"out\").textContent = `${name} - ${age} ساله`;",
      "explain_fa": "Destructuring اجازه می‌ده مقادیر رو مستقیم از یه آرایه یا شیء «باز کنیم» و در متغیرهای جدا بریزیم، در یه خط. مثلاً const { name, age } = user؛ به‌جای دو خط جدا user.name و user.age.\nبرای آرایه هم می‌شه: const [first, second] = arr؛. این سینتکس کد رو خیلی کوتاه‌تر و خواناتر می‌کنه، مخصوصاً وقتی با شیءهای بزرگ کار می‌کنیم.",
      "explain_en": "Destructuring lets us directly \"unpack\" values from an array or object into separate variables in one line. For example const { name, age } = user; instead of two separate lines user.name and user.age.\nFor arrays too: const [first, second] = arr;. This syntax makes code much shorter and more readable, especially when working with large objects.",
      "syntax": "const { name, age } = obj;\nconst [a, b] = arr;"
    },
    {
      "desc_fa": "Spread (...arr) عناصر یه آرایه رو باز می‌کنه، و Rest چند آرگومان رو در یه آرایه جمع می‌کنه.",
      "desc_en": "Spread (...arr) unpacks array elements, and Rest gathers multiple arguments into an array.",
      "html": "<p id=\"out\"></p>",
      "css": "p { font-family: sans-serif; }",
      "js": "const arr1 = [1, 2, 3];\nconst arr2 = [...arr1, 4, 5];\nfunction sum(...nums) {\n  return nums.reduce((a, b) => a + b, 0);\n}\ndocument.getElementById(\"out\").textContent = arr2.join(\",\") + \" | جمع: \" + sum(1,2,3,4);",
      "explain_fa": "Spread (...) یه آرایه یا شیء رو «باز» می‌کنه — مثلاً [...arr1, 4, 5] یه آرایه‌ی جدید می‌سازه که شامل همه‌ی عناصر arr1 به‌علاوه‌ی 4 و 5 است، بدون تغییردادن arr1 اصلی.\nRest برعکسه: توی پارامترهای یه تابع، چند آرگومان جدا رو در یه آرایه‌ی واحد جمع می‌کنه: function sum(...nums) اجازه می‌ده تابع هر تعداد آرگومان دلخواه بگیره.",
      "explain_en": "Spread (...) \"unpacks\" an array or object — for example [...arr1, 4, 5] creates a new array containing all of arr1's elements plus 4 and 5, without modifying the original arr1.\nRest is the opposite: in a function's parameters, it gathers multiple separate arguments into one single array: function sum(...nums) lets the function accept any number of arguments.",
      "syntax": "const arr2 = [...arr1, 4, 5];\nfunction f(...args) {}"
    },
    {
      "desc_fa": "try/catch اجازه می‌ده خطاهای احتمالی رو مدیریت کنیم بدون اینکه کل برنامه متوقف بشه.",
      "desc_en": "try/catch lets you handle potential errors without stopping the whole program.",
      "html": "<p id=\"out\"></p>",
      "css": "p { font-family: sans-serif; }",
      "js": "try {\n  const data = JSON.parse(\"این متن معتبر نیست\");\n} catch (error) {\n  document.getElementById(\"out\").textContent = \"خطا گرفته شد و مدیریت شد ✅\";\n}",
      "explain_fa": "بعضی کدها ممکنه خطا بدن (مثلاً پارس‌کردن یه JSON نامعتبر، یا دسترسی به یه چیز که وجود نداره). بدون مدیریت خطا، یه خطا می‌تونه کل اسکریپت رو متوقف کنه.\ntry یه بلوک کد «مشکوک» رو اجرا می‌کنه، و اگه خطایی رخ بده، به‌جای متوقف‌شدن برنامه، اجرا می‌پره به بلوک catch که می‌تونیم خطا رو مدیریت کنیم (مثلاً پیام خطا به کاربر نشون بدیم).",
      "explain_en": "Some code might throw an error (like parsing invalid JSON, or accessing something that doesn't exist). Without error handling, an error can stop the entire script.\ntry runs a \"suspicious\" block of code, and if an error occurs, instead of stopping the program, execution jumps to the catch block where we can handle the error (e.g. show an error message to the user).",
      "syntax": "try {\n  ...\n} catch (error) {\n  ...\n}"
    },
    {
      "desc_fa": "localStorage اجازه می‌ده داده رو توی مرورگر کاربر ذخیره کنیم که حتی بعد از بستن صفحه هم بمونه.",
      "desc_en": "localStorage lets you store data in the user's browser that persists even after closing the page.",
      "html": "<input id=\"note\" placeholder=\"یادداشتت رو بنویس\" />\n<button id=\"save\">ذخیره</button>\n<p id=\"out\"></p>",
      "css": "input { padding:6px; font-family:sans-serif; }\np { font-family: sans-serif; }",
      "js": "document.getElementById(\"save\").addEventListener(\"click\", () => {\n  const val = document.getElementById(\"note\").value;\n  localStorage.setItem(\"myNote\", val);\n  document.getElementById(\"out\").textContent = \"ذخیره شد: \" + val;\n});",
      "explain_fa": "localStorage یه فضای ذخیره‌سازی ساده در مرورگر کاربره که حتی بعد از بستن تب یا کامپیوتر هم باقی می‌مونه (برخلاف متغیرهای معمولی که با رفرش‌شدن صفحه از بین می‌رن).\nlocalStorage.setItem(\"key\", value) یه مقدار رو ذخیره می‌کنه، و localStorage.getItem(\"key\") همون رو برمی‌گردونه. توجه: فقط رشته ذخیره می‌شه، پس برای شیء/آرایه باید اول با JSON.stringify تبدیلش کنیم.",
      "explain_en": "localStorage is a simple storage space in the user's browser that persists even after closing the tab or computer (unlike regular variables which disappear on page refresh).\nlocalStorage.setItem(\"key\", value) stores a value, and localStorage.getItem(\"key\") retrieves it. Note: only strings are stored, so for objects/arrays we must first convert with JSON.stringify.",
      "syntax": "localStorage.setItem(\"key\", value);\nlocalStorage.getItem(\"key\");"
    },
    {
      "desc_fa": "setTimeout یه کد رو بعد از مدت مشخصی یک‌بار اجرا می‌کنه، و setInterval هر چند وقت یک‌بار تکرارش می‌کنه.",
      "desc_en": "setTimeout runs code once after a delay, and setInterval repeats it every interval.",
      "html": "<p id=\"out\">۳</p>",
      "css": "p { font-family: sans-serif; font-size:24px; }",
      "js": "let count = 3;\nconst el = document.getElementById(\"out\");\nconst timer = setInterval(() => {\n  count--;\n  el.textContent = count > 0 ? count : \"شروع! 🚀\";\n  if (count <= 0) clearInterval(timer);\n}, 1000);",
      "explain_fa": "setTimeout(function, ms) یه تابع رو فقط یه‌بار، بعد از گذشت چند میلی‌ثانیه اجرا می‌کنه — مثلاً نمایش یه پیام بعد از ۲ ثانیه.\nsetInterval(function, ms) همون تابع رو هر چند میلی‌ثانیه یک‌بار، بی‌نهایت تکرار می‌کنه (تا وقتی با clearInterval متوقفش کنیم) — مناسب برای شمارنده‌ی معکوس یا به‌روزرسانی‌ی زنده‌ی ساعت.",
      "explain_en": "setTimeout(function, ms) runs a function only once, after a number of milliseconds have passed — e.g. showing a message after 2 seconds.\nsetInterval(function, ms) repeats that same function every few milliseconds, indefinitely (until we stop it with clearInterval) — good for a countdown timer or a live clock update.",
      "syntax": "setTimeout(fn, 1000);\nsetInterval(fn, 1000);"
    },
    {
      "desc_fa": "console.log برای چاپ مقادیر توی Console مرورگره — ابزار اصلی برای دیباگ‌کردن کد.",
      "desc_en": "console.log prints values to the browser Console — the main tool for debugging code.",
      "html": "<p>برای دیدن خروجی، Console مرورگر رو باز کن (F12)</p>",
      "css": "p { font-family: sans-serif; }",
      "js": "console.log(\"این یک پیام ساده است\");\nconsole.log(\"عدد:\", 42);\nconsole.error(\"این یک پیام خطاست (نمونه)\");",
      "explain_fa": "console.log() مهم‌ترین ابزار دیباگ هر برنامه‌نویس جاوااسکریپته — هر مقداری رو (متن، عدد، شیء) توی تب Console مرورگر (F12) چاپ می‌کنه تا ببینیم داخل کد واقعاً چه اتفاقی می‌افته.\nconsole.error() شبیهشه ولی پیام رو قرمز و برجسته نشون می‌ده، مناسب برای گزارش مشکلات. یاد گرفتن استفاده‌ی راحت از Console، سرعت پیداکردن باگ‌ها رو خیلی بالا می‌بره.",
      "explain_en": "console.log() is the most important debugging tool for any JavaScript developer — it prints any value (text, number, object) to the browser's Console tab (F12) so we can see what's actually happening inside the code.\nconsole.error() is similar but shows the message in red and highlighted, good for reporting problems. Getting comfortable with the Console greatly speeds up finding bugs.",
      "syntax": "console.log(value);\nconsole.error(value);"
    },
    {
      "desc_fa": "این پروژه ترکیبیه از DOM، رویدادها، و آرایه‌ها — یه لیست تسک (To-Do) ساده بساز که بتونی آیتم اضافه کنی.",
      "desc_en": "This project combines DOM, events, and arrays — build a simple To-Do list where you can add items.",
      "html": "<input id=\"taskInput\" placeholder=\"یک کار جدید...\" />\n<button id=\"addBtn\">افزودن</button>\n<ul id=\"taskList\"></ul>",
      "css": "input { padding:6px; font-family:sans-serif; }\nul { font-family: sans-serif; padding-inline-start: 20px; }",
      "js": "document.getElementById(\"addBtn\").addEventListener(\"click\", () => {\n  const input = document.getElementById(\"taskInput\");\n  if (input.value.trim() === \"\") return;\n  const li = document.createElement(\"li\");\n  li.textContent = input.value;\n  document.getElementById(\"taskList\").appendChild(li);\n  input.value = \"\";\n});",
      "explain_fa": "این پروژه‌ی پایانی ترکیبیه از DOM، رویدادها، و آرایه‌ها که همه رو تا الان یاد گرفتی: خوندن مقدار یه input، ساختن یه عنصر جدید با createElement، و اضافه‌کردنش به یه لیست با appendChild.\nاین دقیقاً همون الگوییه که پشت اکثر اپلیکیشن‌های واقعی (لیست تسک، سبد خرید، چت) وجود داره — تبریک می‌گم، الان می‌تونی یه اپ واقعی و تعاملی بسازی!",
      "explain_en": "This final project combines DOM, events, and arrays — everything you've learned so far: reading an input's value, creating a new element with createElement, and adding it to a list with appendChild.\nThis is exactly the pattern behind most real applications (a task list, a shopping cart, a chat) — congratulations, you can now build a real, interactive app!",
      "syntax": "createElement, appendChild, addEventListener ترکیب هر سه"
    }
  ]
};
