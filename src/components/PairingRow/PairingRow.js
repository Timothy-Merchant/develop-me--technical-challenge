import '../../styles/PairingRow.scss';
import Pairing from '../Pairing';

const PairingRow = ({ games, title }) => {
    return (
        <>
            <div className="PairingRow">
                <h1 className="PairingRow__title">{title}</h1>
                {games.map((game, index) => (
                    <Pairing game={game} key={index} />
                ))}
            </div>
        </>
    );
}

export default PairingRow;
