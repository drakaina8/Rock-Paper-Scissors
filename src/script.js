// Global Variables
let playerSelection;
let compSelection;

function initializeGame() {
    document.querySelector("#game-start")
        .addEventListener("click", () => {
            document.querySelector("#game-start").style.display = "none";
            document.querySelector("#play-hand").style.display = "block";
            playRound();
            this.removeEventListener('click', arguments.callee)
        })
}

// For hand icons eventListeners
function actionIcon(e) {
    if (playerSelection !== undefined) {
        playerSelection.style.color = "#FFFFFF";
    }
    playerSelection = e.target;
    e.target.style.color = "#FE00B7";
}

// For play-hand btn eventListener
function actionPlayHand(e) {
    document.querySelector("#play-hand").style.display = "none";
    const choices = document.querySelectorAll('.choices');

    choices.forEach((choice, i, arr) => {
        choice.removeEventListener('click', actionIcon);
    });
    gameLogic();
    restartGame();
}

// User selects a hand and the play hand button becomes available.
function playRound() {
    const choices = document.querySelectorAll('.choices');
    choices.forEach((choice, i, arr) => {
        choice.addEventListener('click', actionIcon); 
    });
            
    // Once the play-hand button is pressed, icon eventlisteners are removed
    document.querySelector("#play-hand").addEventListener("click", actionPlayHand);
}

function computerChoice() {
    if (compSelection !== undefined) {
        compSelection.style.color = "#FFFFFF";
    }
    let randomNum = Math.floor(Math.random() * 3);
    switch(randomNum) {
        case 0:
            compSelection = document.querySelector("i.fa-regular.fa-hand-back-fist");
            break;
        case 1:
            compSelection = document.querySelector("i.fa-regular.fa-hand");
            break;
        case 2:
            compSelection = document.querySelector("i.fa-regular.fa-hand-scissors");
            break;
        }
        compSelection.style.color = "#D2FFAF";
}
            
function gameLogic() {    
    computerChoice();
    let gameResultsText;
    let winOrLoseText;
    if (playerSelection.isSameNode(compSelection) && playerSelection !== undefined) { // Round Tied
        document.getElementById("hand-results").textContent = "Draw!";
        document.getElementById("win-results").textContent = "";
        playerSelection.classList.add("tied-game"); // TODO issue?
        return;

    } else if (playerSelection.className.includes("fist")) { 
        if (compSelection.className.includes("scissors")) { // User: rock, Comp: scissors
            gameResultsText = "Rock Crushes Scissors";
            winOrLoseText = "You Win!";
        } else { // User: rock, Comp: paper
            gameResultsText = "Paper Covers Rock";
            winOrLoseText = "You Lose!";
        }
        
    } else if (playerSelection.className.includes("scissors")) {
        if (compSelection.className.includes("fist")) { // User: scissors, Comp: rock
            gameResultsText = "Rock Crushes Scissors";
            winOrLoseText = "You Lose!";
        } else { // User: scissors, Comp: paper
            gameResultsText = "Scissors Cuts Paper";
            winOrLoseText = "You Win!";
        }
        
    } else {
        if (compSelection.className.includes("fist")) { // User: paper, Comp: rock
            gameResultsText = "Paper Covers Rock";
            winOrLoseText = "You Win!";
        } else { // User: paper, Comp: Scissors
            gameResultsText = "Scissors Cuts Paper";
            winOrLoseText = "You Lose!";
        }
    }
    updateGameText(gameResultsText, winOrLoseText);
}

function updateGameText(gameResultsText, winOrLoseText) {
    document.getElementById("hand-results").textContent = gameResultsText + ", ";
    document.getElementById("win-results").textContent = winOrLoseText;
    if (winOrLoseText.includes("Win")) {
        document.getElementById("win-results").style.color = "#FE00B7";
    } else if (winOrLoseText.includes("Lose")) {
        document.getElementById("win-results").style.color = "#D2FFAF";
    } 
}

function restartGame() {
    document.querySelector("#play-again").style.display = "block";
    document.querySelector("#play-again").addEventListener('click', () => {
        this.removeEventListener('click', arguments.callee)
        // Reset global variables and page styles
        playerSelection = undefined;
        compSelection = undefined;

        const choices = document.querySelectorAll('.choices');
        choices.forEach((choice, i, arr) => {
            document.getElementById(arr[i].id).firstElementChild.classList.remove("tied-game");
            document.getElementById(arr[i].id).firstElementChild.style.color = "#FFFFFF";
        });
        

        document.getElementById("hand-results").textContent = "Rock, Paper, Scissors";
        document.getElementById("win-results").textContent = "";

        document.querySelector("#play-again").style.display = "none";
        document.querySelector("#play-hand").style.display = "block";
        playRound();
    });
}

initializeGame();