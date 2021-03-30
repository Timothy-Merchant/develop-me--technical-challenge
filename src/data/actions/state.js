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

    // Set the first round to contain all the games.
    let rounds = [{ games: [...mergedGames] }];

    //Add a round object for each of the rounds to follow.
    let games = mergedGames.length;

    while (games > 1) {
        games = games / 2;

        //Populate the round object with empty games, so we can populate the display
        let newRoundGames = [];

        for (let i = 0; i < games; i++) {
            newRoundGames.push({
                player1: "",
                player2: "",
                deuce: 0,
                service: 1,
                complete: 0
            })
        }

        rounds.push({ games: [...newRoundGames] })
    }


    // Start the game with the games and rounds set up
    return {
        type: "START_GAME",
        games: mergedGames,
        rounds: rounds,
    }
}

export const deletePlayer = (data) => {

    return {
        type: "DELETE_PLAYER",
        index: data
    }
}