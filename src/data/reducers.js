const increaseScore = (state, action) => {

    return {
        ...state,
        currentGame: {
            ...state.currentGame,
            players: state.currentGame.players.map((player) => action.player.id === player.id ? { ...action.player } : { ...player })
        }
    }
}

const endGame = (state, { winner, prevRound }) => {

    return {
        ...state,
        gameConcluded: true,
        rounds: state.rounds.map((round) => round.id === prevRound.id ? { ...prevRound } : round),
        champion: winner
    }
}

const setupNewRound = (state, { newPlayer1s, newPlayer2s, currentRound, match }) => {

    const nextRound = state.rounds.filter((round, index) => round.id === currentRound.id + 1)[0];

    const newGames = nextRound.games.map((game, index) => {
        const players = [...game.players];
        players[0].name = newPlayer1s[index];
        players[1].name = newPlayer2s[index];
        return { ...game, players: players }
    })

    return {
        ...state,
        rounds: state.rounds.map((round) =>
            round.id === nextRound.id ?
                { ...nextRound, games: [...newGames] } :
                round.id === match.round_id ?
                    { ...round, games: round.games.map((game) => game.id === match.id ? { ...match } : { ...game }) } : { ...round }),
        currentRound: { ...nextRound },
        currentGame: { ...nextRound.games[0] }
    }
}

const startNewMatch = (state, { match, players }) => {

    return {
        ...state,
        rounds: state.rounds.map((round) => round.id === match.round_id ?
            {
                ...round, games: round.games.map((game) => game.id === match.id ? {
                    ...match,
                    players: { ...players }
                } : { ...game })
            }
            : { ...round }),
        currentGame: state.currentRound.games.filter((game) => game.id === match.id + 1)[0],
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "CREATE_PLAYER": return {
            ...state,
            players: [...state.players, action.newPlayer]
        };
        case "DELETE_PLAYER": return {
            ...state,
            players: state.players.filter((player, i) => action.index !== i)
        };
        case "BEGIN_TOURNAMENT": return {
            ...state,
            gameStarted: true,
            tournamentID: action.tournament.id,
            rounds: action.tournament.rounds,
            currentRound: action.currentRound,
            currentGame: action.currentGame
        };
        case "INCREASE_SCORE": return increaseScore(state, action);
        case "END_MATCH": return startNewMatch(state, action);
        case "NEW_ROUND": return setupNewRound(state, action);
        case "END_GAME": return endGame(state, action);
        default: return state;
    }
}

export default reducer