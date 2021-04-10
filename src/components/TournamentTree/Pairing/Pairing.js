import '../../../styles/Pairing.scss';

const Pairing = ({ game }) => {

    const winMessages = {
        0: "--",
        1: "WON",
        2: "LOST"
    }

    return (


        <table>
            <tbody>
                <tr className={
                    game.players[0].won === 1 ? "pairing__player won" :
                    game.players[0].won === 2 ? "pairing__player lost" : "pairing__player"}>
                    <td className="pairing__name">{game.players[0].name}</td>
                    <td className="pairing__score">{game.players[0].score}</td>
                    <td className="pairing__win">{winMessages[game.players[0].won]}</td>
                </tr>
                <tr className={
                    game.players[1].won === 1 ? "pairing__player won" :
                    game.players[1].won === 2 ? "pairing__player lost" : "pairing__player"}>
                    <td className="pairing__name">{game.players[1].name}</td>
                    <td className="pairing__score">{game.players[1].score}</td>
                    <td className="pairing__win">{winMessages[game.players[1].won]}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Pairing;
