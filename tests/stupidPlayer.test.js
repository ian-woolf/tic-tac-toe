const StupidPlayer = require('../src/stupidPlayer.js');
const states = require('../src/states.js');

describe(`stupid player`, () => {

    let stupidPlayer = new StupidPlayer();

    test(`should pick the first available square, regardless of token`, () => {
        expect(stupidPlayer.play(states.empty, 'o')).toMatchObject({row: 0, col: 0});
        expect(stupidPlayer.play(states.empty, 'x')).toMatchObject({row: 0, col: 0});

        expect(stupidPlayer.play(states.topRowFull, 'x')).toMatchObject({row: 1, col: 0});

        expect(stupidPlayer.play(states.leftColFull, 'x')).toMatchObject({row: 0, col: 1});

        expect(() => { stupidPlayer.play(states.stalemate, 'x') }).toThrow();

    })
})
