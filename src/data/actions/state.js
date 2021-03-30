export const createPlayer = (data) => {
    return {
        type: "CREATE_PLAYER",
        newPlayer: data
    }
}

export const startGame = (players) => {

    const newGames = makeNewGames(players);

    // Set the first round to contain all the games.
    let rounds = [{ id: 1, games: newGames, complete: false }];

    //Add a round object for each of the rounds to follow.
    let games = newGames.length;
    let idCounter = 1;

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

        idCounter += 1;

        rounds.push({ id: idCounter, games: [...newRoundGames], complete: false })
    }

    console.log(rounds);

    // Start the game with the games and rounds set up
    return {
        type: "START_GAME",
        games: newGames,
        rounds: rounds,
    }
}

export const endRound = (data) => {

    const newGames = makeNewGames(data.games.map(game => game.player1.won === 1 ? game.player1 : game.player2));

    const newRound = {
        id: data.id,
        games: newGames,
        complete: false
    }

    console.log(newGames)

    return {
        type: "NEW_ROUND",
        roundID: data.id,
        round: newRound
    }
}

export const deletePlayer = (data) => {

    return {
        type: "DELETE_PLAYER",
        index: data
    }
}


const makeNewGames = (players) => {
    // Slice the array of names into two halves, then create new player objects using the passed in names
    let half = Math.floor(players.length / 2)
    let player1s = players.slice(0, half);
    let player2s = players.slice(half, players.length);

    // Create an array of new 'game' objects that contain two player objects for each competitor
    let mergedGames = player1s.map((player1, index) => ({
        player1: player1,
        player2: player2s[index],
        deuce: 0,
        service: 1,
        complete: 0
    }))

    return mergedGames
}