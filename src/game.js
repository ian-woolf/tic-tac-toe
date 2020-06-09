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

    _playMove(token, row, col) {
        this._state[row][col] = token;
    }

    complete() {
        // play a game to completion from the current state
        while(!this.gameIsOver(this._state)) {
            let moveOne = this._playerOne.play(this._state, 'o');
            this._playMove('o', moveOne.row, moveOne.col);

            if(!this.gameIsOver(this._state)) {
                let moveTwo = this._playerTwo.play(this._state, 'x');
                this._playMove('x', moveTwo.row, moveTwo.col);
            }
        }

        console.log(this._state);
    }

    // possible TODO:
    // - method to play a pair of moves (one for each player)
    // - method to play a single move (more complex, as we will need to maintain state or infer it on the way in)

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