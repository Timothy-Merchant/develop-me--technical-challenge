import { connect } from "react-redux";
import MatchBox from "./MatchBox";

const mapStateToProps = state => {
    return {
        currentRound: state.currentRound,
        currentGame: state.currentGame
    }
}

export default connect(mapStateToProps)(MatchBox);
