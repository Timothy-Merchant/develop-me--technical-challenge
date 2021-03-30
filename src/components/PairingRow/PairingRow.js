import '../../styles/PairingRow.scss';
import Pairing from '../Pairing';

const PairingRow = ({ round, roundNumber }) => {

    return (
        <>
            <div className="PairingRow">
                <h1 className="PairingRow__title">Round {roundNumber + 1}</h1>
                {round.games.map((game, index) => (
                    <Pairing game={game} key={index} />
                ))}
            </div>
        </>
    );
}

export default PairingRow;
