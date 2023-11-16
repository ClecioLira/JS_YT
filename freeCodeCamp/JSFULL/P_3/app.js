// let age = 22;
// if (age < 21) console.log('Você não pode entrar');
// else console.log('Pode entrar');

//Seletores
let messageEl = document.querySelector('#message-el');
let cardEl = document.querySelector('#card-el');
let sumEl = document.querySelector('#sum-el');
//Variaveis de carta e soma das cartas
let firstCard = Math.floor(Math.random() * (12 + 1)) + 1;
let secondCard = Math.floor(Math.random() * (12 + 1)) + 1;
let thirdCard = Math.floor(Math.random() * (12 + 1)) + 1;
let cards = [firstCard, secondCard, thirdCard]
let sum = cards[0] + cards[1];
//Textos
let message = '';
let textoCard = 'Cards: ' + cards[0] + " " + cards[1];
let textoSum = 'Sum: ' + sum

function startGame() {
    //Condicional
    if (sum <= 20) {
        message = 'Deseja pegar mais uma carta?';
    }
    if (sum === 21) {
        message = 'Parabéns, você ganhou!';
    }
    if (sum >= 22) {
        message = 'Poxa, voce perdeu!';
    }

    //Atualização no display
    messageEl.textContent = message;
    cardEl.textContent = textoCard;
    sumEl.textContent = textoSum;
}

function newCard() {
    sum = cards[0] + cards[1] + cards[2];
    textoCard = 'Cards: ' + cards[0] + " " + cards[1] + " " + cards[2];
    textoSum = 'Sum: '+ sum;

    if (sum <= 20) {
        message = 'Quase, vamos para a próxima partida?';
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