const display = document.getElementById('display');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');
const equalsButton = document.getElementById('equals');
const numberButtons = document.querySelectorAll('.buttons button:not(#clear):not(#backspace):not(#equals)');

let currentValue = '';
let previousValue = '';
let operator = null;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '+' || button.textContent === '-' || button.textContent === '*' || button.textContent === '/') {
            previousValue = currentValue;
            currentValue = '';
            operator = button.textContent;
        } else {
            currentValue += button.textContent;
            display.value = currentValue;
        }
    });
});

clearButton.addEventListener('click', () => {
    currentValue = '';
    previousValue = '';
    operator = null;
    display.value = '';
});

backspaceButton.addEventListener('click', () => {
    currentValue = currentValue.slice(0, -1);
    display.value = currentValue;
});

equalsButton.addEventListener('click', () => {
    const result = calculate(previousValue, currentValue, operator);
    display.value = result;
    previousValue = '';
    currentValue = result;
    operator = null;
});

function calculate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return num1;
    }
}

