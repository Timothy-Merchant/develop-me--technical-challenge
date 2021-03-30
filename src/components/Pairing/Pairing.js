import '../../styles/Pairing.scss';

const Pairing = ({ game }) => {

    const winMessages = {
        0: "--",
        1: "WON",
        2: "LOST"
    }

    return (
        <table>
            <tbody>
                <tr className="pairing__player">
                    <td className="pairing__name">{game.player1.name}</td>
                    <td className="pairing__score">{game.player1.score}</td>
                    <td className="pairing__win">{winMessages[game.player1.won]}</td>
                </tr>
                <tr className="pairing__player">
                    <td className="pairing__name">{game.player2.name}</td>
                    <td className="pairing__score">{game.player2.score}</td>
                    <td className="pairing__win">{winMessages[game.player2.won]}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Pairing;
