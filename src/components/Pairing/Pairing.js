import '../../styles/Pairing.scss';

const Pairing = () => {
    return (
        <table>
            <tbody>                
                <tr className="pairing__player">
                    <td className="pairing__name">Player1</td>
                    <td className="pairing__score">21</td>
                    <td className="pairing__win">LOST</td>
                </tr>
                <tr className="pairing__player">
                    <td className="pairing__name">Player2</td>
                    <td className="pairing__score">23</td>
                    <td className="pairing__win">WON</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Pairing;
