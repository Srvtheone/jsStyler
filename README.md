#JS Styler

Setup

---

Just include the above file on top of all the scripts and that's all!

Usage

---

You can call 'setStyle()' function on any element and pass normal CSS code in the argument to set the style.

document.getElementById('target').setStyle('color: red;');

If you have multiple properties to set at the same time, just use ``(Tempalate Literals).

let style = `color: #fff; background-color: black; border-radius: 1rem; animation-fill-mode: none; padding: 20px;`;

document.getElementById('target').setStyle(style);

Note: Always remember to seperate different declarations by semicolon(;).
