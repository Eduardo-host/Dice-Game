

let scoreP1 = 0;
let scoreP2 = 0;
let scoreDraw = 0;

const scoreP1Element = document.getElementById("scoreP1");
const scoreP2Element = document.getElementById("scoreP2");
const scoreDrawElement = document.getElementById("scoreDraw");
const dice1Div = document.getElementById("dice1");
const dice2Div = document.getElementById("dice2");

function darleClick() {
  // Quitar banderita del roll anterior
  dice1Div.classList.remove("winner");
  dice2Div.classList.remove("winner");

  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomDice = "dice" + randomNumber1 + ".png";
  let imageSource = "./images/" + randomDice;
  let img1 = document.querySelector(".img1");
  img1.setAttribute("src", imageSource);

  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let randomDice2 = "dice" + randomNumber2 + ".png";
  let imageSource2 = "./images/" + randomDice2;
  let img2 = document.querySelector(".img2");
  img2.setAttribute("src", imageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 won! 🚩";
    scoreP1++;
    scoreP1Element.textContent = scoreP1;
    dice1Div.classList.add("winner");
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 won! 🚩";
    scoreP2++;
    scoreP2Element.textContent = scoreP2;
    dice2Div.classList.add("winner");
  } else {
    document.querySelector("h1").innerHTML = "Match Draw";
    scoreDraw++;
    scoreDrawElement.textContent = scoreDraw;
  }
}











 

