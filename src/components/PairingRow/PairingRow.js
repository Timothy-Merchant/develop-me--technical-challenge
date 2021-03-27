import '../../styles/PairingRow.scss';
import Pairing from '../Pairing';

const PairingRow = ({ matches, title }) => {
    return (
        <>
            <div className="PairingRow">
                <h1 className="PairingRow__title">{title}</h1>
                {matches.map((match, index) => (
                    <Pairing key={index} />
                ))}                
            </div>
        </>
    );
}

export default PairingRow;
