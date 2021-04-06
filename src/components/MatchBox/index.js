import { connect } from "react-redux";
import MatchBox from "./MatchBox";
import { increaseScore, completeMatch, endRound, endTournament } from "../../data/actions/api";

const mapStateToProps = state => {
    return {
        tournamentID: state.tournamentID,
        currentRound: state.currentRound,
        currentGame: state.currentGame,
        gameStarted: state.gameStarted,
        gameConcluded: state.gameConcluded,
        rounds: state.rounds
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increaseScore: (data) => dispatch(increaseScore(data)),
        nextMatch: (data) => dispatch(completeMatch(data)),
        endRound: (data) => dispatch(endRound(data)),
        endTournament: (data) => dispatch(endTournament(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchBox);
