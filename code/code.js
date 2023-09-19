const playerChoice = document.querySelectorAll('#playerChoice');
const span = document.getElementById('winner');

let roundCount = 0;
let playerScore = 0;
let computerScore = 0;
let totalRounds = 0;

// document.getElementById('gameBoard').classList.add('none');

playerChoice.forEach(choice => {
    choice.addEventListener('click', ()=> {
        if (totalRounds === 0) {span.textContent = `Submit a Round!`;}
        if (totalRounds > 0) {
            let playerSelection = (choice.alt).toLowerCase();
            let computerSelection = getComputerChoice();
            const result = playRound(playerSelection, computerSelection);

            showScore();
            roundCount++;

            if (roundCount >= totalRounds) {
                showWinner();
                resetGame();
            }
        }
    }
)});

function getComputerChoice() {
    let choicesComputer = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * choicesComputer.length);
    return choicesComputer[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock')) {
        playerScore++;
    } else if (playerSelection === computerSelection) {
    } else {
        computerScore++;
    }
};

function showScore() {
    const totalScore = document.querySelectorAll('#score');

    span.textContent = `Round: ${roundCount + 1}`;
    totalScore[0].textContent = `Score:${playerScore}`;
    totalScore[1].textContent = `Score:${computerScore}`;
}

function roundsToPlay(input) {
    totalRounds = input;
    console.log(totalRounds)
}

function showWinner() {
    if (playerScore > computerScore) {
        span.textContent = `You Win!`;
    } else if (computerScore > playerScore) {
        span.textContent = `You Lose!`;
    } else {
        span.textContent = `Tie!`;
    }
}

const displayGame = document.getElementById("gameBoard");

const resetGame = () => {
    displayGame.classList.add('none');
    alert("Thanks for Playing!");
    setTimeout(() => {
        document.body.addEventListener('click', ()=>{ location.reload()}); 
    }, 2);
}