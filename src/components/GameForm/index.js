import { connect } from "react-redux";
import GameForm from "./GameForm";
import { createPlayer, startGame } from "../../data/actions/state"

const mapStateToProps = state => {
    return {
        players: state.players
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPlayer: (data) => dispatch(createPlayer(data)),
        startGame: (data) => dispatch(startGame(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameForm);
