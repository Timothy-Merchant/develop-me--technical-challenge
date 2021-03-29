import '../../styles/GameForm.scss';
import { useState } from "react";

const GameForm = ({ createPlayer }) => {

    const [playerName, setPlayerName] = useState("");

    const handleNameInput = (e) => {
        const nameInput = e.currentTarget.value;
        setPlayerName(nameInput);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createPlayer(playerName);
        console.log(playerName)
    }

    return (
        <form onSubmit={handleSubmit} action="" method="get" className="GameForm">
            <div className="GameForm__Entry">
                <label className="GameForm__Label" htmlFor="name">Enter player name: </label>
                <input value={playerName} onChange={handleNameInput} type="text" className="GameForm__Input" name="name" id="name" required></input>
                <button type="submit" className="GameForm__Button">Add Player</button>
                <button disabled className="GameForm__Button">Enter the Pongtrix!</button>
            </div>
        </form>
    );
}

export default GameForm;
