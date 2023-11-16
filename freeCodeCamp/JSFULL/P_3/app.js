// let age = 22;
// if (age < 21) console.log('Você não pode entrar');
// else console.log('Pode entrar');

let messageEl = document.querySelector('#message-el');
let cardEl = document.querySelector('#card-el');
let sumEl = document.querySelector('#sum-el');
let firstCard = 10;
let secondCard = 11;
let textoCard = 'Card: ' + firstCard + " " + secondCard;
let sum = firstCard + secondCard;
let textoSum = 'Sum: ' + sum
let message = '';


function startGame() {
    if (sum <= 20) {
        message = 'Quase, vamos para a próxima?';
    }
    if (sum === 21) {
        message = 'Parabéns, você ganhou!';
    }
    if (sum >= 22) {
        message = 'Poxa, voce perdeu!';
    }
    messageEl.textContent = message;
    cardEl.textContent = textoCard;
    sumEl.textContent = textoSum;
}