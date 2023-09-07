const buttonStartGame = document.getElementById('button-start');
const displayGame = document.getElementById("gameBoard");
let elementContainer = 0

buttonStartGame.addEventListener('click', ()=> {
    if (elementContainer >= 1) {
        alert("You're Playing");
    } else {
        displayGame.classList.remove('none');
        elementContainer++;
    }
});