/*
The game class represents a single game of tic-tac-toe.
It stores the current state of the board and two players.
*/

module.exports = class Game {
    constructor(initialState, PlayerOne, PlayerTwo) {
        if (this.stateIsValid(initialState)) {
            this._state = initialState;
        }
        else {
            throw new Error('Invalid state provided');
        }
        this._playerOne = PlayerOne;
        this._playerTwo = PlayerTwo;
    }

    // possible TODO:
    // having setters for the players would allow me to swap them in and out if I was so inclined

    get state() {
        return this._state;
    }

    stateIsValid(state) {
        // TODO
        /* some things to test:
         - state is a 3x3 array
         - all elements are 'o', 'x' or undefined
         - number of noughts and crosses are within 1 of each other */

        return true;
    }

    gameIsOver(state) {
        // TODO
        // need to detect winning states
        // for now, just detect 'full' state as a backstop
        let squares = state.flat();
        let noughts = squares.filter(el => el === 'o').length;
        let crosses = squares.filter(el => el === 'x').length;

        return (noughts + crosses) === 9;
    }
}