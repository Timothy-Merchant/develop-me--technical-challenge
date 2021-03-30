import '../../styles/PairingRow.scss';
import Pairing from '../Pairing';

const PairingRow = ({ endRound, round, roundNumber }) => {

    const completeRound = () => {

        const testRound = { ...round, complete: true };

        for (let i = 0; i < testRound.games.length; i++) {
            if (testRound.games[i].complete !== true) {

                testRound.games[i] = {
                    ...testRound.games[i],
                    complete: true
                };
            }
            testRound.games[i].player1 = {
                ...testRound.games[i].player1,
                won: 1
            };
        }

        endRound(testRound)
    }

    return (
        <>
            <div className="PairingRow">
                <h1 className="PairingRow__title">Round {roundNumber + 1}</h1>
                {round.games.map((game, index) => (
                    <Pairing game={game} key={index} />
                ))}
                <button onClick={completeRound}>Complete Round</button>
            </div>
        </>
    );
}

export default PairingRow;
