'use strict';

const holdImg = document.getElementsByClassName("card-select");
const startBtn = document.getElementsByClassName("btn-start");
const gameImg = document.querySelector("#game-img");
const licenceList = document.getElementsByClassName("lic-select");
const hideImg = document.getElementsByClassName("img-hide");
const totalScore = document.getElementsByClassName("total-score");
const userScore = document.getElementsByClassName("user-score");
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

let sum = 0;

function startGame() {
   /* Card image randomiser list */
  getId();
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
  /* card score destructure */
  // const [cardScore1, cardScore2, cardScore3, cardScore4, cardScore5, cardScore6] = scoreList;
  //  console.log(cardScore1, cardScore2, cardScore3, cardScore4, cardScore5, cardScore6);
  
   /* Img element randomiser list */
  const list = [];
  for(var index=0;index < holdImg.length;index++){
      list.push(holdImg[index].src)      
  }
  const licList = [];
  for(var index=0;index < licenceList.length;index++){
      licList.push(licenceList[index].src)
  }

   /* List replace */
  for (var n in list) {  
    if (n) {          
      Array.prototype.splice.apply(list, [0, newList.length].concat(newList));
    } else {}
  }
  /* card main image destructure */
  // const [cardImg1, cardImg2, cardImg3, cardImg4, cardImg5, cardImg6] = newList;
  //  console.log(cardImg1, cardImg2, cardImg3, cardImg4, cardImg5, cardImg6);

  for (var y in licList) {  
    if (y) {          
      Array.prototype.splice.apply(licList, [0, imgList.length].concat(imgList));
    } else {}
  }
  /* card licence image destructure */
  // const [cardLic1, cardLic2, cardLic3, cardLic4, cardLic5, cardLic6] = licList;
  //  console.log(cardLic1, cardLic2, cardLic3, cardLic4, cardLic5, cardLic6);

  const cardImage = [...newList];
  const licenceImage = [...imgList];
  const scoreVal = [...scoreList];
  console.log(cardImage, licenceImage, scoreVal);

  /* licence img source replace */
  for(var licup=0;licup < licList.length;licup++){
    licenceList[licup].src = licenceImage[licup];
  }

  /* Main Img source replace */
  for(var imgup=0;imgup < holdImg.length;imgup++){
    holdImg[imgup].src = cardImage[imgup];
  }

  /* score html replace*/
  for(var scrup=0;scrup < userScore.length;scrup++){
    userScore[scrup].innerHTML = scoreVal[scrup];
  }
}
  // for (var b in imgList) {
  //   licenceList[b].src = imgList[b];
  // }

  // for (let i = 0; i < scoreList.length; i++ ) {
  //   sum += scoreList[i];
  // }
  // console.log(sum);


 /* remove card select class DONT DELETE */
function getId() {
  for (let button of holdImg) {
    
    button.addEventListener("click", function(e) {
      // licence();
      button.classList.remove("card-select");
      button.classList.add("image-border");
      button.classList.add("card-count");
      if (e.target.parentNode.querySelector(".img-hide")) {
        e.target.parentNode.querySelector(".img-hide").classList.remove("img-hide");
      }
      // if (e.target.parentNode.querySelector(".lic-select")) {
      //   e.target.parentNode.querySelector(".lic-select").classList.remove("lic-select");
      // }

      counter();
    });
  }
}


/* list of selected images */
function counter() {
  const cardCount = [];
  const count = document.getElementsByClassName("user-score");
  for (var index=0; index < count.length; index++) {
    cardCount.push(count[index].textContent);
  }
  /* when all 6 cards are selected display finished message */
  const scoreTaly = [...cardCount];
  console.log(scoreTaly);
  if (cardCount.length === 6) {
    for (let tscore of totalScore) {
    tscore.classList.remove("total-score");
    }
  }
}


// function pushScore() {
//   const itt = scoreList.values();
//   for (var val of itt) {
//     document.getElementById("user-score").innerHTML = val;
//   }
// }

 /* get licence element image src list */
// function licence() {
//   const licList = [];
//   const licenceList = document.querySelectorAll("#lic-select");
//   for(var index=0;index < licenceList.length;index++){
//       licList.push(licenceList[index].src)
//   }
//   console.log("logs current licence image jpg in element on click", licList);
// }
// licence();




  /* logs list of scores in cards object */
// const test2 = [];
// for (var y in cards) {
// var test1 = Object.entries(cards)[y][1].score;
// test2.push(test1);
// }
// console.log(test2);
