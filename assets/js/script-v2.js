'use strict';

const cardSelect = document.getElementsByClassName("card-select");
const startBtn = document.getElementsByClassName("btn-start");
const gameImg = document.querySelector("#game-img");
const licSelect = document.getElementsByClassName("lic-select");
const hideImg = document.getElementsByClassName("img-hide");
const totalScore = document.getElementsByClassName("total-score");
const userScore = document.getElementsByClassName("user-score");

const cards = [{
  name: "dice 1",
  image: "assets/images/dice-1.png",
  licence_img: "assets/images/b-licence.jpg",
  image_id: 0,
  score: 10,
},
{
  name: "dice 2",
  image: "assets/images/dice-2.png",
  licence_img: "assets/images/a-licence.jpg",
  image_id: 1,
  score: 20,
},
{
  name: "dice 3",
  image: "assets/images/dice-3.png",
  licence_img: "assets/images/ic-licence.jpg",
  image_id: 2,
  score: 30,
},
{
  name: "dice 4",
  image: "assets/images/dice-4.png",
  licence_img: "assets/images/ib-licence.jpg",
  image_id: 3,
  score: 40,
},
{
  name: "dice 5",
  image: "assets/images/dice-5.png",
  licence_img: "assets/images/ia-licence.jpg",
  image_id: 4,
  score: 50,
},
{
  name: "dice 6",
  image: "assets/images/dice-6.png",
  licence_img: "assets/images/ia-licence.jpg",
  image_id: 5,
  score: 60,
},
];

function randomiser() {
  const cardList = [];
  const imgList = [];
  const scoreList = [];
  for (let i = 0; i < 6; i++) {
    const imgSelector = Math.trunc(Math.random() * 6);
    const randomCard = cards.filter((value) => value.image_id === imgSelector);
    const cardImage = randomCard[0].image;
    const licImage = randomCard[0].licence_img;
    const cardScore = randomCard[0].score;
    cardList.push(cardImage);
    imgList.push(licImage);
    scoreList.push(cardScore);
  }
  cardFunction(...cardList);
  licenceFunction(...imgList);
  scores(...scoreList);
}


function cardFunction(a, b, c, d, e, f) {
  const cardAct = [a, b, c, d, e, f];
  for (let i = 0; i < 6; i++) {
    if (cardSelect) {
      cardSelect[i].src = cardAct[i];
    }
  }
}

function licenceFunction(g, h, j, k, l, m) {
  const licAct = [g, h, j, k, l, m];
  for (let z = 0; z < 6; z++) {
    if (cardSelect) {
      licSelect[z].src = licAct[z];
    }
  }
}

function scores(n, o, p, q, r, s) {
  const scoreAct = [n, o, p, q, r, s];
  for (let x = 0; x < 6; x++) {
    if (cardSelect) {
      userScore[x].innerHTML = scoreAct[x];
    }
  }
}

function startGame() {
  randomiser();
}

/* remove card select class DONT DELETE */

for (let button of cardSelect) {
  console.log(button);
  button.addEventListener("click", function() {
    button.classList.remove("card-select");
    button.classList.add("image-border");
    button.classList.add("card-count");
    // if (e.target.parentNode.querySelector(".lic-select")) {
    //   e.target.parentNode.querySelector(".lic-select").classList.remove("lic-select");
    // }
    // counter();
  });
}



/* list of selected images */
// function counter() {
//   const cardCount = [];
//   const count = document.getElementsByClassName("user-score");
//   for (var index=0; index < count.length; index++) {
//     cardCount.push(count[index].textContent);
//   }
//   /* when all 6 cards are selected display finished message */
//   const scoreTaly = [...cardCount];
//   console.log(scoreTaly);
//   if (cardCount.length === 6) {
//     for (let tscore of totalScore) {
//     tscore.classList.remove("total-score");
//     }
//   }
// }