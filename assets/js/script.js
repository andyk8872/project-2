/* Global Variables */
const userPicks = document.getElementsByTagName('button');
const computerChoice = document.getElementById('computer-choice');
const result = document.getElementById('result');

let playerDecide;
let decision;

/** Record which button is clicked and 
 * run play functionGame */
for (var i = 0; i < userPicks.length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function (event) {

        playerDecide = event.target.id;
        playGame(playerDecide);
               

    });
}

/* A function to play the game */
function playGame(playerDecide) {

    let userResult = "assets/images/" + playerDecide + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", userResult);

    computerChoice.innerHTML = computerPick();
    let cRandom = computerChoice.textContent;
    let randomComp = "assets/images/" + cRandom + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomComp);
    
    console.log(playerDecide);
    let computer = computerChoice.textContent;
    console.log(computer);
}   

function computerPick() {
    let picks = ["rock", "paper", "scissors", "spock", "lizard"];
    let randomPick = (Math.floor(Math.random() * 5));
    return picks[randomPick];
}

