const deletePlayer = (state, { index }) => ({
    ...state,
    players: state.players.filter((player, i) => index !== i)
})

const increaseScore = (state, action) => {

    const updatedGame = { ...state.currentGame }

    action.ID === 1 ?
        updatedGame.player1.score += 1 :
        updatedGame.player2.score += 1;

    return {
        ...state,
        currentGame: updatedGame,
    }
}

const setupNewRound = (state, { roundID, round }) => {

    // Update the rounds with the current round's game scores to rerender display
    const newRounds = [...state.rounds];
    newRounds[roundID].games = round.games;

    return {
        ...state,
        currentRound: newRounds[roundID],
        currentGame: newRounds[roundID].games[0],
        rounds: newRounds
    }
}

const endGame = (state, { winner, round }) => {

    // Update the final game's score to rerender the finals score display
    const newRounds = [...state.rounds];
    newRounds[0].games[0] = round.games[0];

    return {
        ...state,
        gameConcluded: true,
        rounds: newRounds,
        champion: winner
    }
}

const startNewMatch = (state, { match }) => {

    const roundLength = state.currentRound.games.length - 1
    const games = { ...state.currentRound.games };
    const nextGame = games[match.id + 1];

    console.log(roundLength)
    console.log(games)
    console.log(nextGame)

    return {
        ...state
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "START_GAME": return {
            ...state,
            gameStarted: true,
            rounds: action.rounds,
            games: action.games,
            currentRound: action.rounds[0],
            currentGame: action.games[0]
        }
        case "CREATE_PLAYER": return {
            ...state,
            players: [...state.players, action.newPlayer]
        };
        case "DELETE_PLAYER": return deletePlayer(state, action);
        case "INCREASE_SCORE": return increaseScore(state, action);
        case "END_MATCH": return startNewMatch(state, action);
        case "NEW_ROUND": return setupNewRound(state, action);
        case "END_GAME": return endGame(state, action);
        default: return state;
    }
}

export default reducer