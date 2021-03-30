import { connect } from "react-redux";
import TournamentTree from "./TournamentTree";

const mapStateToProps = state => {
    return {
        gameStarted: state.gameStarted,
        games: state.games
    }
}

export default connect(mapStateToProps)(TournamentTree);
