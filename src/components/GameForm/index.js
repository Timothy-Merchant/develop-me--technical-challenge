import { connect } from "react-redux";
import GameForm from "./GameForm";
import { createPlayer } from "../../data/actions/state"

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPlayer: (data) => dispatch(createPlayer(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameForm);
