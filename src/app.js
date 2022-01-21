/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector(".card").classList.add(randomPinta());
  let rand = document.querySelector(".middleClass");
  rand.innerHTML = randomNumber();
};

let randomNumber = () => {
  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumeros = Math.floor(Math.random() * numeros.length);
  return numeros[indexNumeros];
};

let randomPinta = () => {
  let pintas = ["diamond", "heart", "spade", "club"];
  let indexPintas = Math.floor(Math.random() * pintas.length);
  return pintas[indexPintas];
};
