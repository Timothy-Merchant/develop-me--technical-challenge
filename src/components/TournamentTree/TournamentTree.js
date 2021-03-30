import '../../styles/TournamentTree.scss';
import PairingRow from '../PairingRow';

const TournamentTree = ({ gameStarted, games, rounds }) => {

    return (
        gameStarted ?
            <div className="TournamentTree">
                {rounds.map((round, index) => (
                    <div key={index}>
                        <PairingRow round={round} roundNumber={index} />
                    </div>
                ))}
            </div> :
            <></>
    );
}

export default TournamentTree;
