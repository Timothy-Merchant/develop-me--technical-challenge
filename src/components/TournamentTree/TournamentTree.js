import '../../styles/TournamentTree.scss';
import PairingRow from '../PairingRow';

const TournamentTree = () => {


    return (
        <div className="TournamentTree__Left">
            {/* The number of Pairings will vary based on amount of players decided by user.*/}
            {/* Will support 2, 4, 6, 8 & 10. */}
            <PairingRow matches={["match", "match", "match", "match"]} title={"Quarter Finals"} />
            <PairingRow matches={["match", "match"]} title={"Semi Finals"} />
            <PairingRow matches={["match"]} title={"Finals"} />
        </div>
    );
}

export default TournamentTree;
