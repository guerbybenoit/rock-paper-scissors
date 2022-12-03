let player;
let computer;
let scorePlayer = 0;
let scoreComputer = 0;
let round = 0;
let message;

function getPlayerChoice() {
    let choice = prompt("Entrer votre choix: ");
    return choice;
}

function getComputerChoice() {
    const myArray = ["Rock", "Paper", "Scissors"];
    return myArray[Math.floor(Math.random() * myArray.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        scorePlayer++;
    }
    if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        scorePlayer++;
    }
    if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        scorePlayer++;
    }
    if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        scoreComputer++;
    }
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        scoreComputer++;
    }
    if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        scoreComputer++;
    }

    round++;

    if (scorePlayer > scoreComputer) {
        message = "Player win !";
    } else if (scoreComputer > scorePlayer) {
        message = "Computer win !";
    } else {
        message = "Match null !";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        player = getPlayerChoice();
        computer = getComputerChoice();
        playRound(player, computer);

        console.log("\n=======================");
        console.log("Round: ", round);

        console.log("Player: ", player);
        console.log("Computer: ", computer);

        console.log("Score Player: ", scorePlayer);
        console.log("Score Computer: ", scoreComputer);
    }

    console.log(message);
}

console.log(game());