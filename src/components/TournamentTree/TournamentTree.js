import '../../styles/TournamentTree.scss';
import Pairing from '../Pairing';

const TournamentTree = ({ gameStarted, games, rounds, endRound, endGame }) => {

    return (
        gameStarted ?
            <div className="TournamentTree">
                {rounds.map((round, index) => (
                    <div key={index} style={{ display: "flex", flexDirection: "column" }}>
                        <div className="PairingRow">
                            <h1 className="PairingRow__title">Round {round.id}</h1>
                            {round.games.map((game, index) => (
                                <Pairing game={game} key={index} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            :
            <></>
    );
}

export default TournamentTree;
