import { colorsArray } from "./colorsArray.js";

let index = 0;

export function switchTheme() {
  const currentTheme = colorsArray[index];

  const header = document.getElementById("header");
  header.style.backgroundColor = currentTheme.principalColor;
  header.style.color = currentTheme.secondaryColor;

  const majorContainer = document.getElementById("majorContainer");
  majorContainer.style.backgroundColor = currentTheme.secondaryColor;

  const calcContainer = document.getElementById("calcContainer");
  calcContainer.style.backgroundColor = currentTheme.principalColor;

  const lastInput = document.getElementById("lastInput");
  lastInput.style.color = currentTheme.secondaryColor;

  const input = document.getElementById("input");
  input.style.backgroundColor = currentTheme.secondaryColor;

  const clearBtn = document.getElementById("clearBtn");
  clearBtn.style.backgroundColor = currentTheme.principalColor;
  clearBtn.style.borderColor = currentTheme.principalColor;
  clearBtn.style.color = currentTheme.secondaryColor;
  clearBtn.addEventListener("mouseenter", function () {
    this.style.borderColor = currentTheme.secondaryColor;
    this.style.backgroundColor = currentTheme.secondaryColor;
    this.style.color = currentTheme.principalColor;
  });
  clearBtn.addEventListener("mouseleave", function () {
    this.style.borderColor = currentTheme.principalColor;
    this.style.backgroundColor = currentTheme.principalColor;
    this.style.color = currentTheme.secondaryColor;
  });

  const charkeys = document.querySelectorAll(".charKeyBtn");
  charkeys.forEach((key) => {
    key.style.backgroundColor = currentTheme.principalColor;
    key.style.borderColor = currentTheme.principalColor;
    key.style.color = currentTheme.secondaryColor;
    key.addEventListener("mouseenter", function () {
      this.style.borderColor = currentTheme.secondaryColor;
      this.style.backgroundColor = currentTheme.secondaryColor;
      this.style.color = currentTheme.principalColor;
    });
    key.addEventListener("mouseleave", function () {
      this.style.borderColor = currentTheme.principalColor;
      this.style.backgroundColor = currentTheme.principalColor;
      this.style.color = currentTheme.secondaryColor;
    });
  });

  const equalBtn = document.getElementById("equalBtn");
  equalBtn.style.backgroundColor = currentTheme.principalColor;
  equalBtn.style.borderColor = currentTheme.principalColor;
  equalBtn.style.color = currentTheme.secondaryColor;
  equalBtn.addEventListener("mouseenter", function () {
    this.style.borderColor = currentTheme.secondaryColor;
    this.style.backgroundColor = currentTheme.secondaryColor;
    this.style.color = currentTheme.principalColor;
  });
  equalBtn.addEventListener("mouseleave", function () {
    this.style.borderColor = currentTheme.principalColor;
    this.style.backgroundColor = currentTheme.principalColor;
    this.style.color = currentTheme.secondaryColor;
  });

  const copyBtn = document.getElementById("copyToClipboard");
  copyBtn.style.borderColor = currentTheme.principalColor;
  copyBtn.style.backgroundColor = currentTheme.principalColor;
  copyBtn.style.color = currentTheme.secondaryColor;
  copyBtn.addEventListener("mouseenter", function () {
    this.style.borderColor = currentTheme.secondaryColor;
  });
  copyBtn.addEventListener("mouseleave", function () {
    this.style.borderColor = currentTheme.principalColor;
  });

  const themeBtn = document.getElementById("themeSwitcher");
  themeBtn.style.borderColor = currentTheme.principalColor;
  themeBtn.style.backgroundColor = currentTheme.principalColor;
  themeBtn.style.color = currentTheme.secondaryColor;
  themeBtn.addEventListener("mouseenter", function () {
    this.style.borderColor = currentTheme.secondaryColor;
  });
  themeBtn.addEventListener("mouseleave", function () {
    this.style.borderColor = currentTheme.principalColor;
  });

  index++;

  if (index === colorsArray.length) {
    index = 0;
  }

  input.focus();
  lastInput.innerText = "";
}
