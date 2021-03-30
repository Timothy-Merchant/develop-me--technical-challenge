const initial = {
    gameStarted: false,
    gameConcluded: false,
    players: [],
    games: [],
    rounds: [],
    errors: {
        invalidName: false,
        tooFewPlayers: false,
        unevenPlayers: false
    },
    champion: {}
}

export default initial