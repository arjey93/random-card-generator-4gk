/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "Q", "K"];
  let seeds = ["♦", "♥", "♠", "♣"];

  let cardNumber = document.querySelector("#cardNumber");
  let cardSeeds = document.querySelectorAll(".cardSeed");

  let randomNumberIndex = Math.floor(Math.random() * numbers.length);
  cardNumber.innerHTML - numbers[randomNumberIndex];

  let randomSeedIndex = Math.floor(Math.random() * seeds.length);
  for (let x = 0; x < cardSeeds.length; X++);
};
