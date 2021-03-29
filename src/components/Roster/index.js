import { connect } from "react-redux";
import Roster from "./Roster";

const mapStateToProps = state => {
    return {
        players: state.players
    }
}

export default connect(mapStateToProps)(Roster);
