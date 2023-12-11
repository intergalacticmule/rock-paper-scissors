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
