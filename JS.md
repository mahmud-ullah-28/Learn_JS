# 📘 JavaScript Quick Revision & Practice Guide


---

## 1️⃣ Variables

```js
var x = 10;   // function scoped (avoid using in modern JS)
let y = 20;   // block scoped
const z = 30; // reassignment করা যাবে না
```

```js
if (true) {
  let a = 5;
  const b = 10;
}
// a, b বাইরে থেকে access করা যাবে না
```

---

## 2️⃣ Data Types

```js
let num = 10;            // Number
let text = "Hello";      // String
let isOk = true;         // Boolean
let empty = null;        // null
let notSet;              // undefined
let obj = { name: "A" };// Object
let arr = [1, 2, 3];     // Array
let sym = Symbol("id"); // Symbol
let big = 123n;          // BigInt
```

---

## 3️⃣ Operators

```js
// Arithmetic
10 + 5; 10 - 5; 10 * 5; 10 / 5; 10 % 3;

// Comparison
5 == "5";   // true (type check করে না)
5 === "5";  // false (type check করে)

// Logical
true && false;
true || false;
!true;
```

---

## 4️⃣ Conditions

```js
let age = 18;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

```js
// Ternary Operator
let result = age >= 18 ? "Adult" : "Minor";
```

---

## 5️⃣ Loops

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

```js
let i = 0;
while (i < 3) {
  i++;
}
```

```js
do {
  i++;
} while (i < 5);
```

```js
// for...of (Array)
for (let item of [1, 2, 3]) {
  console.log(item);
}

// for...in (Object)
for (let key in { a: 1, b: 2 }) {
  console.log(key);
}
```

---

## 6️⃣ Functions

```js
function add(a, b) {
  return a + b;
}
```

```js
const sum = (a, b) => a + b;
```

---

## 7️⃣ Arrays

```js
let arr = [1, 2, 3];

arr.push(4);      // add last
arr.pop();        // remove last
arr.shift();      // remove first
arr.unshift(0);   // add first
```

```js
arr.map(n => n * 2);
arr.filter(n => n > 1);
arr.reduce((a, b) => a + b, 0);
arr.find(n => n === 2);
```

---

## 8️⃣ Objects

```js
let user = {
  name: "Rudra",
  age: 19,
};

user.name;
user["age"];
```

---

## 9️⃣ String Methods

```js
let str = " Hello World ";

str.length;
str.toUpperCase();
str.toLowerCase();
str.trim();
str.includes("World");
str.replace("World", "JS");
str.split(" ");
```

---

## 🔟 Math & Date

```js
Math.random();
Math.floor(4.7);
Math.ceil(4.1);
Math.max(1, 5, 3);
Math.min(1, 5, 3);
```

```js
new Date();
Date.now();
```

---

## 1️⃣1️⃣ DOM Selectors

```js
document.getElementById("id");
document.getElementsByClassName("class");
document.querySelector(".box");
document.querySelectorAll("div");
```

---

## 1️⃣2️⃣ DOM Events

```js
btn.addEventListener("click", () => {
  console.log("Clicked");
});
```

Common events: `click`, `mouseover`, `keydown`, `submit`, `load`

---

## 1️⃣3️⃣ ES6 Features

```js
// Template literal
let name = "JS";
`Hello ${name}`;

// Destructuring
let { age } = user;

// Spread
let newArr = [...arr, 5];
```

---

## 1️⃣4️⃣ Promises & Async

```js
const promise = new Promise((resolve, reject) => {
  resolve("Done");
});
```

```js
async function fetchData() {
  const res = await fetch(url);
  const data = await res.json();
}
```

---

## 1️⃣5️⃣ Error Handling

```js
try {
  riskyCode();
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Done");
}
```

---

## 1️⃣6️⃣ Local Storage

```js
localStorage.setItem("key", "value");
localStorage.getItem("key");
localStorage.removeItem("key");
localStorage.clear();
```

---
