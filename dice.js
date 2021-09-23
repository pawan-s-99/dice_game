var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomImage1 = ("Images/dice"+randomNumber1+".png");

var Image1 = document.querySelectorAll("img")[0];

Image1.setAttribute("src",randomImage1);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImage2 = ("Images/dice"+randomNumber2+".png");

var Image2 = document.querySelectorAll("img")[1];

Image2.setAttribute("src",randomImage2);


if (randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!!!!";
    document.querySelector("h1").style.color = "red";
}

else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!!!!";
    document.querySelector("h1").style.color = "red";
}

else{
    document.querySelector("h1").innerHTML = "Draw!!!!";
    document.querySelector("h1").style.color = "red";

}