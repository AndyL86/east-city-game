'use strict';

const holdBtn = document.getElementsByClassName("btn-hold");
const startBtn = document.getElementsByClassName("btn-start");
const gameImg = document.querySelector("#game-img");

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

// function startGame() {
//   const imgSelector = Math.trunc(Math.random() * 5);
//   const randomCard = cards.filter((value) => value.image_id === imgSelector);
//   const cardImage = randomCard[0].image;
//   const gameImg = document.querySelectorAll("#game-img");
//   for (let i = 0; i < gameImg.length; i++) {
//     gameImg[i].src = cardImage;
//   }
// }

let userChoice = [];

// function gameLogic() {
//   const imgSelector = Math.trunc(Math.random() * 5);
//   const randomCard = cards.filter((value) => value.image_id === imgSelector);
//   const cardImage = randomCard[0].image;
//   console.log(cardImage);
//   gameImg.src = cardImage;
// }

function startGame() {
  
  const newList = [];
  for (let i = 0; i < 6; i++) {
    const imgSelector = Math.trunc(Math.random() * 5);
    const randomCard = cards.filter((value) => value.image_id === imgSelector);
    const cardImage = randomCard[0].image;
    newList.push(cardImage);
  }
  console.log(newList);
  const list = [];
  const className = document.querySelectorAll("#game-img");
    for(var index=0;index < className.length;index++){
        list.push(className[index].src)       
    }
  for (var n in list) {  
    if (n) {          
      Array.prototype.splice.apply(list, [0, newList.length].concat(newList));
    } else {}
  }
  for (let e = 0; e < 6; e++) {
  className[e].src = newList[e];
  }
}

// for (let button of holdBtn) {
//   button.addEventListener("click", function() {
//     console.log("test");
//   })
// }

// function hold() {

// }