import { connect } from "react-redux";
import Victory from "./Victory";
import { resetGame } from "../../data/actions/state"

const mapStateToProps = state => {
    return {
        champion: state.champion,
        gameStarted: state.gameStarted
    }
}

const mapDispatchToProps = dispatch => {
    return {
        reset: (data) => dispatch(resetGame())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Victory);