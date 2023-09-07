const buttonStartGame = document.getElementById('button-start');
const buttonRestartGame = document.getElementById('button-restart');
const displayGame = document.getElementById("gameBoard");
let elementContainer = 0

buttonStartGame.addEventListener('click', ()=> {
    if (elementContainer >= 1) {
        alert("You're playing");
    } else {
        displayGame.classList.remove('none');
        elementContainer++;
    }
});

buttonRestartGame.addEventListener('click', ()=> {
    if (elementContainer === 1) {
        displayGame.classList.add('none');
        elementContainer--;
    }
});