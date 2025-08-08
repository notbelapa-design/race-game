const startBtn = document.getElementById('start-btn');
const progressBar = document.getElementById('progress-bar');
const timerSpan = document.getElementById('timer');
const winsSpan = document.getElementById('wins');
const tokensSpan = document.getElementById('tokens');

let gameActive = false;
let progress = 0;
let timeLeft = 10;
let wins = 0;
let tokens = 0;
let timerInterval;

function startRace() {
  if (gameActive) return;
  gameActive = true;
  progress = 0;
  timeLeft = 10;
  progressBar.style.width = '0%';
  timerSpan.textContent = 'Time left: ' + timeLeft;
  
  timerInterval = setInterval(() => {
    timeLeft--;
    timerSpan.textContent = 'Time left: ' + timeLeft;
    if (timeLeft <= 0) {
      endRace(false);
    }
  }, 1000);
}

function endRace(win) {
  clearInterval(timerInterval);
  gameActive = false;
  if (win) {
    wins++;
    tokens += 0.01;
    alert('You reached the finish line! You earned 0.01 token.');
  } else {
    alert('Time up! You lost this race.');
  }
  winsSpan.textContent = 'Wins: ' + wins;
  tokensSpan.textContent = 'Tokens: ' + tokens.toFixed(2);
}

document.addEventListener('keydown', (event) => {
  if (!gameActive) return;
  if (event.code === 'Space') {
    event.preventDefault();
    progress += 2;
    if (progress >= 100) {
      progress = 100;
      progressBar.style.width = progress + '%';
      endRace(true);
    } else {
      progressBar.style.width = progress + '%';
    }
  }
});

startBtn.addEventListener('click', startRace);
