const prompt = require('prompt-sync')();

playGame();
 function playGame(){
    // Define constants
    const rock = {string: 'rock', num: 0};
    const scissors = {string: 'scissors', num: 1};
    const paper = {string: 'paper', num: 2};
    const symbols = [rock, scissors, paper];

    //Game Introduction
    console.log('~Rock, Paper, Scissors Game~\n');

    let continuePlay = true;
    let userSymbol;

    do {
        console.log('\n1...2...3...Go!\n');

        userSymbol = requestSymbol(symbols);
        endGame(userSymbol, symbols[randNum()]);
    } while(requestPlay())
}

/**
     * 
     * @returns {number} - A random number between 0 and 2
     */
 function randNum() {
    return (Math.floor(Math.random() * 4));
}

/**
 * 
 * @returns {object} - The symbol object relative to the user submitted number
 */
function requestSymbol(symbols){
    let symbolNum = -1;
    do {
        symbolNum = prompt('\nWhat symbol will you play?\n'
                                + 'Type 1 for Rock\n'
                                + 'Type 2 for Paper\n'
                                + 'Type 3 for Scissors\n\n');

    } while (!symbols.includes(symbols[symbolNum -1]))
    return symbols[symbolNum - 1];
}

/**
 * 
 * @returns {boolean} - User's desire to play another game
 */
function requestPlay(){
    let input;
    do {
        input = prompt('Play again? Type y or n.\n')

    } while(input !== 'y' && input !== 'n')

    return (input === 'y') ? true : false;
}

/** 
*
* @param {object} userSymbol 
* @param {object} compSymbol
* 
**/
function endGame(userSymbol, compSymbol) {

    console.log('\nYou played ' + userSymbol.string);
    console.log('Computer played ' + compSymbol.string + '\n');

    let userNum = userSymbol.num;
    let compNum = compSymbol.num;

    if (userNum === compNum) console.log('It\'s a draw');
    else if (userNum + 1 === compNum) console.log('Player wins');
    else if (userNum - 2 === compNum) console.log('Player wins');
    else console.log('Computer wins');
}

module.exports = { playGame, requestSymbol, randNum, endGame };