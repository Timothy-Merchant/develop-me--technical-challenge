import '../../styles/Roster.scss';

const Roster = () => {
    return (
        <div className="Roster__Wrapper">
            <h1 className="Roster__Header">Player Roster</h1>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Hello World</td>
                        <td className="Roster__Delete">
                            <button className="Roster__DeleteButton">✖</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Hello World</td>
                        <td className="Roster__Delete">
                            <button className="Roster__DeleteButton">✖</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Hello World</td>
                        <td className="Roster__Delete">
                            <button className="Roster__DeleteButton">✖</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Roster;
