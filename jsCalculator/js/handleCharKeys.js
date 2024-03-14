import { allowedKeys } from "./allowedKeys.js";
import { calculate } from "./calculate.js";
const input = document.getElementById("input");
const lastInput = document.getElementById("lastInput");
const copyBtn = document.getElementById("copyToClipboard");

export function charKeyClick(ev) {
  ev.preventDefault();
  if ((lastInput.innerText = "Invalid input")) {
    lastInput.innerText = "";
  }
  input.value += ev.currentTarget.dataset.value;
  copyBtn.innerText = "Copy";
}

export function clearBtn() {
  (lastInput.innerText = ""), (input.value = "");
  input.focus();
  copyBtn.innerText = "Copy";
}

export function charKeyTyping(ev) {
  ev.preventDefault();
  copyBtn.innerText = "Copy";

  if ((lastInput.innerText = "Invalid input")) {
    lastInput.innerText = "";
  }
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
  } else if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  } else if (ev.key === "Enter") {
    calculate();
  }
}
