let display = document.getElementById('display');
let expression = '';

function appendNumber(number) {
    expression += number;
    updateDisplay();
}

function appendDecimal() {
    if (expression === '' || /[+\-*/]$/.test(expression)) {
        expression += '0.';
    } else if (!expression.match(/[\d.]+$/)?.[0]?.includes('.')) {
        expression += '.';
    }
    updateDisplay();
}

function chooseOperation(op) {
    if (expression === '') return;
    if (/[+\-*/]$/.test(expression)) {
        expression = expression.slice(0, -1); 
    }
    expression += ` ${op} `;
    updateDisplay();
}

function computeResult() {
    try {
        expression = eval(expression).toString();
        updateDisplay();
    } catch (error) {
        expression = 'Error';
    }
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function updateDisplay() {
    display.value = expression;
}
