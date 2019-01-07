//Declares jQuery
$( document ).ready(function(){
//Setting variable for random number between 19 and 120
//    
var Random=Math.floor(Math.random()*120+19)
$("#randomNumber").text(Random);
//Random variables for each gem
//
var gem1= Math.floor(Math.random()*12+1)
var gem2= Math.floor(Math.random()*12+1)
var gem3= Math.floor(Math.random()*12+1)
var gem4= Math.floor(Math.random()*12+1)
//Setting variables for wins. losses, and user score
//
var userNumber= 0;
var wins= 0;
var losses= 0;

$("#numberWins").text(wins);
$("#numberLosses").text(losses);
$("#gameScore").text(userNumber);

//Adds gem click to user score
//
$("#one").on("click", function() {
userNumber = userNumber + gem1;
$("#gameScore").text(userNumber)
if (userNumber == Random) {
    yay();
}
else if (userNumber>Random) {
    grr();
}   
});

$("#two").on("click", function() {
userNumber = userNumber + gem2;
$("#gameScore").text(userNumber)
if (userNumber == Random) {
    yay();
}
else if (userNumber>Random) {
    grr();
}   
});

$("#three").on("click", function() {
userNumber = userNumber + gem3;
$("#gameScore").text(userNumber)
if (userNumber == Random) {
    yay();
}
else if (userNumber>Random) {
    grr();
}   
});

$("#four").on("click", function() {
userNumber = userNumber + gem4;
$("#gameScore").text(userNumber)
if (userNumber == Random) {
    yay();
}
else if (userNumber>Random) {
    grr();
}   
});
//Setting win / lose functions
//
function yay() {
    alert("You Win!")
    wins++;
    $("#numberWins").text(wins);
    reset();
}

function grr() {
    alert("You lose")
    losses++;
    $("#numberLosses").text(losses);
    reset();
}
//Resets game
//
function reset() {
    Random=Math.floor(Math.random()*120+19)
    $("#randomNumber").text(Random);
    gem1= Math.floor(Math.random()*12+1)
    gem2= Math.floor(Math.random()*12+1)
    gem3= Math.floor(Math.random()*12+1)
    gem4= Math.floor(Math.random()*12+1)
    userNumber= 0;
    $("#gameScore").text(userNumber);
   
}
















});
