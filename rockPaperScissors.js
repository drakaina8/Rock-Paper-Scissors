var expect = require("chai").expect;

console.log("~Rock, Paper, Scissors Game~\n");

console.log("1...2...3...Go!\n");


function requestUserPlay(){
    var name = window.prompt("What symbol will you play?\n"
                            + "Type 1 for Rock\n"
                            + "Type 2 for Paper\n"
                            + "Type 3 for Scissors\n");
    if
}

function symbol(int num){
    var randomNum = Math.floor(Math.random() * 4) + 1;
    if (randomNum == 1){
        return "Rock";
    }
    else if (randomNum == 2){
        return "Paper";
    }
    else {
        return "Scissors";
    }

}