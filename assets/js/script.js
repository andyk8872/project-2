/* Global Variables */
const userPicks = document.getElementsByTagName('button');

let playerDecide;

/** Record which button is clicked and 
 * run play functionGame */
for (var i = 0; i < userPicks.length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function (event) {

        playerDecide = event.target.id;
        playGame(playerDecide);
    });
}


function playGame(playerDecide) {

    let userResult = "assets/images/" + playerDecide + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", userResult);

    let cRandom = computerPick();
    let randomComp = "assets/images/" + cRandom + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomComp);
}

function computerPick() {
    let picks = ["rock", "paper", "scissors", "spock", "lizard"];
    let randomPick = (Math.floor(Math.random() * 5));
    return picks[randomPick];
}