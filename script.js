let coins = 0;
let clickValue = 1;
const coinsDisplay = document.getElementById('coins');
const clickButton = document.getElementById('clicker');
const buyBoxButton = document.getElementById('buy-box');

coinsDisplay.textContent = `Coins: ${coins}`;

clickButton.addEventListener('click', () => {
  coins += clickValue;
  coinsDisplay.textContent = `Coins: ${coins}`;
  updateBoxStatus();
});

buyBoxButton.addEventListener('click', () => {
  coins -= 5;
  coinsDisplay.textContent = `Coins: ${coins}`;
  openMysteryBox();
  updateBoxStatus();
});

function updateBoxStatus() {
  buyBoxButton.disabled = coins < 5;
}

function openMysteryBox() {
  // Simplified reward logic (replace with your desired probabilities)
  const randomNum = Math.random();
  if (randomNum < 0.5) {
    coins += 2;
    alert("You won 2 coins!");
  } else if (randomNum < 0.8) {
    coins += 5;
    alert("You won 5 coins!");
  } else {
    coins += 10; 
    alert("You won 10 coins!");
  }
}

updateBoxStatus();
