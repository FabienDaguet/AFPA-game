"use strict"
//let tab = ["scisor", "rock", "paper"];
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
    
    //let hisTarget = tab[Math.floor(Math.random() * tab.length)];
    let hisTarget = hisHand[Math.floor(Math.random() * hisHand.length)];
    if (hisTarget.getAttribute("data-form") === "scisor") {
        hisResult = "ciseaux";
    } else if (hisTarget.getAttribute("data-form") === "rock") {
        hisResult = "cailloux";
    } else {
        hisResult = "papier";
    }

    hisChoice.textContent = "Il a choisi " + hisResult;
    console.log(hisChoice)


    if (myTarget.getAttribute("data-form") === hisTarget.getAttribute("data-form")) {
        ourResult.textContent = "Egalité !";
    } else if ((myTarget.getAttribute("data-form") === "scisor" && hisTarget.getAttribute("data-form") === "paper") || (myTarget.getAttribute("data-form") === "paper" && hisTarget.getAttribute("data-form") === "rock") || (myTarget.getAttribute("data-form") === "rock" && hisTarget.getAttribute("data-form") === "scisor")) {
        ourResult.textContent = "Tu as gagné !";
    } else {
        ourResult.textContent = "Tu as perdus.";
    }

    for(let element of hand) {
        element.classList.add("hand--opacity");
    }
    myTarget.classList.remove("hand--opacity");

    for(let element of hisHand) {
        element.classList.add("hand--opacity");
    }
    hisTarget.classList.remove("hand--opacity");
    

}

for(let element of hand) {
    element.addEventListener("click", duel);
}

