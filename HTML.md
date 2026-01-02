# 📘 HTML Quick Revision & Practice Guide

---

## 1️⃣ Basic HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```

### Common Mistakes

* `<!DOCTYPE html>` না লেখা
* `<head>` আর `<body>` গুলিয়ে ফেলা
* Tag ঠিকমতো close না করা

---

## 2️⃣ Head Tags

```html
<meta charset="UTF-8" />
<meta name="description" content="My website" />
<link rel="stylesheet" href="style.css" />
<script src="app.js" defer></script>
```

### Common Mistakes

* CSS link `<body>` এর নিচে দেওয়া
* `defer` ছাড়া script load করা

---

## 3️⃣ Text Tags

```html
<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<p>This is a paragraph</p>
<span>Inline text</span>
<br />
<hr />
```

### Common Mistakes

* Heading এর order skip করা (`h1` → `h4`)
* `<br>` দিয়ে paragraph বানানো

---

## 4️⃣ Links & Images

```html
<a href="https://example.com" target="_blank">Visit</a>

<img src="image.jpg" alt="description" />
```

### Common Mistakes

* `<img>` এ `alt` না দেওয়া
* Broken link check না করা

---

## 5️⃣ Lists

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ol>
  <li>First</li>
  <li>Second</li>
</ol>
```

### Common Mistakes

* `<li>` বাইরে লেখা

---

## 6️⃣ Tables

```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Rudra</td>
    <td>19</td>
  </tr>
</table>
```

### Common Mistakes

* `<tr>` ছাড়া `<td>` ব্যবহার

---

## 7️⃣ Forms

```html
<form>
  <input type="text" placeholder="Name" />
  <input type="email" placeholder="Email" />
  <input type="password" />
  <button type="submit">Submit</button>
</form>
```

### Common Mistakes

* `button` এর type না দেওয়া
* `label` ব্যবহার না করা

---

## 8️⃣ Semantic Tags

```html
<header></header>
<nav></nav>
<main></main>
<section></section>
<article></article>
<footer></footer>
```

### Common Mistakes

* সব জায়গায় `<div>` ব্যবহার করা
* Semantic meaning ignore করা

---

## 9️⃣ Media

```html
<video controls src="video.mp4"></video>
<audio controls src="audio.mp3"></audio>
```

### Common Mistakes

* `controls` attribute না দেওয়া

---

## 🔟 HTML Attributes

```html
<input type="text" required disabled />
```

### Common Mistakes

* Attribute spelling ভুল লেখা
* Boolean attribute এ value দেওয়া

---

## 1️⃣1️⃣ Block vs Inline

```html
<div>Block element</div>
<span>Inline element</span>
```

### Common Mistakes

* Inline element এ width/height apply করা

---

## 1️⃣2️⃣ HTML Best Practices

* Meaningful tag ব্যবহার করো
* Proper indentation রাখো
* Accessibility মাথায় রাখো
* Clean structure follow করো

---

