import { connect } from "react-redux";
import TournamentTree from "./TournamentTree";

const mapStateToProps = state => {
    return {
        gameStarted: state.gameStarted,
        games: state.games,
        rounds: state.rounds
    }
}

export default connect(mapStateToProps)(TournamentTree);
