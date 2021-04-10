import '../../../styles/Roster.scss';

/**
 * This component is a simple table that holds displays the provisional player list
 * while players are being created (and before they a new tournament request is made to the API.)
 */

const Roster = ({ players, deletePlayer }) => {
    return (
        <div className="Roster__Wrapper">
            <h1 className="Roster__Header">Player Roster</h1>
            <table>
                <thead>
                    <tr className="Roster__TableHeader">
                        <th className="Roster__TableHead-No">No.</th>
                        <th className="Roster__TableHead-Name">Name</th>
                        <th className="Roster__TableHead-Delete"></th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={index} className="Roster__TableData">
                            <td>{index + 1}</td>
                            <td>{player}</td>
                            <td className="Roster__TableData-deleteButtonCell">
                                <button onClick={() => deletePlayer(index)} className="Roster__TableData-deletebutton">✖</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Roster;
