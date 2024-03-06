export function calculate() {
  const input = document.getElementById("input");
  const lastInput = document.getElementById("lastInput");
  let calc = input.value;

  lastInput.innerText = "Invalid input";
  input.value = "";
  let result = eval(calc);
  lastInput.innerText = calc;
  input.value = result;

  if (lastInput.innerText == input.value || input.value == "undefined") {
    lastInput.innerText = "Invalid input";
    input.value = "";
  }
  input.focus();
}
