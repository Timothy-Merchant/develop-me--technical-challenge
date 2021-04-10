import '../../styles/TournamentTree.scss';
import Pairing from './Pairing';

/**
 * This component simply displays a graphical tree of the tournament Pairing components.
 * It is staggered horizontally or displayed in a column depending on screen size. 
 */

const TournamentTree = ({ gameStarted, games, rounds }) => {

    // This function translates the current round relative to total rounds to a textual name.
    const roundName = (index, length) => (
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
                            <h1 className="PairingRow__title">{roundName(index + 1, rounds.length)}</h1>
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
