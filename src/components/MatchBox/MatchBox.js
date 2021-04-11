import '../../styles/MatchBox.scss';
import Player from './Player';
import { Component } from 'react';
import TournamentTree from '../TournamentTree/';
import { Redirect } from "react-router-dom";

/**
 * This component displays the individual Match information for each match.
 * It displays two Player components, representing each player, as well as the TournamentTree component for displaying the results.
 */

class MatchBox extends Component {

    constructor(props) {
        super(props)

        this.completeMatch = this.completeMatch.bind(this);
    }

    // Handles API calls for ending the round, game or tournament if either player has won.
    componentDidUpdate() {

        const { disableButtons, currentGame, currentRound, tournamentID, endRound, rounds, endTournament, nextMatch, gameConcluded } = this.props;

        if ((currentGame.players[0].won === 1 || currentGame.players[1].won === 1) && !gameConcluded) {

            disableButtons();

            const updatedGame = { ...currentGame };

            currentRound.id === rounds[rounds.length - 1].id && currentGame.id === currentRound.games[currentRound.games.length - 1].id ?
                endTournament({
                    currentRound: currentRound,
                    updatedGame: updatedGame,
                    tournamentID: tournamentID,
                    roundID: currentRound.id
                }) :
                currentGame.id === currentRound.games[currentRound.games.length - 1].id ?
                    endRound({
                        currentRound: currentRound,
                        updatedGame: updatedGame,
                        tournamentID: tournamentID,
                        roundID: currentRound.id,
                    }) :
                    nextMatch({
                        game: updatedGame,
                        tournamentID: tournamentID,
                        roundID: currentRound.id,
                    })
        }
    }

    // This function auto completes a match
    completeMatch = () => {

        const { currentGame, currentRound, tournamentID, endRound, rounds, endTournament, nextMatch } = this.props;

        const updatedGame = { ...currentGame };
        updatedGame.players[0].won = 1;
        updatedGame.players[1].won = 2;

        currentRound.id === rounds[rounds.length - 1].id && currentGame.id === currentRound.games[currentRound.games.length - 1].id ?
            endTournament({
                currentRound: currentRound,
                updatedGame: updatedGame,
                tournamentID: tournamentID,
                roundID: currentRound.id
            }) :
            currentGame.id === currentRound.games[currentRound.games.length - 1].id ?
                endRound({
                    currentRound: currentRound,
                    updatedGame: updatedGame,
                    tournamentID: tournamentID,
                    roundID: currentRound.id,
                }) :
                nextMatch({
                    game: updatedGame,
                    tournamentID: tournamentID,
                    roundID: currentRound.id,
                })
    }

    // This function calculates the textual title heading for each individual match.
    // eg. Quarter Finals, Match 2/4
    calculateTitle = () => {
        let totalMatches = this.props.currentRound.games.length;
        let currentMatch = 0;

        let totalRounds = this.props.rounds.length;
        let currentRoundID = 0;

        this.props.rounds.forEach((round, index) => {
            if (this.props.currentRound.id === round.id) {
                currentRoundID = index + 1;
                round.games.forEach((game, index) => {
                    if (this.props.currentGame.id === game.id) {
                        currentMatch = index + 1;
                    }
                })
            }
        })

        let currentRoundName = currentRoundID === totalRounds ? "Final" :
            currentRoundID === totalRounds - 1 ? "Semi Finals" :
                currentRoundID === totalRounds - 2 ? "Quarter Finals" : `Round ${currentRoundID}`

        return currentRoundName === "Final" ?
            `${currentRoundName}` :
            `${currentRoundName}, Match ${currentMatch}/${totalMatches}`;
    }

    render() {

        const { increaseScore, currentGame, currentRound, tournamentID, gameConcluded } = this.props;

        return (
            gameConcluded ? <Redirect to="develop-me--technical-challenge/victory" /> :
                <div className="pageStyle">
                    <div className="MatchBox__Wrapper">
                        <h1 className="MatchBox__Header">{this.calculateTitle()}</h1>
                        <div className="MatchBox__Players">
                            <Player increaseScore={(player) => increaseScore({
                                player1or2: 1,
                                player: player,
                                game: currentGame,
                                tournamentID: tournamentID,
                                roundID: currentRound.id,
                                gameID: player.game_id,
                                playerID: player.id,
                            })} player={currentGame.players[0]} />
                            <p className="MatchBox__Versus">VS</p>
                            <Player increaseScore={(player) => increaseScore({
                                player1or2: 2,
                                player: player,
                                game: currentGame,
                                tournamentID: tournamentID,
                                roundID: currentRound.id,
                                gameID: player.game_id,
                                playerID: player.id,
                            })} player={currentGame.players[1]} />
                        </div>
                        <div className="MatchBox__GameAlerts">
                            <p className="MatchBox__Alert">{currentGame.service === 0 ? "Service" : ""}</p>
                            <p className="MatchBox__Alert--Deuce">{currentGame.deuce === 1 ? "Deuce" : ""}</p>
                            <p className="MatchBox__Alert">{currentGame.service === 1 ? "Service" : ""}</p>
                        </div>
                        <button className="MatchBox__Button" onClick={() => this.completeMatch()}>Auto Complete Match</button>
                    </div>
                    <TournamentTree />
                </div>
        )
    }

}

export default MatchBox;
