export const createPlayer = (data) => {
    return {
        type: "CREATE_PLAYER",
        newPlayer: data
    }
}

export const beginTournament = (data) => {

    const tournament = data[0];
    const rounds = [...data[1]];
    const games = [...data[2]];
    const players = [...data[3]];

    const newTournament = {
        id: tournament.id,
        rounds: rounds.map(round => ({
            ...round,
            games: games.filter(game => (game.round_id === round.id)).map
                (game => ({ ...game, players: players.filter(player => (player.game_id === game.id)) }))
        })),
        games: games.map(game => ({ ...game, players: players.filter(player => (player.game_id === game.id)) }))
    }

    const currentRound = newTournament.rounds[0];
    const currentGame = newTournament.games[0];

    return {
        type: "BEGIN_TOURNAMENT",
        tournament: { ...newTournament },
        currentRound: { ...currentRound },
        currentGame: { ...currentGame }
    }
}

export const deletePlayer = (data) => {

    return {
        type: "DELETE_PLAYER",
        index: data
    }
}

export const updateScore = (player, IDs) => {

    return {
        type: "INCREASE_SCORE",
        player: player
    }
}

export const finishMatch = ({ data }) => {

    return {
        type: "END_MATCH",
        match: { ...data[0] },
        players: { ...data[1] }
    }
}

export const endRound = (data) => {

    const currentRound = { ...data.currentRound }
    const currentGame = { ...data.updatedGame }
    console.log(currentGame);

    const newPlayers = makeNewGames(currentRound.games.map(game => game.players[0].won === 1 ? game.players[0] : game.players[1]));

    return {
        type: "NEW_ROUND",
        newPlayer1s: [...newPlayers.player1s],
        newPlayer2s: [...newPlayers.player2s],
        currentRound: { ...currentRound },
        match: { ...currentGame }
    }
}


export const endGame = (round) => {

    // Determine the tournament champion (winner of the final)
    const winner = round.games[0].players[0].won === 1 ? round.games[0].players[0] : round.games[0].players[1]

    return {
        type: "END_GAME",
        winner: winner,
        prevRound: round,
    }
}

// HELPER FUNCTIONS

const makeNewGames = (newPlayers) => {

    // Reset score and won for players moving to next round
    let players = newPlayers.map((player, index) => ({ ...player, won: 0, score: 0 }))

    // Slice the array of names into two halves, then create new player objects using the passed in names
    let half = Math.floor(players.length / 2)
    let player1s = players.slice(0, half).map(player => player.name);
    let player2s = players.slice(half, players.length).map(player => player.name);

    return { player1s, player2s }
}