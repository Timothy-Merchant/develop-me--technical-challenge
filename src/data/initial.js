const initial = {
    gameStarted: false,
    gameConcluded: false,
    players: [],
    games: [],
    rounds: [],
    currentRound: {},
    currentGame: {},
    errors: {
        invalidName: false,
        tooFewPlayers: false,
        unevenPlayers: false
    },
    champion: {}
}

export default initial