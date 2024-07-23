'use strict';

const holdImg = document.getElementsByClassName("card-select");
const startBtn = document.getElementsByClassName("btn-start");
const gameImg = document.querySelector("#game-img");
const hideImg = document.getElementsByClassName("img-hide");

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

  /* Card image randomiser list */
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
console.log(scoreList);
console.log(newList);
console.log(imgList);

const list = [];
const className = document.getElementsByClassName("card-select");
for(var index=0;index < className.length;index++){
    list.push(className[index].src)      
}
const licList = [];
const licenceList = document.getElementsByClassName("lic-select");
for(var index=0;index < licenceList.length;index++){
    licList.push(licenceList[index].src)
}
for (var n in list) {  
  if (n) {          
    Array.prototype.splice.apply(list, [0, newList.length].concat(newList));
  } else {}
}
for (var y in licList) {  
  if (y) {          
    Array.prototype.splice.apply(licList, [0, imgList.length].concat(imgList));
  } else {}
}

function startGame() {
  for (var a in newList) {
    className[a].src = newList[a];
  }
  for (var b in imgList) {
    licenceList[b].src = imgList[b];
  }
}

//     className[e].src = newList[e];
//     licenceList[e].src = imgList[e];












// function startGame() {
//    /* Card image randomiser list */
//   const newList = [];
//   const imgList = [];
//   const scoreList = [];
//   for (let i = 0; i < 6; i++) {
//     const imgSelector = Math.trunc(Math.random() * 6);
//     const randomCard = cards.filter((value) => value.image_id === imgSelector);
//     const cardImage = randomCard[0].image;
//     const licImg = randomCard[0].licence_img;
//     const cardScore = randomCard[0].score;
//     newList.push(cardImage);
//     imgList.push(licImg);
//     scoreList.push(cardScore);
//   }
//   console.log(scoreList);
  
//    /* Img element randomiser list */
//   const list = [];
//   const className = document.getElementsByClassName("card-select");
//   for(var index=0;index < className.length;index++){
//       list.push(className[index].src)      
//   }
//   const licList = [];
//   const licenceList = document.querySelectorAll("#lic-select");
//   for(var index=0;index < licenceList.length;index++){
//       licList.push(licenceList[index].src)
//   }
//    /* List replace */
//   for (var n in list) {  
//     if (n) {          
//       Array.prototype.splice.apply(list, [0, newList.length].concat(newList));
//     } else {}
//   }
//   // console.log("current dice image list minus selected image working backwards", newList);
//   for (var y in licList) {  
//     if (y) {          
//       Array.prototype.splice.apply(licList, [0, imgList.length].concat(imgList));
//     } else {}
//   }
//   // console.log("current licence image list minus selected image working backwards", imgList);

//     /* Img source replace */
//   for (let e = 0; e < 6; e++) {
//     className[e].src = newList[e];
//     licenceList[e].src = imgList[e];
//   }
//   getId();
// }

//  /* remove card select class DONT DELETE */
// function getId() {
//   for (let button of holdImg) {
//     button.addEventListener("click", function() {
//       // licence();
//       button.classList.remove("card-select");
//       button.classList.add("image-border");
//       button.classList.add("card-count");
//       counter();
//     });
//   }
// }

// function counter() {
//   const cardCount = [];
//   const count = document.getElementsByClassName("card-count");
//   for (var index=0; index < count.length; index++) {
//     cardCount.push(count[index].src);
//   }
//   console.log(cardCount);
// }
