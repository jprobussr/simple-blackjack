let messageEl = document.getElementById('message-el');
let cardEl = document.getElementById('card-el');
let sumEl = document.getElementById('sum-el');
let playerEl = document.getElementById('player-el');

let player = {
  name: 'John',
  chips: 100,
};

let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = '';

playerEl.textContent = `${player.name}: $${player.chips}`;

const getRandomCard = () => {
  return Math.floor(Math.random() * 10) + 2;
};

const startGame = () => {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
};

document.getElementById('start-game').addEventListener('click', startGame);

const renderGame = () => {
  cardEl.textContent = `Cards: ${cards.join(' ')}`;
  sumEl.textContent = `Sum: ${sum}`;

  if (sum <= 20) {
    message = 'Do you want to draw a card? 🤔';
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackjack = true;
  } else {
    message = "You're out of the Game! 😞";
    isAlive = false;
  }

  messageEl.textContent = message;
};

const newCard = () => {
  if (isAlive && !hasBlackjack) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
  }
};

document.getElementById('new-card').addEventListener('click', newCard);
