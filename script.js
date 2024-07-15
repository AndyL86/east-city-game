'use strict';

const holdBtn = document.getElementsByClassName("btn-hold");
const startBtn = document.getElementsByClassName("btn-start");

const cards = [{
  name: "dice 1",
  image: "dice-1.png",
  image_id: 0,
  score: 10,
},
{
  name: "dice 2",
  image: "dice-2.png",
  image_id: 1,
  score: 20,
},
{
  name: "dice 3",
  image: "dice-3.png",
  image_id: 2,
  score: 30,
},
{
  name: "dice 4",
  image: "dice-4.png",
  image_id: 3,
  score: 40,
},
{
  name: "dice 5",
  image: "dice-5.png",
  image_id: 4,
  score: 50,
},
{
  name: "dice 6",
  image: "dice-6.png",
  image_id: 5,
  score: 60,
},
];

let userChoice = [];

function startGame() {
  const imgSelector = Math.trunc(Math.random() * 5);
  const randomCard = cards.filter((value) => value.image_id === imgSelector);
  const cardImage = randomCard[0].image;
  const gameImg = document.querySelectorAll("#game-img");
  for (let i = 0; i < gameImg.length; i++) {
    gameImg[i].src = cardImage;
  }
}

// for (let button of holdBtn) {
//   button.addEventListener("click", function() {
//     console.log("test");
//   })
// }

// function hold() {

// }