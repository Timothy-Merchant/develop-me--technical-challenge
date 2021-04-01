import { connect } from "react-redux";
import GameForm from "./GameForm";
import { createPlayer, startGame } from "../../data/actions/state"
import { createRound } from "../../data/actions/api"

const mapStateToProps = state => {
    return {
        players: state.players
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPlayer: (data) => dispatch(createPlayer(data)),
        startGame: (data) => dispatch(startGame(data)),
        createRound: (data) => dispatch(createRound(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameForm);
