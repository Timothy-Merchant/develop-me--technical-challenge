const deletePlayer = (state, { index }) => ({
    ...state,
    players: state.players.filter((player, i) => index !== i)
})

const setupNewRound = (state, { roundID, round }) => {

    const newRounds = [...state.rounds];
    newRounds[roundID].games = round.games;

    return {
        ...state,
        rounds: newRounds
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
        case "END_GAME": return {
            ...state,
            gameConcluded: true,
            champion: action.winner
        }
    }
}

export default reducer