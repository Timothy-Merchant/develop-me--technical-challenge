import '../../styles/TournamentTree.scss';
import Pairing from '../Pairing';

const TournamentTree = ({ gameStarted, games, rounds }) => {

    const roundNaming = (index, length) => (
        index === length ? "Final" :
            index === length - 1 ? "Semi Finals" :
                index === length - 2 ? "Quarter Finals" : `Round ${index}`
    )

    return (
        gameStarted ?
            <div className="TournamentTree">
                {rounds.map((round, index) => (
                    <div key={index} style={{ display: "flex", flexDirection: "column" }}>
                        <div className="PairingRow">
                            <h1 className="PairingRow__title">{roundNaming(index + 1, rounds.length)}</h1>
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
