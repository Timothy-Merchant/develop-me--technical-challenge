import { connect } from "react-redux";
import TournamentTree from "./TournamentTree";
import { endRound } from "../../data/actions/state"

const mapStateToProps = state => {
    return {
        gameStarted: state.gameStarted,
        games: state.games,
        rounds: state.rounds
    }
}

const mapDispatchToProps = dispatch => {
    return {
        endRound: (data) => dispatch(endRound(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TournamentTree);
