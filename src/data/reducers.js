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


const endGame = (state, { winner, prevRound }) => {

    // Update the final game's score to rerender the finals score display
    // const newRounds = [...state.rounds];
    // newRounds[round.id - 1].games[0] = { ...round.games[0] };

    return {
        ...state,
        gameConcluded: true,
        rounds: state.rounds.map((round) => round.id === prevRound.id ? { ...prevRound } : round),
        champion: winner
    }
}

// , match in parameters for MatchBox
const setupNewRound = (state, { newRound, currentRound }) => {

    return {
        ...state,
        rounds: state.rounds.map((round) =>
            round.id === newRound.id ? { ...newRound } :
                round.id === currentRound.id ? { ...currentRound } : round),
        currentRound: { ...newRound },
        currentGame: { ...newRound.games[0] },

        // Update the previous round and new current round
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
        case "BEGIN_TOURNAMENT": return {
            ...state,
            gameStarted: true,
            rounds: action.tournament.rounds,
            games: action.tournament.games,
            currentRound: action.currentRound,
            currentGame: action.currentGame
        };
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