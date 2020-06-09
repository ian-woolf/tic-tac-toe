module.exports = {
    empty: [
        [...Array(3)],
        [...Array(3)],
        [...Array(3)]
    ],
    topRowFull: [
        ['o', 'x', 'o'],
        [...Array(3)],
        [...Array(3)]
    ],
    leftColFull: [
        ['o', undefined, undefined],
        ['x', undefined, undefined],
        ['o', undefined, undefined],
    ],
    stalemate: [
        ['o', 'x', 'o'],
        ['x', 'x', 'o'],
        ['o', 'o', 'x']
    ]
}