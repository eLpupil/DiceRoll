

var dieP1 = Math.floor(Math.random() * 6) + 1;
var dieP2 = Math.floor(Math.random() * 6) + 1;

var diceImgs = document.querySelectorAll(".dice-container img");

diceImgs[0].setAttribute("src", "images/dice" + dieP1 + ".png");
diceImgs[1].setAttribute("src", "images/dice" + dieP2 + ".png");

if (dieP1 > dieP2) {
  var outcomeString = "🏆Player 1 Wins!";
}
else if (dieP2 > dieP1) {
  var outcomeString = "Player 2 Wins!🏆";
}
else {
  var outcomeString = "Draw! Refresh!";
}

document.querySelector("h1").textContent = outcomeString;


document.querySelector(".myButton").onclick = function(){
  location.reload();
};
