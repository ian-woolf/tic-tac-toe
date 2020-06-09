/*
The stupid player class is an AI player with the most basic algorithm I could think of
Just puts its token into the first empty square it finds
*/

const AIPlayer = require('./aiPlayer.js');

module.exports = class StupidPlayer extends AIPlayer {
    constructor() {
        super();
    }

    play(state, token) {
        for (let row = 0; row < state.length; row++) {
            for (let col = 0; col < state[0].length; col++) {
                if(!state[row][col]) {
                    return {row: row, col: col};
                }
            }
        }

        // really wouldn't expect the game to ask player to play in this scenario, but still
        throw new Error('no moves available');
    }

}