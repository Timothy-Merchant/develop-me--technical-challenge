import '../../styles/TournamentTree.scss';
import PairingRow from '../PairingRow';

const TournamentTree = ({ gameStarted, games }) => {



    return (
        gameStarted ?
            <div className="TournamentTree__Left">
                {/* The number of Pairings will vary based on amount of players decided by user.*/}
                {/* Will support 2, 4, 6, 8 & 10. */}
                <div className="TournamentTree__QuarterFinals">
                    <PairingRow title={"Quarter Finals"} />
                </div>
                <div className="TournamentTree__SemiFinals">
                    <PairingRow title={"Semi Finals"} />
                </div>
                <div className="TournamentTree__Finals">
                    <PairingRow title={"Finals"} />
                </div>
            </div> :
            <></>
    );
}

export default TournamentTree;
