const userPicks = document.getElementsByTagName('button');
console.log(userPicks);

let playerDecide;

for (var i = 0; i < userPicks.length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(event) {
        playerDecide = event.target.id;
        console.log(playerDecide);

    });  
}