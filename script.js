const buttons = document.querySelectorAll("button");
const imgContainerLeft = document.querySelector("#img-container-left");
const imgContainerRight = document.querySelector("#img-container-right");

const choices = ["rock", "paper", "scissors"];
let score = [0, 0];

function getComupterChoice() {
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

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		let playerChoice = button.id;
		let computerChoice = getComupterChoice();

		setImage(imgContainerLeft, playerChoice);
		setImage(imgContainerRight, computerChoice);
	});
});
