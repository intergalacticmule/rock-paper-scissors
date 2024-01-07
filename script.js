const buttons = document.querySelectorAll("button");
const imgContainerLeft = document.querySelector("#img-container-left");
const imgContainerRight = document.querySelector("#img-container-right");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const result = document.querySelector("#result");
const subResult = document.querySelector("#sub-result");
const restartContainer = document.querySelector("#restart");

let playerScoreCounter = 0;
let computerScoreCounter = 0;

function getComupterChoice() {
	const choices = ["rock", "paper", "scissors"];
	let computerChoice = choices[Math.floor(Math.random() * choices.length)];
	return computerChoice;
}

function setImage(parent, image) {
	if (parent.childNodes.length === 0) {
		const img = document.createElement("img");
		img.src = `images/${image}.svg`;
		parent.appendChild(img);
	} else {
		const img = parent.firstChild;
		img.src = `images/${image}.svg`;
	}
}

function determineRoundWinner(playerChoice, computerChoice) {
	if (
		(playerChoice === "rock" && computerChoice === "scissors") ||
		(playerChoice === "scissors" && computerChoice === "paper") ||
		(playerChoice === "paper" && computerChoice === "rock")
	) {
		playerScoreCounter += 1;
		return "Player";
	} else if (
		(computerChoice === "rock" && playerChoice === "scissors") ||
		(computerChoice === "scissors" && playerChoice === "paper") ||
		(computerChoice === "paper" && playerChoice === "rock")
	) {
		computerScoreCounter += 1;
		return "Computer";
	} else {
		return "tie";
	}
}

function announceRoundWinner(winner) {
	if (winner !== "tie") {
		result.textContent = `${winner} wins this round! They gain one point.`;
	} else {
		result.textContent = "Tie! No points were gained.";
	}
}

function updateScore() {
	playerScore.textContent = playerScoreCounter;
	computerScore.textContent = computerScoreCounter;
}

function announceGameWinner(winner) {
	result.textContent = `${winner} wins the game with a score of 5!`;
	subResult.textContent = "";
}

function updateFinalResult(playerScore, computerScore) {
	if (playerScore === 5) {
		announceGameWinner("Player");
	} else if (computerScore === 5) {
		announceGameWinner("Computer");
	}
}

function disableButton(button) {
	button.disabled = true;
	button.classList.remove("opaque-hover", "cursor-pointer");
	button.classList.add("opaque", "cursor-auto");
}

function showRestartButton(parent) {
	const restartButton = document.createElement("button");
	restartButton.classList.add("cursor-pointer");
	restartButton.textContent = "RESTART";
	parent.appendChild(restartButton);
}

function enableButton(button) {
	button.disabled = false;
	button.classList.remove("opaque", "cursor-auto");
	button.classList.add("opaque-hover", "cursor-pointer");
}

function restartGame(choiceButtons, restartButton) {
	choiceButtons.forEach((button) => enableButton(button));
	restartButton.remove();
	imgContainerLeft.firstChild.remove();
	imgContainerRight.firstChild.remove();
	playerScoreCounter = 0;
	playerScore.textContent = playerScoreCounter;
	computerScoreCounter = 0;
	computerScore.textContent = computerScoreCounter;
	result.textContent = "Choose your weapon";
	subResult.textContent = "First one to earn 5 points wins the game";
}

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		let playerChoice = button.id;
		let computerChoice = getComupterChoice();

		setImage(imgContainerLeft, playerChoice);
		setImage(imgContainerRight, computerChoice);
		announceRoundWinner(determineRoundWinner(playerChoice, computerChoice));
		updateScore();

		if (computerScoreCounter === 5 || playerScoreCounter === 5) {
			updateFinalResult(playerScoreCounter, computerScoreCounter);
			buttons.forEach((button) => disableButton(button));
			showRestartButton(restartContainer);
			const restartButton = restartContainer.firstChild;
			restartButton.addEventListener("click", () =>
				restartGame(buttons, restartButton)
			);
		}
	});
});
