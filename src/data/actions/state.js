export const createPlayer = (data) => {
    return {
        type: "CREATE_PLAYER",
        newPlayer: data
    }
}

export const startGame = (players) => {

    // Slice the array of names into two halves, then create new player objects using the passed in names
    let half = Math.floor(players.length / 2)
    let player1s = players.slice(0, half).map((player, index) =>
    ({
        name: player,
        score: 0,
        won: 0
    }));
    let player2s = players.slice(half, players.length).map((player, index) =>
    ({
        name: player,
        score: 0,
        won: 0
    }));

    // Create an array of new 'game' objects that contain two player objects for each competitor
    let mergedGames = player1s.map((player1, index) => ({
        player1: player1,
        player2: player2s[index],
        deuce: 0,
        service: 1,
        complete: 0
    }))

    // Calculate the number of rounds based on the number of games
    let rounds = mergedGames.length;
    let roundCounter = 1;
    let roundsArray = [1];

    while (rounds > 1) {
        rounds = rounds / 2;
        roundCounter += 1;
        roundsArray = [...roundsArray, roundCounter];
    }

    // Start the game with the games and number of rounds set up
    return {
        type: "START_GAME",
        games: mergedGames,
        rounds: roundsArray
    }
}

export const deletePlayer = (data) => {

    return {
        type: "DELETE_PLAYER",
        index: data
    }
}