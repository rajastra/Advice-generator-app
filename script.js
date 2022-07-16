"use strict";

// Global variables
const quoteID = document.body.querySelector(".advice-id");
const quote = document.body.querySelector(".text-box__quote");
const button = document.body.querySelector(".round-button");

quoteID.textContent = "";
quote.textContent = "";

const showQuote = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    if (!res.ok) {
      throw new Error("No advice found");
    }
    const { slip } = await res.json();
    const randomID = Math.floor(Math.random() * 100);
    console.log(randomID);
    quoteID.textContent = slip.id;
    quote.textContent = slip.advice;
  } catch (err) {
    console.error(err);
  }
};

showQuote();
button.addEventListener("click", showQuote);
