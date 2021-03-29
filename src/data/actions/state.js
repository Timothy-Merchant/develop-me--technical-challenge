export const createPlayer = (data) => {
    return {
        type: "CREATE_PLAYER",
        newPlayer: data
    }
}

export const startGame = (players) => {

    // Slice the array of player objects into two halves
    let half = Math.floor(players.length / 2)
    let player1s = players.slice(0, half);
    let player2s = players.slice(half, players.length);
    let games = player1s.map((player, index) => ({ name: player }));
    let games2 = player2s.map((player, index) => ({ name: player }));

    let mergedGames = games.map((game, index) => ({
        player1: game,
        player2: games2[index]
    }))

    return {
        type: "START_GAME",
        games: mergedGames
    }
}

export const deletePlayer = (data) => {

    return {
        type: "DELETE_PLAYER",
        index: data
    }
}