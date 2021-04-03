const deletePlayer = (state, { index }) => ({
    ...state,
    players: state.players.filter((player, i) => index !== i)
})

const increaseScore = (state, action) => {

    const updatedGame = { ...state.currentGame }

    action.ID === 1 ?
        updatedGame.players[0].score += 1 :
        updatedGame.players[1].score += 1;

    return {
        ...state,
        currentGame: { ...updatedGame }
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

// , match in parameters for MatchBox
const setupNewRound = (state, { newPlayer1s, newPlayer2s, currentRound, match }) => {

    console.log(newPlayer1s)
    console.log(newPlayer2s)

    const nextRound = state.rounds.filter((round, index) => round.id === currentRound.id + 1)[0];

    const newGames = nextRound.games.map((game, index) => {
        const players = game.players;
        players[0].name = newPlayer1s[index];
        players[1].name = newPlayer2s[index];
        return { ...game, players: players }
    })

    nextRound.games = [...newGames];

    return {
        ...state,
        rounds: state.rounds.map((round) => round.id === nextRound.id ? { ...nextRound } : { ...round }),
        currentRound: { ...nextRound }
    }

    // This code simply updates the names of the players for the next series of rounds


    // return {
    //     ...state,
    //     rounds: state.rounds.map((round) =>
    //         round.id === newRound.id ? { ...newRound } :
    //             round.id === currentRound.id ? { ...currentRound } : round),
    //     currentRound: { ...newRound },
    //     currentGame: { ...newRound.games[0] },
    // }
}

const startNewMatch = (state, { match }) => {

    return {
        ...state,
        rounds: state.rounds.map((round) => round.id === match.round_id ?
            { ...round, games: round.games.map((game) => game.id === match.id ? { ...match } : { ...game }) }
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