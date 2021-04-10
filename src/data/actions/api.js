import axios from '../../axios'
import { loadTournaments, finishTournament, beginTournament, updateScore, finishMatch, finishRound } from "./state";

/**
 * API Requests
 * 
 * GET /tournaments 
 * "getTournaments" Line 36
 * Gets the latest 50 tournaments from the API to 
 * display on the Tournaments page
 * 
 * POST /tournaments 
 * "startGame" Line 45
 * Sends the player information sent from GameForm, 
 * after separating players into a JSON arrangement of Rounds and Games.
 * 
 * PUT /tournaments/{tournament}/rounds/{round}/games/{game}/players/{player}
 * "increaseScore" Line 101
 * Update's the player's score, which the backend then uses to ascertain the game status 
 * (service, deuce, won etc.). Receives back the new game information and player information.
 * 
 * PUT /tournaments/{tournament}/rounds/{round}/games/{game} 
 * "completeMatch" Line 112
 * Update's the match information to 'complete' and stores the final result.
 * 
 * PUT /tournaments/{tournament}/rounds/{round}
 * "endRound" Line 123
 * Update the round to 'complete', as well as associated game information.
 * 
 * PUT /tournaments/{tournament}/rounds/{round}
 * "endTournament" Line 138
 * Similar to endRound, though this ends the entire tournament and sets the champion.
 * 
 */

export const getTournaments = () => {

    return (dispatch) => {
        axios.get("/tournaments").then(({ data }) => {
            dispatch(loadTournaments(data));
        })
    }
}

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

export const increaseScore = (data) => {

    return (dispatch) => {
        axios.put(`/tournaments/${data.tournamentID}/rounds/${data.roundID}/games/${data.gameID}/players/${data.playerID}`, {
            ...data
        }).then(({ data }) => {
            dispatch(updateScore(data))
        })
    }
}

export const completeMatch = (data) => {

    return (dispatch) => {
        axios.put(`/tournaments/${data.tournamentID}/rounds/${data.roundID}/games/${data.game.id}`, {
            ...data.game
        }).then(({ data }) => {
            dispatch(finishMatch({ data }))
        })
    }
}

export const endRound = (data) => {

    return (dispatch) => {
        axios.put(`/tournaments/${data.tournamentID}/rounds/${data.roundID}`, {
            ...data,
            currentRound: {
                ...data.currentRound,
                games: data.currentRound.games.map((game) => game.id === data.updatedGame.id ? { ...data.updatedGame } : { ...game })
            }
        }).then(({ data }) => {
            dispatch(finishRound(data))
        })
    }
}

export const endTournament = (data) => {

    return (dispatch) => {
        axios.put(`/tournaments/${data.tournamentID}/rounds/${data.roundID}`, {
            ...data,
            currentRound: {
                ...data.currentRound,
                games: data.currentRound.games.map((game) => game.id === data.updatedGame.id ? { ...data.updatedGame } : { ...game })
            }
        }).then(({ data }) => {

            return axios.put(`/tournaments/${data.data.tournament_id}`, {
                ...data.data
            }).then(({ data }) => {
                return dispatch(finishTournament(data));
            })
        })
    }
}

// Helper Functions

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