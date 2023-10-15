const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    game(button.className, getComputerChoice());
  });
});

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let choice;
  switch (randomNumber) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
  }
  return choice;
}

function game(playerSelection, computerSelection) {
  const result = document.querySelector('.rpsResult');
  if (playerSelection === computerSelection) {
    result.textContent = `pssh, it's a draw!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    result.textContent = 'Ye, ye, you won.';
  } else {
    result.textContent = 'lol, you LOST!';
  }
}