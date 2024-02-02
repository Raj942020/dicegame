var randomnumber = Math.floor(Math.random() * 6 ) + 1;

var randomdiceImage ="dice" + randomnumber + ".png";

var randomimagesource ="images/" + randomdiceImage;

var image1 = document.querySelectorAll("img") [0];
 
image1.setAttribute("src",randomimagesource);


var randomnumber2 =Math.floor(Math.random() * 6) + 1;
var randomImagesource2 = "images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImagesource2);

if (randomnumber >randomnumber2){
    document.querySelector("h1").innerHTML="🚩 player 1 wins!"
}
else if (randomnumber2>randomnumber){
    document.querySelector("h1").innerHTML="🚩 player 2 wins!"
}
else{
    document.querySelector("h1").innerHTML="draw!";
}