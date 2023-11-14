let num1 = 8;
let num2 = 2;
document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;
let sum = document.getElementById('sum-el');

function add() {
    let soma = num1 + num2;
    let message = 'Sum: ' + soma;
    sum.textContent = message;
}

function subtract() {
    let sub = num1 - num2;
    let message = 'Sum:' + sub;
    sum.textContent = message;
}

function divide() {
    let div = num1 / num2;
    let message = 'Sum:' + div;
    sum.textContent = message;
}

function multiply() {
    let multi = num1 * num2;
    let message = 'Sum:' + multi;
    sum.textContent = message;
}
