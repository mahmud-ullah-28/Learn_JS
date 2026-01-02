# 🎨 CSS Quick Revision & Practice Guide

---

## 1️⃣ CSS Basics

```css
/* Selector { property: value; } */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
```

### Common Mistakes

* `;` (semicolon) দিতে ভুলে যাওয়া
* `{}` ঠিকভাবে close না করা

---

## 2️⃣ CSS Selectors

```css
p { color: red; }          /* element */
.box { padding: 10px; }   /* class */
#title { font-size: 24px; } /* id */

div p { color: blue; }    /* descendant */
```

### Common Mistakes

* `id` একাধিক element এ ব্যবহার করা
* Selector specificity না বোঝা

---

## 3️⃣ Box Model (Very Important)

```css
.box {
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}
```

### Common Mistakes

* Box size হিসাব ভুল করা
* `box-sizing: border-box` ব্যবহার না করা

```css
* {
  box-sizing: border-box;
}
```

---

## 4️⃣ Display & Position

```css
.block { display: block; }
.inline { display: inline; }
.inline-block { display: inline-block; }
.none { display: none; }
```

```css
.relative { position: relative; }
.absolute { position: absolute; top: 0; left: 0; }
.fixed { position: fixed; }
.sticky { position: sticky; top: 0; }
```

### Common Mistakes

* `absolute` element এর parent এ `position: relative` না দেওয়া

---

## 5️⃣ Flexbox (Must Know)

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```css
.container {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
```

### Common Mistakes

* `justify-content` আর `align-items` গুলিয়ে ফেলা
* Parent এ `display: flex` না দেওয়া

---

## 6️⃣ CSS Grid (Basic)

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
```

### Common Mistakes

* Flex আর Grid mix করে confuse হওয়া

---

## 7️⃣ Colors & Background

```css
.box {
  color: #333;
  background-color: rgb(240, 240, 240);
}
```

### Common Mistakes

* Contrast ignore করা

---

## 8️⃣ Typography

```css
p {
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
}
```

### Common Mistakes

* `px` ছাড়া value লেখা

---

## 9️⃣ Responsive Design

```css
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
```

### Common Mistakes

* Mobile-first approach follow না করা

---

## 🔟 Transitions & Hover

```css
.btn {
  transition: background 0.3s ease;
}

.btn:hover {
  background: black;
  color: white;
}
```

### Common Mistakes

* `transition` hover এ দেওয়া

---

## 1️⃣1️⃣ Common CSS Properties

```css
width, height
margin, padding
color, background
border, border-radius
box-shadow
```

---

## 1️⃣2️⃣ CSS Variables (Custom Properties)

CSS Variables ব্যবহার করলে **reusable**, **maintainable** এবং **theme-friendly** CSS লেখা যায়।

### Basic Syntax

```css
:root {
  --primary-color: #0d6efd;
  --secondary-color: #6c757d;
  --font-main: Arial, sans-serif;
  --spacing: 16px;
}
```

```css
body {
  font-family: var(--font-main);
  color: var(--primary-color);
}

.button {
  padding: var(--spacing);
  background: var(--primary-color);
}
```

### Updating Variables

```css
.card {
  --card-padding: 20px;
  padding: var(--card-padding);
}
```

### Theme Example (Light / Dark)

```css
:root {
  --bg-color: white;
  --text-color: black;
}

.dark {
  --bg-color: #111;
  --text-color: #eee;
}

body {
  background: var(--bg-color);
  color: var(--text-color);
}
```

### Common Mistakes

* `--` ছাড়া variable define করা
* `var()` ব্যবহার না করা
* Scope (local vs global) না বোঝা
* CSS variable আর SCSS variable গুলিয়ে ফেলা

---

## 1️⃣3️⃣ CSS Best Practices

* Class-based styling ব্যবহার করো
* Reusable CSS লেখো
* Inline CSS avoid করো
* Consistent naming রাখো

---
