var expect = require("chai").expect;

const { playGame, requestSymbol, randNum, endGame } = require('../src/rockPaperScissors.js');

describe('removeEventListener test', () => {
    it('should confirm the removeEventListener function is working', () => {
        
    });
})


describe('endGame function', () => {
    it('should return \'Player wins\' when given Rock, Scissors', () => {
        expect(endGame(1,2)).to.equal('Player wins');
    });

    it('should return \'Player wins\' when given Scissors, Paper', () => {
        expect(endGame(2,3)).to.equal('Player wins');
    });

    it('should return \'Player wins\' when given Paper, Rock', () => {
        expect(endGame(3,1)).to.equal('Player wins');
    });

    it('should return \'Computer wins\' when given Scissors, Rock', () => {
        expect(endGame(2,1)).to.equal('Computer wins');
    });

    it('should return \'Computer wins\' when given Paper, Scissors', () => {
        expect(endGame(3,2)).to.equal('Computer wins');
    });

    it('should return \'Computer wins\' when given Rock, Paper', () => {
        expect(endGame(1,3)).to.equal('Computer wins');
    });

    it('should return \'It\'s a draw\' when given Rock, Rock', () => {
        expect(endGame(1,1)).to.equal('It\'s a draw');
    });

    it('should return \'It\'s a draw\' when given Scissors, Scissors', () => {
        expect(endGame(2,2)).to.equal('It\'s a draw');
    });

    it('should return \'It\'s a draw\' when given Paper, Paper', () => {
        expect(endGame(3,3)).to.equal('It\'s a draw');
    });
});