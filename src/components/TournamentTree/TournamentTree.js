import '../../styles/TournamentTree.scss';
import Pairing from '../Pairing';

const TournamentTree = ({ gameStarted, games, rounds, endRound, endGame }) => {

    // TEST FUNCTION FOR COMPLETING ROUNDS
    const completeRound = (round) => {

        const testRound = { ...round, complete: true };

        for (let i = 0; i < testRound.games.length; i++) {
            if (testRound.games[i].complete !== true) {

                testRound.games[i] = {
                    ...testRound.games[i],
                    complete: true
                };
            }

            testRound.games[i].player1 = {
                ...testRound.games[i].players[0],
                won: 1
            };

            testRound.games[i].player2 = {
                ...testRound.games[i].players[1],
                won: 2
            };
        }

        // If this is the last game, then end the game, if not, end the round
        testRound.games.length < 2 ? endGame(testRound) : endRound(testRound)
    }

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
                        <button onClick={() => completeRound(round)}>Complete Round</button>
                    </div>
                ))}
            </div>
            :
            <></>
    );
}

export default TournamentTree;
