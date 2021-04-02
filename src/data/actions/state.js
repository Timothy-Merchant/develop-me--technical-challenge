export const createPlayer = (data) => {
    return {
        type: "CREATE_PLAYER",
        newPlayer: data
    }
}

export const startGameS = (players) => {

    console.log(players);
    // const newGames = makeNewGames(players);

    // // Set the first round to contain all the games.
    // let rounds = [{ id: 1, games: newGames, complete: false }];

    // //Add a round object for each of the rounds to follow.
    // let games = newGames.length;
    // let idCounter = 1;

    // while (games > 1) {
    //     games = games / 2;

    //     //Populate the round object with empty games, so we can populate the display
    //     let newRoundGames = [];

    //     for (let i = 0; i < games; i++) {
    //         newRoundGames.push({
    //             player1: "",
    //             player2: "",
    //             deuce: 0,
    //             service: 1,
    //             complete: 0
    //         })
    //     }

    //     idCounter += 1;

    //     rounds.push({ id: idCounter, games: [...newRoundGames], complete: false })
    // }

    // // Start the game with the games and rounds set up
    return {
        type: "START_GAME",
        // games: newGames,
        // rounds: rounds,
    }
}

export const beginTournament = (data) => {

    const tournament = data[0];
    const rounds = [...data[1]];
    const games = [...data[2]];
    const players = [...data[3]];

    const newTournament = {
        tournament: tournament,
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

export const increaseScore = (data) => {

    return {
        type: "INCREASE_SCORE",
        player: data.player,
        ID: data.ID
    }
}

export const completeMatch = (data) => {
    return {
        type: "END_MATCH",
        match: data
    }
}

export const endRound = ({ currentRound, currentGame }) => {

    const newGames = makeNewGames(currentRound.games.map(game => game.player1.won === 1 ? game.player1 : game.player2));

    const newRound = {
        id: currentRound.id,
        games: newGames,
        complete: false
    }

    console.log(newRound.id)

    return {
        type: "NEW_ROUND",
        newRound: newRound,
        match: currentGame
    }
}


export const endGame = (round) => {

    // Determine the tournament champion (winner of the final)
    const winner = round.games[0].player1.won === 1 ? round.games[0].player1 : round.games[0].player2

    return {
        type: "END_GAME",
        winner: winner,
        round: round,
    }
}

// HELPER FUNCTIONS

const makeNewGames = (newPlayers) => {

    // Reset score and won for players moving to next round
    let players = newPlayers.map((player, index) => ({ ...player, won: 0, score: 0 }))

    // Slice the array of names into two halves, then create new player objects using the passed in names
    let half = Math.floor(players.length / 2)
    let player1s = players.slice(0, half);
    let player2s = players.slice(half, players.length);

    // Create an array of new 'game' objects that contain two player objects for each competitor
    let mergedGames = player1s.map((player1, index) => ({
        id: index,
        player1: player1,
        player2: player2s[index],
        deuce: 0,
        service: 1,
        complete: 0
    }))

    return mergedGames
}


// API response functions

export const showRounds = (data) => {

    console.log(data);

    return {
        type: "SHOW_ROUNDS",
        rounds: data
    }
}