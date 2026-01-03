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
p { color: red; }            /* element */
.box { padding: 10px; }     /* class */
#title { font-size: 24px; } /* id */

div p { color: blue; }      /* descendant */
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

### Best Practice

```css
* {
  box-sizing: border-box;
}
```

### Common Mistakes

* Box size হিসাব ভুল করা
* `box-sizing` ব্যবহার না করা

---

## 4️⃣ Display & Position

### Display

```css
.block { display: block; }
.inline { display: inline; }
.inline-block { display: inline-block; }
.none { display: none; }
```

### Position

```css
.relative { position: relative; }
.absolute { position: absolute; top: 0; left: 0; }
.fixed { position: fixed; }
.sticky { position: sticky; top: 0; }
```

### Common Mistakes

* `absolute` element-এর parent এ `position: relative` না দেওয়া

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

* Flexbox আর Grid mix করে confuse হওয়া

---

## 7️⃣ Colors & Background

```css
.box {
  color: #333;
  background-color: rgb(240, 240, 240);
}
```

### Common Mistakes

* Text–background contrast ignore করা

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

* `px`, `rem` ছাড়া value লেখা

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

* Mobile‑first approach follow না করা

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

* `transition` hover এ লেখা

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

### Define Variables

```css
:root {
  --primary-color: #0d6efd;
  --secondary-color: #6c757d;
  --font-main: Arial, sans-serif;
  --spacing: 16px;
}
```

### Use Variables

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

### Theme Example

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
* Scope বোঝা না

---

## 1️⃣3️⃣ CSS Best Practices

* Class‑based styling ব্যবহার করো
* Reusable CSS লেখো
* Inline CSS avoid করো
* Consistent naming রাখো

---

## 1️⃣4️⃣ CSS Animations & @keyframes

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.box {
  animation: fadeIn 1s ease-in-out;
}
```

### Common Mistakes

* `@keyframes` name mismatch
* `animation-duration` না দেওয়া
* Animation আর transition গুলিয়ে ফেলা

---

## 1️⃣5️⃣ CSS Transform

```css
.box {
  transform: rotate(45deg);
}
```

### Functions

* `translate(x, y)`
* `scale(x)`
* `rotate(deg)`
* `skew(deg)`

### Common Mistakes

* `px` / `deg` না দেওয়া
* Transition ছাড়া abrupt transform

---

## 1️⃣6️⃣ CSS Transition (Deep)

```css
.box {
  transition: transform 0.3s ease;
}

.box:hover {
  transform: scale(1.1);
}
```

### Common Mistakes

* Hover এ transition লেখা
* `all` বেশি ব্যবহার করা

---

## 1️⃣7️⃣ Z‑Index & Stacking Context

```css
.box1 {
  position: relative;
  z-index: 2;
}

.box2 {
  position: relative;
  z-index: 1;
}
```

### Notes

* `position` ছাড়া z‑index কাজ করে না
* Parent stacking context effect ফেলে

---

## 1️⃣8️⃣ Overflow

```css
.box {
  overflow: hidden;
}
```

### Values

* hidden
* scroll
* auto
* visible

---

## 1️⃣9️⃣ Pseudo Classes & Elements

### Pseudo Classes

```css
button:hover {
  background: black;
}
```

### Pseudo Elements

```css
p::before {
  content: "👉 ";
}
```

---

## 2️⃣0️⃣ CSS Specificity & Cascade

Priority Order:

1. Inline
2. ID
3. Class
4. Element

```css
#title { color: red; }
.title { color: blue; }
h1 { color: green; }
```

---

## 2️⃣1️⃣ CSS Units

```css
.container {
  width: 80vw;
  font-size: 1rem;
}
```

### Units

* Absolute: `px`
* Relative: `%`, `em`, `rem`, `vh`, `vw`

---

## 2️⃣2️⃣ Responsive Images

```css
img {
  max-width: 100%;
  height: auto;
}
```

---

## 2️⃣3️⃣ CSS Reset

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

---

## 2️⃣4️⃣ Accessibility (Basic)

```css
button:focus {
  outline: 2px solid blue;
}
```

---

## 2️⃣5️⃣ Performance Tips

* Heavy animation avoid করো
* `will-change` limited use
* Large shadow কম ব্যবহার

---

## 2️⃣6️⃣ Final CSS Revision Checklist

* Box Model clear
* Flexbox confident
* Grid basic idea
* Responsive mindset
* Animation vs Transition clear
