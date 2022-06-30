var randomNumber1 = Math.floor(Math.random()*6) + 1;
var dicer = "images/dice"+randomNumber1+".png";
var im1 = document.querySelectorAll("img")[0];
im1.setAttribute("src", dicer);
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var dicer0 = "images/dice"+randomNumber2+".png";
var im2 = document.querySelectorAll("img")[1];
im2.setAttribute("src", dicer0);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="🏆Refresh Me";
}else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML="Refresh Me";
}else{
  document.querySelector("h1").innerHTML="Refresh Me🏆";
}
