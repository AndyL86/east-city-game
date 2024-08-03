'use strict';

const cardSelect = document.getElementsByClassName("card-select");
const startBtn = document.getElementsByClassName("btn-start");
const gameVal = document.querySelectorAll("#game-img");
const licVal = document.querySelectorAll("#lic-img");
const scoreVal = document.querySelectorAll("#score-val");
const licSelect = document.getElementsByClassName("lic-select");
const hideImg = document.getElementsByClassName("img-hide");
const totalScore = document.getElementsByClassName("total-score");
const userScore = document.getElementsByClassName("user-score");
const scoreMsg = document.getElementById("end-score");
const revCounter = document.getElementById("myBar");


const cards = [{
  name: "dice 1",
  image: "assets/images/r32.jpg",
  licence_img: "assets/images/b-licence.jpg",
  image_id: 0,
  score: 275,
},
{
  name: "dice 2",
  image: "assets/images/s14.jpg",
  licence_img: "assets/images/a-licence.jpg",
  image_id: 1,
  score: 220,
},
{
  name: "dice 3",
  image: "assets/images/s15.jpg",
  licence_img: "assets/images/ic-licence.jpg",
  image_id: 2,
  score: 240,
},
{
  name: "dice 4",
  image: "assets/images/evo3.jpeg",
  licence_img: "assets/images/ic-licence.jpg",
  image_id: 3,
  score: 275,
},
{
  name: "dice 5",
  image: "assets/images/gc8.jpg",
  licence_img: "assets/images/ib-licence.jpg",
  image_id: 4,
  score: 260,
},
{
  name: "dice 6",
  image: "assets/images/r33.jpg",
  licence_img: "assets/images/ib-licence.jpg",
  image_id: 5,
  score: 285,
},
{
  name: "dice 6",
  image: "assets/images/ps13.jpg",
  licence_img: "assets/images/ia-licence.jpg",
  image_id: 6,
  score: 190,
},
{
  name: "dice 6",
  image: "assets/images/r34.jpg",
  licence_img: "assets/images/s-licence.jpg",
  image_id: 7,
  score: 300,
}
];

function randomiser() {
  click();
  const cardList = [];
  const imgList = [];
  const scoreList = [];
  for (let i = 0; i < 8; i++) {
    const imgSelector = Math.trunc(Math.random() * 8);
    const randomCard = cards.filter((value) => value.image_id === imgSelector);
    const cardImage = randomCard[0].image;
    const licImage = randomCard[0].licence_img;
    const cardScore = randomCard[0].score;
    cardList.push(cardImage);
    imgList.push(licImage);
    scoreList.push(cardScore);
  }
  licenceFunction(...imgList);
  scores(...scoreList);
  cardFunction(...cardList);
}

function cardFunction(a, b, c, d, e, f) {
  const cardAct = [a, b, c, d, e, f];
  for (let i = 0; i < 6; i++) {
    const cardTrue = gameVal[i].classList.contains("card-select");
    const cardArray = cardAct[i].toString();
    if (cardTrue) {
     gameVal[i].src = cardArray;
    } else {}
  };
}

function licenceFunction(g, h, j, k, l, m) {
  const licAct = [g, h, j, k, l, m];
  for (let z = 0; z < 6; z++) {
    const licTrue = licVal[z].classList.contains("lic-select");
    const licArray = licAct[z].toString();
    if (licTrue) {
     licVal[z].classList.remove("img-hide");
     licVal[z].src = licArray;
    } else {}
  }

}

function scores(n, o, p, q, r, s) {
  const scoreAct = [n, o, p, q, r, s];
  for (let x = 0; x < 6; x++) {
    const scoreTrue = scoreVal[x].classList.contains("user-score");
    const scrArray = scoreAct[x].toString();
    if (scoreTrue) {
    scoreVal[x].innerHTML = scrArray;
    } else {}
  }
}
let timeoutID;

function startGame() {
  timeoutID = setInterval(randomiser, 100);
}

function click() {
  for (let selectedCard of cardSelect) {
    const child1 = selectedCard.nextElementSibling;
    const child2 = child1.children['lic-img'];
    const child3 = child1.children['score-val'];
    selectedCard.addEventListener("click", function() {
      selectedCard.classList.remove("card-select");
      selectedCard.classList.add("image-border");
      child2.classList.remove("lic-select");
      child3.classList.remove("user-score");
      child3.classList.add("score-calc");
      clearInterval(timeoutID);
      counter();
      timeoutID = setTimeout(startGame, 200);
    });
  }
}


function counter() {
  const cardCount = [];
  const count = document.getElementsByClassName("score-calc");
  for (var index=0; index < count.length; index++) {
    cardCount.push(count[index].textContent);
  }
  /* when all 6 cards are selected display finished message */
  if (cardCount.length === 6) {
    for (let tscore of totalScore) {
    tscore.classList.remove("total-score");
    let sum = 0;
      for (let i = 0; i < cardCount.length; i++ ) {
        sum += parseInt(cardCount[i]);
      }
    scoreMsg.innerHTML = sum + "HP";
    move(sum);
    }
  }
}

function resetGame() {
  for (let k = 0; k < 6; k++) {
    gameVal[k].src = "assets/images/default.png";
    licVal[k].classList.add("img-hide");
  }
  scoreMsg.classList.add("total-score");   
}

console.log(revCounter);

var i = 0;
function move(hpVal) {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 50);
    var revVal = hpVal / 20;
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = revVal + "%";
      }
    }
  }
}