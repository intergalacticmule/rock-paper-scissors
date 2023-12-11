const choices = ["rock", "paper", "scissors"];

function getComupterChoice() {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(
    `Computer choice: ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }`
  );
  return computerChoice;
}

function checkPlayerChoiceValidity(choice) {
  if (choices.includes(String(choice.toLowerCase()))) {
    return true;
  }
  return false;
}

function getPlayerChoice() {
  let playerChoice;
  while (
    !checkPlayerChoiceValidity(
      (playerChoice = prompt("Please enter your choice."))
    )
  ) {
    alert(
      'Your choice can only be "Rock", "Paper", or "Scissors". Letter case does not matter.'
    );
  }
  console.log(
    `Player choice: ${
      playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
    }`
  );
  return playerChoice.toLowerCase();
}
