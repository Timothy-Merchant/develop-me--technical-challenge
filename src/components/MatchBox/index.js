import { connect } from "react-redux";
import MatchBox from "./MatchBox";

const mapStateToProps = state => {
    return {
        currentRound: state.currentRound,
        currentGame: state.currentGame,
        gameStarted: state.gameStarted
    }
}

export default connect(mapStateToProps)(MatchBox);
