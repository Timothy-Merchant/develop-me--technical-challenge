import '../../styles/GameForm.scss';
import RandomNames from './randomNames.json';
import { Component } from "react";
import Roster from "../Roster";
import { Redirect } from "react-router-dom";

class GameForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            playerName: "",
            errors: { invalidName: false, tooFewPlayers: true, unevenPlayers: false }
        }

    }

    errorTexts = {
        invalidName: "Please enter a name between 3 and 15 characters",
        tooFewPlayers: "Please add at least 2 players to the tournament",
        unevenPlayers: "Total player count must be a power of 2 (2, 4, 8, 16, 32 etc...)",
        tooManyPlayers: "Pongtrix currently supports a maximum of 10 players"
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.players !== this.props.players) {
            this.validatePlayers(this.props.players)
            this.setState({
                playerName: ""
            })
        }
    }

    validateName = (name) => this.setState({
        errors: {
            ...this.state.errors,
            invalidName: name.length <= 2 || name.length >= 15
        }
    });

    validatePlayers = (players) => this.setState({
        errors: {
            ...this.state.errors,
            tooFewPlayers: players.length <= 1,
            unevenPlayers: players.length && (players.length & (players.length - 1)) !== 0
        }
    });

    handleNameInput = (e) => {
        const nameInput = e.currentTarget.value;
        this.validateName(nameInput);
        this.setState({
            playerName: nameInput
        })
    }

    handlePlayerCreate = (e) => {

        if (!this.state.errors.invalidName && this.state.playerName !== "") {
            this.props.createPlayer(this.state.playerName);
            this.validatePlayers(this.props.players);
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (!this.state.errors.tooFewPlayers &&
            !this.state.errors.tooManyPlayers &&
            !this.state.errors.unevenPlayers) {

            this.setState({
                playerName: ""
            })

            // pass up an array of player objects with name properties from the user
            const rosterList = this.props.players.map((player, index) => ({
                name: player,
                score: 0,
                won: 0
            }));

            this.props.startGame(rosterList);
        }
    }

    createRandomPlayers = (e) => {
        const createPlayer = this.props.createPlayer;

        let counter = 0;

        while (counter < 4) {
            const randomIndex = Math.floor(Math.random() * RandomNames.length);
            createPlayer(RandomNames[randomIndex]);
            counter += 1;
        }
    }

    render() {
        const { gameStarted } = this.props;
        const { playerName, errors } = this.state;
        
        return (


            gameStarted ? <Redirect to="game" /> :
                <>
                    <div className="pageStyle">
                        <form onSubmit={this.handleSubmit} action="" method="get" className="GameForm">
                            <div className="GameForm__Entry">

                                <label className="GameForm__Label" htmlFor="name">Enter player name: </label>

                                <input value={playerName} onChange={this.handleNameInput} type="text" className="GameForm__Input" name="name" id="name"></input>

                                <button type="button" onClick={this.handlePlayerCreate} className="GameForm__Button">Add Player</button>

                                <button type="button" onClick={this.createRandomPlayers} className="GameForm__Button">Add 4 Random Players</button>

                                <button type="submit" className="GameForm__Button">Enter the Pongtrix!</button>


                                {Object.keys(errors).map((error, index) =>
                                    (errors[error] ? <p key={index} className="GameForm__Error">{this.errorTexts[error]}</p> : null))}
                            </div>
                        </form>
                        <Roster />
                    </div>
                </>)
    }
}

export default GameForm;
