import '../../styles/GameForm.scss';

const GameForm = () => {
    return (
        <form action="" method="get" className="GameForm">
            <div className="GameForm__Entry">
                <label className="GameForm__Label" for="name">Enter player name: </label>
                <input type="text" className="GameForm__Input" name="name" id="name" required></input>
                <button className="GameForm__Button">Add Player</button>
                <button type="submit" className="GameForm__Button">Enter the Pongtrix!</button>
            </div>
        </form>
    );
}

export default GameForm;
