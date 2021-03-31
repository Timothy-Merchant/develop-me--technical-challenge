import '../../styles/MatchBox.scss';
import Player from '../Player';

const MatchBox = ({ nextMatch, endRound, currentGame, currentRound, gameStarted, increaseScore }) => {


    const completeMatch = () => {
        let totalMatches = currentRound.games.length - 1
        currentGame.id === totalMatches ?
            endRound(currentRound) :
            nextMatch(currentGame)
    }

    return (
        gameStarted ?
            <div className="MatchBox__Wrapper">
                <h1 className="MatchBox__Header">Round {currentRound.id}</h1>
                <div className="MatchBox__Players">
                    <Player increaseScore={(player) => increaseScore({ player: player, ID: 1 })} player={currentGame.player1} />
                    <p className="MatchBox__Versus">VS</p>
                    <Player increaseScore={(player) => increaseScore({ player: player, ID: 2 })} player={currentGame.player2} />
                </div>
                <div className="MatchBox__GameAlerts">
                    <p className="MatchBox__Alert">{currentGame.service === 1 ? "Service" : ""}</p>
                    <p className="MatchBox__Alert">{currentGame.deuce === 1 ? "Deuce" : ""}</p>
                    <p className="MatchBox__Alert">{currentGame.service === 2 ? "Service" : ""}</p>
                </div>
                <button onClick={completeMatch}>Complete Match</button>
            </div> :
            null
    );
}

export default MatchBox;
