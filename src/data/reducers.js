const deletePlayer = (state, { index }) => ({
    ...state,
    players: state.players.filter((player, i) => index !== i)
})

const setupNewRound = (state, { roundID, round }) => {

    // Update the rounds with the current round's game scores to rerender display
    const newRounds = [...state.rounds];
    newRounds[roundID].games = round.games;

    return {
        ...state,
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

const reducer = (state, action) => {
    switch (action.type) {
        case "START_GAME": return {
            ...state,
            gameStarted: true,
            rounds: action.rounds,
            games: action.games
        }
        case "CREATE_PLAYER": return {
            ...state,
            players: [...state.players, action.newPlayer]
        };
        case "DELETE_PLAYER": return deletePlayer(state, action);
        default: return state;
        case "NEW_ROUND": return setupNewRound(state, action);
        case "END_GAME": return endGame(state, action);
    }
}

export default reducer