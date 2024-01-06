// const choices = ["rock", "paper", "scissors"];
// let score = [0, 0];

// function announceChoice(party, choice) {
//   console.log(
//     `${party} choice: ${choice.charAt(0).toUpperCase() + choice.slice(1)}`
//   );
// }
// function getComupterChoice() {
//   let computerChoice = choices[Math.floor(Math.random() * choices.length)];
//   announceChoice("Computer", computerChoice);
//   return computerChoice;
// }

// function validatePlayerChoice(choice) {
//   if (choices.includes(String(choice.toLowerCase()))) {
//     return true;
//   }
//   return false;
// }

// function getPlayerChoice() {
//   let playerChoice;
//   while (
//     !validatePlayerChoice((playerChoice = prompt("Please enter your choice.")))
//   ) {
//     alert(
//       'Your choice can only be "Rock", "Paper", or "Scissors". Letter case does not matter.'
//     );
//   }
//   announceChoice("Player", playerChoice);
//   return playerChoice.toLowerCase();
// }

// function incrementScore(computerScore, playerScore) {
//   score[0] += computerScore;
//   score[1] += playerScore;
// }

// function announceRound(round) {
//   console.log(`Round ${round}:`);
// }

// function announceResult(round, winner, computerScore, playerScore) {
//   if (winner == "draw") {
//     console.log(
//       `Round ${round} result - Draw! Current score: Computer - ${computerScore}, Player - ${playerScore}`
//     );
//   } else if (winner == "player") {
//     console.log(
//       `Round ${round} result - Player wins! Current score: Computer - ${computerScore}, Player - ${playerScore}`
//     );
//   } else if (winner == "computer") {
//     console.log(
//       `Round ${round} result - Player wins! Current score: Computer - ${computerScore}, Player - ${playerScore}`
//     );
//   }
// }

// function playRound(computerChoice, playerChoice, round) {
//   if (computerChoice == playerChoice) {
//     incrementScore(1, 1);
//     announceResult(round, "draw", score[0], score[1]);
//   } else {
//     if (computerChoice == choices[0]) {
//       if (playerChoice == choices[1]) {
//         incrementScore(0, 1);
//         announceResult(round, "player", score[0], score[1]);
//       } else if (playerChoice == choices[2]) {
//         incrementScore(1, 0);
//         announceResult(round, "computer", score[0], score[1]);
//       }
//     } else if (computerChoice == choices[1]) {
//       if (playerChoice == choices[0]) {
//         incrementScore(1, 0);
//         announceResult(round, "computer", score[0], score[1]);
//       } else if (playerChoice == choices[2]) {
//         incrementScore(0, 1);
//         announceResult(round, "player", score[0], score[1]);
//       }
//     } else if (computerChoice == choices[2]) {
//       if (playerChoice == choices[0]) {
//         incrementScore(0, 1);
//         announceResult(round, "player", score[0], score[1]);
//       } else if (playerChoice == choices[1]) {
//         incrementScore(1, 0);
//         announceResult(round, "computer", score[0], score[1]);
//       }
//     }
//   }
// }

// function announceWinner(computerScore, playerScore) {
//   console.log("Calculating final score...");
//   if (computerScore > playerScore) {
//     console.log(
//       `Computer wins! Final score: Computer - ${computerScore}, Player - ${playerScore}`
//     );
//   } else if (computerScore < playerScore) {
//     console.log(
//       `Player wins! Final score: Computer - ${computerScore}, Player - ${playerScore}`
//     );
//   } else {
//     console.log(
//       `Draw! Final score: Computer - ${computerScore}, Player - ${playerScore}`
//     );
//   }
// }

// function game() {
//   let i = 0;
//   while (true) {
//     i++;
//     if (score[0] == 5 || score[1] == 5) {
//       break;
//     } else {
//       announceRound(i);
//       playRound(getComupterChoice(), getPlayerChoice(), i);
//     }
//   }
//   announceWinner(score[0], score[1]);
// }

// game();
