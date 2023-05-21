var randomNumber1 = Math.floor(Math.random()*6)+1;
var source = "images/dice"+randomNumber1+".png";
var image1 = document.getElementsByTagName("img")[0];
image1.setAttribute("src",source);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var source2 = "images/dice"+randomNumber2+".png";
var image2 = document.getElementsByTagName("img")[1];
image2.setAttribute("src",source2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = " Player 1 wins!🎗️ "
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = " Player 2 wins!🎗️"
}
else{
  document.querySelector("h1").innerHTML = " Draw!"
}
