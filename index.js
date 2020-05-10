
var randomNum1 = Math.floor( Math.random() * 6 ) + 1;
var randomNum2 = Math.floor( Math.random() * 6 ) + 1;
var randDiceImage1 = "images/dice" + randomNum1 + ".png";
var randDiceImage2 = "images/dice" + randomNum2 + ".png";

if(randomNum1 > randomNum2){
  document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}
else if (randomNum1 < randomNum2) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").textContent = "Draw!";
}

document.querySelector(".dice .img1").setAttribute("src",randDiceImage1);
document.querySelector(".dice .img2").setAttribute("src", randDiceImage2);
