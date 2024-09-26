let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.random();

    if (computerChoice < 0.33) {
        computerChoice = "Rock";
    } else if (computerChoice >= 0.33 && computerChoice <= 0.66) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Type your choice: R (Rock), P (Paper) or S (Scissors)").toUpperCase();

    while (humanChoice !== "R" && humanChoice !== "P" && humanChoice !== "S") {
        humanChoice = prompt("Invalid choice. Please type: R (Rock), P (Paper) or S (Scissors)").toUpperCase();
    }

    if (humanChoice == "R") {
        humanChoice = "Rock";
    } else if (humanChoice == "S") {
        humanChoice = "Scissors";
    } else if (humanChoice == "P") {
        humanChoice = "Paper";
    }

    return humanChoice;
}

function getWinner() {
    let computer = getComputerChoice();
    let human = getHumanChoice();

    console.log("Your choice was: " + human);
    console.log("Computer's choice was: " + computer);

    if (human == "Rock" && computer == "Scissors") {
        console.log("You won!");
        humanScore++;
    } else if (human == "Rock" && computer == "Paper") {
        console.log("You lost.");
        computerScore++;
    } else if (human == "Paper" && computer == "Scissors") {
        console.log("You lost.");
        computerScore++;
    } else if (human == "Paper" && computer == "Rock") {
        console.log("You won!");
        humanScore++;
    } else if (human == "Scissors" && computer == "Rock") {
        console.log("You lost.");
        computerScore++;
    } else if (human == "Scissors" && computer == "Paper") {
        console.log("You won!");
        humanScore++;
    } else if (human == computer) {
        console.log("It's a tie!");
    }

    //console.log("Current Score: Player " + humanScore + " - " + computerScore + " Computer");
}

function playGame() {
    let playAgain = true;

    while (playAgain) {
        getWinner();
        console.log("Current Score: Player " + humanScore + " - " + computerScore + " Computer");
    }

}