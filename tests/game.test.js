const Game = require('../src/game.js');
const states = require('../src/states.js');

describe(`game class`, () => {
    test(`constructor`, () => {
        let initialState = states.empty;
        let playerOne = {};
        let playerTwo = {};
        let game = new Game(initialState, playerOne, playerTwo);
        expect(game).toBeInstanceOf(Game);
    })
})
