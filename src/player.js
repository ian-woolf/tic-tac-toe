/*
The player class is a parent class for all players
I expect there will be several different AI players, plus a human player
Stateless - just picks a move given a game state and a side ('o' or 'x')
*/

module.exports = class Player {
    constructor() {
        if (new.target === Player) {
            throw new Error("Cannot construct Player instances directly");
        }
    }

    play(state, token) {
        // will be implemented by child classes
    }
}