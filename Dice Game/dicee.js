var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
console.log(randomNumber2);

var heading = document.querySelector("h1");
var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");

if (randomNumber1 === randomNumber2) {
    heading.innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "Player 1 wins!";
} else {
    heading.innerHTML = "Player 2 wins!";
}

dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");
