var rand1 = Math.floor(Math.random()*6)+1
          // (0 to 0.9) multily by 6 and add 1 to get (1 yo 6)
var image1 = "images/"+"dice" + rand1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);

var rand2 = Math.floor(Math.random()*6)+1
          // (0 to 0.9) multily by 6 and add 1 to get (1 yo 6)
var image2 = "images/"+"dice" + rand2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",image2);

if(rand1>rand2){
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(rand2>rand1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
  document.querySelector("h1").innerHTML = "It's a Draw";
}
