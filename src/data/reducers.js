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


const endGame = (state, { winner, round }) => {

    // Update the final game's score to rerender the finals score display
    const newRounds = [...state.rounds];
    newRounds[round.id - 1].games[0] = { ...round.games[0] };

    return {
        ...state,
        gameConcluded: true,
        rounds: newRounds,
        champion: winner
    }
}

const setupNewRound = (state, { newRound, match }) => {

    const rounds = [...state.rounds];
    rounds[state.currentRound.id - 1].games[match.id] = { ...match };
    rounds[newRound.id].games = [...newRound.games];

    return {
        ...state,
        currentRound: rounds[newRound.id],
        currentGame: rounds[newRound.id].games[0],
        rounds: rounds
    }
}

const startNewMatch = (state, { match }) => {

    console.log(match);

    const games = { ...state.currentRound.games };
    const nextGame = games[match.id + 1];
    const rounds = [...state.rounds];
    rounds[state.currentRound.id - 1].games[match.id] = { ...match };

    return {
        ...state,
        currentGame: nextGame,
        rounds: rounds
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
        case "SHOW_ROUNDS": return console.log(action.rounds);
        default: return state;
    }
}

export default reducer