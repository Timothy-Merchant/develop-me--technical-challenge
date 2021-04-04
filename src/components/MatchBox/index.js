import { connect } from "react-redux";
import MatchBox from "./MatchBox";
import { endGame } from "../../data/actions/state";
import { increaseScore, completeMatch, endRound } from "../../data/actions/api";

const mapStateToProps = state => {
    return {
        tournamentID: state.tournamentID,
        currentRound: state.currentRound,
        currentGame: state.currentGame,
        gameStarted: state.gameStarted,
        rounds: state.rounds
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increaseScore: (data) => dispatch(increaseScore(data)),
        nextMatch: (data) => dispatch(completeMatch(data)),
        endRound: (data) => dispatch(endRound(data)),
        endGame: (data) => dispatch(endGame(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchBox);
