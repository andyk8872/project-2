const userPicks = document.getElementsByTagName('button');
console.log(userPicks);

let playerDecide;

for (var i = 0; i < userPicks.length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(event) {

        playerDecide = event.target.id;        
   
        let userResult = "assets/images/" + playerDecide + ".png";
        document.querySelectorAll("img")[0].setAttribute("src", userResult);

        console.log(computerPick());
   
       });      
   }  

   function computerPick() {
    let picks = ["rock", "paper", "scissors", "spock", "lizard"];
    let randomPick = (Math.floor(Math.random() * 5));     
    return picks[randomPick]; 
}