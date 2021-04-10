import { connect } from "react-redux";
import Roster from "./Roster";
import { deletePlayer } from "../../../data/actions/state"

const mapStateToProps = state => {
    return {
        players: state.players
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deletePlayer: (data) => dispatch(deletePlayer(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Roster);
