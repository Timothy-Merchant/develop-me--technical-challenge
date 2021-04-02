import '../../styles/Pairing.scss';

const Pairing = ({ game }) => {

    const winMessages = {
        0: "--",
        1: "WON",
        2: "LOST"
    }

    console.log(game);

    return (
        <table>
            <tbody>
                <tr className="pairing__player">
                    <td className="pairing__name">{game.players[0].name}</td>
                    <td className="pairing__score">{game.players[0].score}</td>
                    <td className="pairing__win">{winMessages[game.players[0].won]}</td>                    
                </tr>
                <tr className="pairing__player">
                    <td className="pairing__name">{game.players[1].name}</td>
                    <td className="pairing__score">{game.players[1].score}</td>
                    <td className="pairing__win">{winMessages[game.players[1].won]}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Pairing;
