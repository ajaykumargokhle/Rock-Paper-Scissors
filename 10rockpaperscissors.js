const score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 }; // Retrieve the stored score or initialize

function playGame(playerMove) {
  const moves = ['rock', 'paper', 'scissors'];
  const computerMove = moves[Math.floor(Math.random() * moves.length)];
  let result = '';

  if (playerMove === computerMove) {
    result = "It's a tie!";
    score.ties++;
  } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    result = 'You win!';
    score.wins++;
  } else {
    result = 'You lose!';
    score.losses++;
  }

  updateResult(result);
  updateScoreElement();
  localStorage.setItem('score', JSON.stringify(score)); // Store the updated score
}

function updateResult(result) {
  const resultElement = document.querySelector('.js-result');
  resultElement.textContent = result;
}

function updateScoreElement() {
  const scoreElement = document.querySelector('.js-score');
  scoreElement.textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function resetGame() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score'); // Remove the stored score
  updateScoreElement();
  document.querySelector('.js-result').textContent = ''; // Clear the result text
}

// Initialize the score display when the page loads
updateScoreElement();
