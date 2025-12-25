const inputPrimary = document.querySelector(".enter-number__primary");
const inputSecondary = document.querySelector(".enter-number__secondary");
const inputResult = document.querySelector(".input-result");
const operatorButtons = document.querySelectorAll(".op-btn");
const equalsBtn = document.querySelector(".op-btn__equals");

let currentOperator = null;

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        currentOperator = button.textContent;
    });
});
equalsBtn.addEventListener("click", () => {
    const a = parseFloat(inputPrimary.value);
    const b = parseFloat(inputSecondary.value);
    if (isNaN(a) || isNaN(b)) {
        inputResult.value = "Помилка";
        return;
    }
    let result;
    switch (currentOperator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            if (b === 0) {
                inputResult.value = "Error";
                return;
            }
            result = a / b;
            break;
        default:
            inputResult.value = "Оберіть дію";
            return;
    }
    inputResult.value = result;
});
inputResult.readOnly = true;
operatorButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        operatorButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentOperator = btn.textContent;
    });
});
