const initial = {
    gameStarted: false,
    gameConcluded: false,
    tournaments: [],
    loaded: false,
    tournamentID: 0,
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
    champion: ""
}

export default initial