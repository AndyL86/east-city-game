'use strict';

const holdButton = document.getElementsByClassName("btn-hold");
const startButton = document.getElementsByClassName("btn-start");
const gameImg = document.getElementById("game-img");

const cards = [{
  name: "dice 1",
  image: "dice-1.png",
  score: 1,
  image_id: "d1",
},
{
  name: "dice 2",
  image: "dice-2.png",
  score: 2,
  image_id: "d2",
},
{
  name: "dice 3",
  image: "dice-3.png",
  score: 3,
  image_id: "d3",
},
{
  name: "dice 4",
  image: "dice-4.png",
  score: 4,
  image_id: "d4",
},
{
  name: "dice 5",
  image: "dice-5.png",
  score: 5,
  image_id: "d5",
},
{
  name: "dice 6",
  image: "dice-6.png",
  score: 6,
  image_id: "d6",
},
];


startButton.addEventlistener('click', function () {
  
})