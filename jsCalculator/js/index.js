import { calculate } from "./calculate.js";
import { copyToClipboard } from "./copyToClipboard.js";
import { charKeyClick, clearBtn, charKeyTyping } from "./handleCharKeys.js";
import { switchTheme } from "./switchTheme.js";

const input = document.getElementById("input");
let charKeys = document.querySelectorAll(".charKeyBtn");
const clear = document.getElementById("clearBtn");
const equal = document.getElementById("equalBtn");
const copyBtn = document.getElementById("copyToClipboard");
const themeBtn = document.getElementById("themeSwitcher");

charKeys.forEach(function (key) {
  key.addEventListener("click", charKeyClick);
});

clear.addEventListener("click", clearBtn);

input.addEventListener("paste", function (ev) {
  ev.preventDefault();
});

input.setAttribute("autocomplete", "off");

input.addEventListener("keydown", charKeyTyping);

equal.addEventListener("click", calculate);

copyBtn.addEventListener("click", copyToClipboard);

themeBtn.addEventListener("click", switchTheme);
