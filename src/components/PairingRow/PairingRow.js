import '../../styles/PairingRow.scss';
import Pairing from '../Pairing';

const PairingRow = () => {
    return (
        <>
            <div className="PairingRow">
                <h1 className="PairingRow__title">Semi-finals</h1>
                <Pairing />
                <Pairing />
                <Pairing />
                <Pairing />
            </div>
        </>
    );
}

export default PairingRow;
