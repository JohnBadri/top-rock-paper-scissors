function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let choice;
  switch (randomNumber) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "raper";
      break;
    case 3:
      choice = "scissors";
  }
  return choice;
}

function getPlayerChoice() {
  let playerChoice = prompt(
    "choose your fate, I mean rock, paper or scissors?"
  );
  return playerChoice.toLowerCase();
}

function game(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a draw!");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    console.log("You win!");
  } else {
    console.log("You lose!");
  }
}

for (i = 0; i < 5; i++) {
  game(getPlayerChoice(), getComputerChoice());
}
