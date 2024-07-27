'use strict';

const holdImg = document.getElementsByClassName("card-select");
const startBtn = document.getElementsByClassName("btn-start");
const gameImg = document.querySelector("#game-img");
const hideImg = document.getElementsByClassName("img-hide");
const cardGroup = document.getElementById("card-group");

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


const newList = [];
const imgList = [];
const scoreList = [];
for (let i = 0; i < 6; i++) {
  const imgSelector = Math.trunc(Math.random() * 6);
  const randomCard = cards.filter((value) => value.image_id === imgSelector);
  const cardImage = randomCard[0].image;
  const licImg = randomCard[0].licence_img;
  const cardScore = randomCard[0].score;
  newList.push(cardImage);
  imgList.push(licImg);
  scoreList.push(cardScore);
}
const [cardScore1, cardScore2, cardScore3, cardScore4, cardScore5, cardScore6] = scoreList;
console.log(cardScore1, cardScore2, cardScore3, cardScore4, cardScore5, cardScore6);
const [cardImg1, cardImg2, cardImg3, cardImg4, cardImg5, cardImg6] = newList;
console.log(cardImg1, cardImg2, cardImg3, cardImg4, cardImg5, cardImg6);
const [cardLic1, cardLic2, cardLic3, cardLic4, cardLic5, cardLic6] = imgList;
console.log(cardLic1, cardLic2, cardLic3, cardLic4, cardLic5, cardLic6);

