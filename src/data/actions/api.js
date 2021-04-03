import axios from '../../axios'
import { beginTournament } from "./state";

export const startGame = (players) => {

    /**
     * This logic is for sending information to the API to setup the game on the backend
     * Following this, the backend will return the tournament, rounds, games and players it has stored
     * We can then use these respective IDs to update the API as the game progresses.
     * There are two sections to this function, the logic for assembling new games, and the dispatch.
     */

    // 1. Logic for assembling new games.

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
                round_id: idCounter,
                id: i,
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

    // 2. Dispatch to API

    return (dispatch) => {

        // Send up our created rounds, games and associated players in JSON format
        axios.post("/tournaments", {
            "rounds": { ...rounds },
        }).then(({ data }) => {
            dispatch(beginTournament(data));
        })
    }
}

const makeNewGames = (newPlayers) => {

    // Reset score and won for players moving to next round
    let players = newPlayers.map((player, index) => ({ ...player, won: 0, score: 0 }))

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