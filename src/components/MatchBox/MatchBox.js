import '../../styles/MatchBox.scss';
import Player from '../Player';

const MatchBox = ({ nextMatch, endRound, currentGame, currentRound, gameStarted, increaseScore, rounds, endTournament, tournamentID }) => {

    const completeMatch = () => {

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

    return (
        gameStarted ?
            <div className="MatchBox__Wrapper">
                <h1 className="MatchBox__Header">Round {currentRound.id}</h1>
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
                <button onClick={() => completeMatch()}>Complete Match</button>
            </div> :
            null
    );
}

export default MatchBox;
