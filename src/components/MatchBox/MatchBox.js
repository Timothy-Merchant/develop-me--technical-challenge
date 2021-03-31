import '../../styles/MatchBox.scss';
import Player from '../Player';

const MatchBox = ({ currentGame, currentRound, gameStarted }) => {


    return (
        gameStarted ?
            <div className="MatchBox__Wrapper">
                <h1 className="MatchBox__Header">Round {currentRound.id}</h1>
                <div className="MatchBox__Players">
                    <Player currentGame={currentGame} />
                    <p className="MatchBox__Versus">VS</p>
                    <Player currentGame={currentGame} />
                </div>
                <div className="MatchBox__GameAlerts">
                    <p className="MatchBox__Alert">{currentGame.service === 1 ? "Service" : ""}</p>
                    <p className="MatchBox__Alert">{currentGame.deuce === 1 ? "Deuce" : ""}</p>
                    <p className="MatchBox__Alert">{currentGame.service === 2 ? "Service" : ""}</p>
                </div>
            </div> :
            null
    );
}

export default MatchBox;
