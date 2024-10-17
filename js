const screen = document.getElementById('screen');
const keys = document.querySelector('.calculator-keys');
let currentInput = '';
let operator = null;
let previousInput = '';

keys.addEventListener('click', (e) => {
    const { target } = e;
    const value = target.value;

    if (!target.matches('button')) {
        return;
    }

    switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
            operator = value;
            previousInput = currentInput;
            currentInput = '';
            break;
        case '=':
            if (operator && previousInput !== '') {
                currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                operator = null;
                previousInput = '';
            }
            break;
        case 'all-clear':
            currentInput = '';
            operator = null;
            previousInput = '';
            break;
        default:
            currentInput += value;
            break;
    }

    screen.value = currentInput;
});
