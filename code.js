// La computadora debe elegir entre tres desiciones: papel, roca y tijera que son strings
// la funcion de elegir retornara el string de manera aleatoria

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {

    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice) {
        return `Tie! Both chose ${playerChoice}`;
    }
    
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        return `You Win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        return `You Lose! ${computerChoice} beats ${playerChoice}.`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt("Enter your choice (Rock/Paper/Scissors):");
        const computerSelection = getComputerChoice();

        console.log(`Round ${round}:`);
        console.log(`Player chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("Win!")) {
            playerScore++;
        } else if (result.includes("Lose!")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! you beat the computer.");
    } else if (playerScore < computerScore) {
        console.log("Bad luck! The computer kick your ass");
    } else {
        console.log("Tie!");
    }

    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
}

game()