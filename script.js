// ------------JavaScript Variaables:

var x = 10; // Function scoped
let y = 20; // Block scoped
const z = 30; // Cannot be reassigned

// ------------Data Types:

Number;
String;
Boolean;
null;
undefined;
Object;
Array;
Symbol;
BigInt;

// ------------Operators:

("+ - * / %"); //Arithmetic
("== === != !=="); //Comparison
("&& || !"); //Logical

// ------------Conditions:

if (condition) {
} else if (condition) {
} else {
}

condition ? true : false;

// ------------Loops:

for (let i = 0; i < 5; i++) {}
while (condition) {}
do {} while (condition);

for (let x of Array) {
}
for (let key in Object) {
}

// ------------Functions:

function add(a, b) {
  return a + b;
}

const sum = (a, b) => a + b;

// ------------Arrays:

let arr = [1, 2, 3];

arr.push();
arr.pop();
arr.shift();
arr.unshift();
arr.map();
arr.filter();
arr.reduce();
arr.find();

// ------------Objects:

let user = {
  name: "Rudra",
  age: 19,
};

user.name;
user["age"];

// ------------String Methods:

str.length;
str.toUpperCase();
str.toLowerCase();
str.trim();
str.includes();
str.replace();
str.split();

// ------------Math & Data:

Math.random();
Math.floor();
Math.ceil();
Math.max();
Math.min();

new Date();
Date.now();

// ------------DOM Selectors:

document.getElementById();
document.getElementsByClassName();
document.querySelector();
document.querySelectorAll();

// ------------DOM Events:

click;
mouseover;
keydown;
submit;
load;

btn.addEventListener("click", () => {});

// ------------ES6 Features:

("let/const");
("arrow function");
("template literals");
("destructuring");
("spread operator");
("modules (import/export)");

// ------------Promises & Async:

new Promise((resolve, reject) => {});

async function fetchData() {
  await fetch(URL);
}

// ------------Error Handling:

try {
} catch (error) {
} finally {
}

// ------------Local Storage:

localStorage.setItem("key", value);
localStorage.getItem("key");
localStorage.removeItem("key");
localStorage.clear();
