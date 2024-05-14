let displayValue = "0";

function updateDisplay() {
  document.getElementById("display").innerText = displayValue;
}

function clearDisplay() {
  displayValue = "0";
  updateDisplay();
}

function appendInput(input) {
  if (displayValue === "0") {
    displayValue = input;
  } else {
    displayValue += input;
  }
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = "Error";
  }
  updateDisplay();
}

// Add event listeners to number and operator buttons
document.querySelectorAll(".calculator button").forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;
    if (buttonText === "=") {
      calculate();
    } else {
      appendInput(buttonText);
    }
  });
});
