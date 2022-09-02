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

    getResult();
    increaseScore();
   
}   

/* Choose a ramdom game item */
function computerPick() {
    let picks = ["rock", "paper", "scissors", "spock", "lizard"];
    let randomPick = (Math.floor(Math.random() * 5));
    return picks[randomPick];
}

/*Work out the result/winner and display */
function getResult() {
    let computer = computerChoice.textContent; 
     
    switch(true) {
        case computer === playerDecide:
           decision = 'Draw';
           break;
        case playerDecide === 'scissors' && computer === 'paper':
        case playerDecide === 'scissors' && computer === 'lizard': 
        case playerDecide === 'paper' && computer === 'rock':
        case playerDecide === 'paper' && computer === 'spock': 
        case playerDecide === 'rock' && computer === 'lizard':
        case playerDecide === 'rock' && computer === 'scissors': 
        case playerDecide === 'lizard' && computer === 'spock':
        case playerDecide === 'lizard' && computer=== 'paper':
        case playerDecide === 'spock' && computer === 'rock':
        case playerDecide === 'spock' && computer === 'scissors':        
            decision = 'You Win!';          
            break;
        case playerDecide === 'paper' && computer === 'scissors':
        case playerDecide === 'lizard' && computer=== 'scissors': 
        case playerDecide === 'rock' && computer=== 'paper':
        case playerDecide === 'spock' && computer === 'paper': 
        case playerDecide === 'lizard' && computer === 'rock':
        case playerDecide === 'scissors' && computer === 'rock': 
        case playerDecide === 'spock' && computer === 'lizard':
        case playerDecide === 'paper' && computer === 'lizard':
        case playerDecide === 'rock' && computer === 'spock':
        case playerDecide === 'scissors' && computer === 'spock':   
            decision = 'You Lose!';
            break;
        default:
            decision = "Something Is Wrong";
    }    
   
    if (decision === "You Win!") {
        result.innerHTML = `${playerDecide} beats ${computer}`;
    } else if (decision === "You Lose!") {
        result.innerHTML = `${computer} beats ${playerDecide}`;
      } else {
        result.innerHTML = "Draw!";
      }
}

function increaseScore() {
    let userScore = 0;
    let computerScore = 0;

    if (decision === 'You Win!') {
        userScore = parseInt(document.getElementById('user-score').innerText);
        document.getElementById('user-score').innerText = ++userScore;
    } else if (decision === 'You Lose!') {
        computerScore = parseInt(document.getElementById('computer-score').innerText);
        document.getElementById('computer-score').innerText = ++computerScore;
    }    
} 