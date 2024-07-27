'use strict';

const cardImg = document.getElementsByClassName("card-select");
const cardImg2 = document.getElementsByClassName("card-select2");
const cardImg3 = document.getElementsByClassName("card-select3");
const cardImg4 = document.getElementsByClassName("card-select4");
const cardImg5 = document.getElementsByClassName("card-select5");
const cardImg6 = document.getElementsByClassName("card-select6");
const licImg = document.getElementsByClassName("lic-select");
const licImg2 = document.getElementsByClassName("lic-select2");
const licImg3 = document.getElementsByClassName("lic-select3");
const licImg4 = document.getElementsByClassName("lic-select4");
const licImg5 = document.getElementsByClassName("lic-select5");
const licImg6 = document.getElementsByClassName("lic-select6");
const userScore = document.getElementsByClassName("user-score");
const userScore2 = document.getElementsByClassName("user-score2");
const userScore3 = document.getElementsByClassName("user-score3");
const userScore4 = document.getElementsByClassName("user-score4");
const userScore5 = document.getElementsByClassName("user-score5");
const userScore6 = document.getElementsByClassName("user-score6");
const hideImg = document.getElementsByClassName("img-hide");
const holdImg = document.getElementsByClassName("card-hold");

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

function startGame() {
getId();
const newList = [];
const imgList = [];
const scoreList = [];
for (let i = 0; i < 6; i++) {
  const imgSelector = Math.trunc(Math.random() * 6);
  const randomCard = cards.filter((value) => value.image_id === imgSelector);
  const randImage = randomCard[0].image;
  const licImg = randomCard[0].licence_img;
  const cardScore = randomCard[0].score;
  newList.push(randImage);
  imgList.push(licImg);
  scoreList.push(cardScore);
}

const cardImage = [...newList];
const licenceImage = [...imgList];
const scoreVal = [...scoreList];
console.log(cardImage, licenceImage, scoreVal);


if (holdImg) {
cardImg[0].src = cardImage[0];
cardImg2[0].src = cardImage[1];
cardImg3[0].src = cardImage[2];
cardImg4[0].src = cardImage[3];
cardImg5[0].src = cardImage[4];
cardImg6[0].src = cardImage[5];
} else {}


licImg[0].src = licenceImage[0];
licImg2[0].src = licenceImage[1];
licImg3[0].src = licenceImage[2];
licImg4[0].src = licenceImage[3];
licImg5[0].src = licenceImage[4];
licImg6[0].src = licenceImage[5];

userScore[0].innerHTML = scoreVal[0];
userScore2[0].innerHTML = scoreVal[2];
userScore3[0].innerHTML = scoreVal[3];
userScore4[0].innerHTML = scoreVal[4];
userScore5[0].innerHTML = scoreVal[5];
userScore6[0].innerHTML = scoreVal[6];

}

function getId() {
  for (let button of holdImg) {
    button.addEventListener("click", function() {
      button.classList.remove("card-hold");
      button.classList.add("image-border");
      console.log(button.classList);
    });
  }
}

