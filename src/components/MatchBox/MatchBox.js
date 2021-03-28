import '../../styles/MatchBox.scss';
import Player from '../Player';

const MatchBox = () => {
    return (
        <div className="MatchBox__Wrapper">
            <h1 className="MatchBox__Header">Quarter Finals - Round 1</h1>
            <div className="MatchBox__Players">
                <Player />
                <p className="MatchBox__Versus">VS</p>
                <Player />
            </div>
            <div className="MatchBox__GameAlerts">
                <p className="MatchBox__Alert">Service</p>
                <p className="MatchBox__Alert">Deuce</p>
                <p className="MatchBox__Alert">Service</p>
            </div>
        </div>
    );
}

export default MatchBox;
