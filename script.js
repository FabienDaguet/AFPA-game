"use strict"
let tab = ["scisor", "rock", "paper"];
let hand = document.querySelectorAll(".js-hand");
let hisHand = document.querySelectorAll(".js-hand-computer");
let myChoice = document.querySelector(".js-my-choice");
let hisChoice = document.querySelector(".js-his-choice");
let ourResult = document.querySelector(".js-result");
let hisResult

function duel(event){
    let myTarget = event.currentTarget;
    if (myTarget.getAttribute("data-form") === "scisor") {
        myChoice.textContent = "Tu as choisi ciseaux";
    } else if (myTarget.getAttribute("data-form") === "rock") {
        myChoice.textContent = "Tu as choisi cailloux";
    } else {
        myChoice.textContent = "Tu as choisi papier";
    }
    
    let hisTarget = tab[Math.floor(Math.random() * tab.length)];
    if (hisTarget === "scisor") {
        hisResult = "ciseaux";
    } else if (hisTarget === "rock") {
        hisResult = "cailloux";
    } else {
        hisResult = "papier";
    }

    hisChoice.textContent = "L'ordinateur a choisi " + hisResult;


    if (myTarget.getAttribute("data-form") === hisTarget) {
        ourResult.textContent = "Egalité !";
    } else if ((myTarget.getAttribute("data-form") === "scisor" && hisTarget === "paper") || (myTarget.getAttribute("data-form") === "paper" && hisTarget === "rock") || (myTarget.getAttribute("data-form") === "rock" && hisTarget === "scisor")) {
        ourResult.textContent = "Tu as gagné !";
    } else {
        ourResult.textContent = "Tu as perdus.";
    }

    for(let element of hand) {
        element.classList.add("hand--opacity");
        myTarget.classList.remove("hand--opacity");
    }

    for(let element of hisHand) {
        element.classList.add("hand--opacity");
        hisTarget.classList.remove("hand--opacity");
    }
    

}

for(let element of hand) {
    element.addEventListener("click", duel);
}

