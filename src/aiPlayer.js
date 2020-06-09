/*
The AI player class is a parent class for all AI players
Stateless - just picks a move given a game state and a side ('o' or 'x')
*/

const Player = require('./player.js');

module.exports = class AIPlayer extends Player {
    constructor() {
        if (new.target === AIPlayer) {
            throw new Error("Cannot construct AIPlayer instances directly");
        }
        super();
    }

    play(state, token) {
        // will be implemented by child classes
    }
}