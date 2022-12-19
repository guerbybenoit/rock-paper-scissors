let player;
let computer;
let scorePlayer = 0;
let scoreComputer = 0;
let round = 0;
let message;
let colorBack = 'green';

//On each call, this function returns a choice among "Rock", "Paper" or "Scissors".
function getComputerChoice() {
    const myArray = ["Rock", "Paper", "Scissors"];
    return myArray[Math.floor(Math.random() * myArray.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        scorePlayer++;
        colorBack = 'green';
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        scorePlayer++;
        colorBack = 'green';
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        scorePlayer++;
        colorBack = 'green';
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        scoreComputer++;
        colorBack = 'red';
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        scoreComputer++;
        colorBack = 'red';
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        scoreComputer++;
        colorBack = 'red';
    } else {
        colorBack = 'orange';
    }

    round++;

    if (scorePlayer >= 5) {
        message = "Player win !";
    } else if (scoreComputer >= 5) {
        message = "Computer win !";
    }

    return colorBack;
}

function showResult() {

    //Get the div to display the result
    const divResult = document.querySelector('.div-result');

    //Create a div to display the result of each round
    const divRound = document.createElement('div');
    divRound.classList.add('div-round');
    divRound.style.backgroundColor = colorBack;

    //Create a h2 to display the number of each round
    const showRound = document.createElement('h2');
    showRound.textContent = `Round: ${round}`;
    showRound.style.textAlign = 'center';
    showRound.style.textDecoration = 'underline';
    showRound.style.fontWeight = 'bold';
    showRound.style.fontSize = '30px';

    //Create a p to display the player's choice
    const showPlayerChoice = document.createElement('p');
    showPlayerChoice.textContent = `Player Choice: ${player}`

    //Create a p to display the computer's choice
    const showComputerChoice = document.createElement('p');
    showComputerChoice.textContent = `Computer Choice: ${computer}`;

    //Create a p to display the player's score
    const showPlayerScore = document.createElement('p');
    showPlayerScore.textContent = `Player Score: ${scorePlayer}`;

    //Create a p to display the computer's score
    const showComputerScore = document.createElement('p');
    showComputerScore.textContent = `Computer Score: ${scoreComputer}`;

    //Get the p to display the winner
    const showMessage = document.querySelector('.message');
    showMessage.textContent = message;

    //Add all in the divRound
    divRound.appendChild(showRound);
    divRound.appendChild(showPlayerChoice);
    divRound.appendChild(showComputerChoice);
    divRound.appendChild(showPlayerScore);
    divRound.appendChild(showComputerScore);

    //Add divRound in the divResult
    divResult.appendChild(divRound);
}

function game() {
    const audioWin = document.querySelector('.win');
    const audioFall = document.querySelector('.fall');

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', function (e) {
            if (scorePlayer < 5 && scoreComputer < 5) {
                player = button.value;
                computer = getComputerChoice();
                if (playRound(player, computer) === 'green') {
                    audioWin.currentTime = 0;
                    audioWin.play();
                } else {
                    audioFall.currentTime = 0;
                    audioFall.play();
                }

                showResult();
            } else {
                if (confirm("Do you want to play again ?")) {
                    window.location.reload();
                }
            }
        });
    });
}

game();