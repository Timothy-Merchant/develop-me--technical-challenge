import { connect } from "react-redux";
import GameForm from "./GameForm";
import { createPlayer } from "../../data/actions/state"
import { startGame } from "../../data/actions/api"

const mapStateToProps = state => {
    return {
        players: state.players,
        gameStarted: state.gameStarted,
        loaded: state.loaded
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPlayer: (data) => dispatch(createPlayer(data)),
        startGame: (data) => dispatch(startGame(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameForm);
