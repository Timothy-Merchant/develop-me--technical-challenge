import { connect } from "react-redux";
import MatchBox from "./MatchBox";
import { increaseScore, completeMatch, endRound } from "../../data/actions/state";

const mapStateToProps = state => {
    return {
        currentRound: state.currentRound,
        currentGame: state.currentGame,
        gameStarted: state.gameStarted
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increaseScore: (data) => dispatch(increaseScore(data)),
        nextMatch: (data) => dispatch(completeMatch(data)),
        endRound: (data) => dispatch(endRound(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchBox);
