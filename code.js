const playerChoice = document.querySelectorAll('img');
const startGame = document.getElementById('button-start');

startGame.addEventListener('click', ()=> {
    console.log("Starting game");
})

playerChoice.forEach(choice => {
    choice.addEventListener('click', ()=> {
        console.log(choice.alt);
    })
})

// const buttons = document.querySelectorAll('button');
// const div = document.querySelector('div');
// let roundCount = 0;
// let playerScore = 0;
// let computerScore = 0;


// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const playerSelection = button.id;
//         const computerSelection = getComputerChoice();
//         const result = playRound(playerSelection, computerSelection);

//         const resultElement = document.createElement('p');
//         resultElement.textContent = result;
//         div.appendChild(resultElement);

//         roundCount++;
//         gameScore();

//         if (roundCount >= 5) {
//             showWinner();
//         }
//     })
// });

// function getComputerChoice() {
//     const choices = ["rock", "paper", "scissors"];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
// }

// function playRound(playerSelection, computerSelection) {

//     const playerChoice = playerSelection;
//     const computerChoice = computerSelection;

//     if (playerChoice === computerChoice) {
//         return `Tie! Both chose ${playerChoice}`;
//     }
    
//     if (
//         (playerChoice === "rock" && computerChoice === "scissors") ||
//         (playerChoice === "scissors" && computerChoice === "paper") ||
//         (playerChoice === "paper" && computerChoice === "rock")
//     ) {
//         playerScore++;
//         return `You Win! ${playerChoice} beats ${computerChoice}.`;
//     } else {
//         computerScore++;
//         return `You Lose! ${computerChoice} beats ${playerChoice}.`;
//     }
// }

// function gameScore() {
//     const scoreElement = document.createElement('p');
//     scoreElement.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
//     div.appendChild(scoreElement);
// }

// function showWinner() {
//     let winner = "";
//     if (playerScore > computerScore) {
//         winner = "You Win!"
//     } else if (computerScore > playerScore) {
//         winner = "You Lose!"
//     } else {
//         winner = "TIE!"
//     }
//     const winnerElement = document.createElement('p');
//     winnerElement.textContent = `Game over! ${winner}`;
//     div.appendChild(winnerElement);
// }