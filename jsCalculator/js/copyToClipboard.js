export function copyToClipboard() {
  const input = document.getElementById("input");
  const copyBtn = document.getElementById("copyToClipboard");
  const lastInput = document.getElementById("lastInput");
  const toCopy = input.value;

  if (
    copyBtn.innerText === "Copy" &&
    lastInput.innerText !== "Invalid input" &&
    input.value !== ""
  ) {
    copyBtn.innerText = "Copied!";
    navigator.clipboard.writeText(toCopy);
  } else {
    copyBtn.innerText = "Copy";
  }
  input.focus();
}
