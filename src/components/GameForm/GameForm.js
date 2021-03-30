import '../../styles/GameForm.scss';
import { useState } from "react";

const GameForm = ({ createPlayer, players, startGame }) => {

    const [playerName, setPlayerName] = useState("");
    const [errors, setErrors] = useState({ invalidName: false, tooFewPlayers: false, unevenPlayers: false });

    const errorTexts = {
        invalidName: "Please enter a name between 3 and 15 characters",
        tooFewPlayers: "Please add at least 2 players to the tournament",
        unevenPlayers: "Please create an even number of players",
        tooManyPlayers: "Pongtrix currently supports a maximum of 10 players"
    }

    const validateName = (name) => setErrors({
        ...errors,
        invalidName: name.length <= 2 || name.length >= 15,
    });

    const validatePlayers = (players) => setErrors({
        ...errors,
        tooFewPlayers: players.length < 1,
        unevenPlayers: players.length % 2 === 0
    });

    const handleNameInput = (e) => {
        const nameInput = e.currentTarget.value;
        setPlayerName(nameInput, validateName(playerName));
    }

    const handlePlayerCreate = (e) => {

        if (!errors.invalidName && playerName !== "") {
            createPlayer(playerName, validatePlayers(players));
            setPlayerName("");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!errors.tooFewPlayers &&
            !errors.tooManyPlayers &&
            !errors.unevenPlayers) {
            startGame(players);
        }
    }

    const testPlayerCreate = (e) => {
        createPlayer("fred");
        createPlayer("james");
        createPlayer("pete");
        createPlayer("alfred");
        createPlayer("jenny");
        createPlayer("joanne");
    }

    return (
        <>
            <form onSubmit={handleSubmit} action="" method="get" className="GameForm">
                <div className="GameForm__Entry">
                    <label className="GameForm__Label" htmlFor="name">Enter player name: </label>
                    <input value={playerName} onChange={handleNameInput} type="text" className="GameForm__Input" name="name" id="name"></input>
                    <button type="button" onClick={handlePlayerCreate} className="GameForm__Button">Add Player</button>
                    <button type="submit" className="GameForm__Button">Enter the Pongtrix!</button>
                    {Object.keys(errors).map((error, index) =>
                        (errors[error] ? <p key={index} className="GameForm__Error">{errorTexts[error]}</p> : null))}
                </div>
            </form>
            <button onClick={testPlayerCreate} className="GameForm__Button">Add 6 Players</button>
        </>
    );
}

export default GameForm;
