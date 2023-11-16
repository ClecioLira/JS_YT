
//Seletores
let messageEl = document.querySelector('#message-el');
let cardEl = document.querySelector('#card-el');
let sumEl = document.querySelector('#sum-el');
let playerEl = document.getElementById('player-el');

//Variaveis de carta e soma das cartas
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let thirdCard = getRandomCard()
let cards = [firstCard, secondCard, thirdCard]
let sum = cards[0] + cards[1];
let hasBlackJack = false;

//Textos
let message = '';
let textoCard = 'Cards: ' + cards[0] + " " + cards[1];
let textoSum = 'Sum: ' + sum

let player = {
    name: 'Clécio',
    chips: 145
}
playerEl.textContent = player.name + ": R$" + player.chips;
playerEl.style.textAlign = 'center';

function getRandomCard() {
    let num = Math.floor(Math.random() * 13 + 1);
    if (num > 10) return 10;
    if (num === 1) return 11;
    return num;
}

function startGame() {
    //Condicional
    if (sum <= 20) {
        message = 'Deseja pegar mais uma carta?';
    }
    if (sum === 21) {
        message = 'Parabéns, você ganhou!';
        hasBlackJack = true;
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
    textoCard = 'Cards: ';
    for (let i = 0; i < cards.length; i++) {
        textoCard += cards[i] + " ";
    }
    textoSum = 'Sum: '+ sum;

    if (sum <= 20) {
        message = 'Quase, vamos para a próxima partida?';
    }
    if (sum === 21) {
        message = 'Parabéns, você ganhou!';
    }
    if (sum > 21) {
        message = 'Poxa, voce perdeu!';
    }

    messageEl.textContent = message;
    cardEl.textContent = textoCard;
    sumEl.textContent = textoSum;
}
