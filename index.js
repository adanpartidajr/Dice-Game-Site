//create two random numbers to select image
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//concatenates random # to file name
var randomImageSelector1 = "dice" + randomNumber1 + ".png";
var randomImageSelector2 = "dice" + randomNumber2 + ".png";

//creates the correct image path by concatenating the file name to the folder
var randomImageSource1 = "images/" + randomImageSelector1;
var randomImageSource2 = "images/" + randomImageSelector2;

//find the correct img class by selecting the element in the index
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

//set source attribute for each img class element to image path
image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);

//logic to check which player wins by comparing the generated random numbers
if(randomNumber1 > randomNumber2) {
document.querySelector("h1").textContent = "🚩 Player 1 wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 wins!  🚩";
}
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "Draw!";
}

