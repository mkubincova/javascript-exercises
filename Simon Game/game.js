//sounds
var red = new Audio("sounds/red.mp3");
var blue = new Audio("sounds/blue.mp3");
var green = new Audio("sounds/green.mp3");
var yellow = new Audio("sounds/yellow.mp3");
var wrong = new Audio("sounds/wrong.mp3");

//colors
var buttonColours = ["red", "blue", "green", "yellow"];

//game mode
var gameStarted = false;
var level = 0;

//patterns
var gamePattern = [];
var userClickedPattern = [];

//event listeners
$(".btn").click(function() {
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
})

$(document).on("keypress", function () {
    if (gameStarted === false) {
        nextSequence();
        gameStarted = true;
    }
})



//functions - game logic
function nextSequence() {
    //pick color from array and add it as new pattern
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);

    //animate and make sound for picked button
    animatePress(randomChosenColor);
    playSound(randomChosenColor);

    //move to next Level
    level++;
    $("h1").text("Level " + level);
}

function checkAnswer(currnentLevel) {
    //check if user and game have the same thing in array
    if (gamePattern[currnentLevel] === userClickedPattern[currnentLevel]) {

        //check if the user is done answering
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(function () {
                nextSequence();             //start next level
                userClickedPattern = [];    //delete user answers
            }, 1000);
        }

    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    gameStarted = false;
}

//fucntions - sounds and animation
function playSound(name) {
    switch (name) {
        case "red":
            red.play()
            break;
        case "blue":
            blue.play()
            break;
        case "green":
            green.play()
            break;
        case "yellow":
            yellow.play()
            break;
        case "wrong":
            wrong.play()
            break;
    }
}

function animatePress(currentColor){
    var selectedButton = $("#" + currentColor);
    selectedButton.addClass("pressed");
    setTimeout(function () {
        selectedButton.removeClass("pressed");
    }, 100);
}
