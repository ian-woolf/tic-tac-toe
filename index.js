const Game = require('./src/game.js');
const StupidPlayer = require('./src/stupidPlayer.js');
const states = require('./src/states.js');

function main() {
    let playerOne = new StupidPlayer();
    let playerTwo = new StupidPlayer();
    let game = new Game(states.empty, playerOne, playerTwo);

    game.complete();
}

main();