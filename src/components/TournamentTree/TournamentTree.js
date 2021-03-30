import '../../styles/TournamentTree.scss';
import PairingRow from '../PairingRow';

const TournamentTree = ({ gameStarted, games, rounds }) => {

    return (
        gameStarted ?
            <div className="TournamentTree__Left">
                {rounds.map((round, index) => (
                    <div key={index} className="TournamentTree__QuarterFinals">
                        <PairingRow />
                    </div>
                ))}
            </div> :
            <></>
    );
}

export default TournamentTree;
