import { connect } from "react-redux";
import PairingRow from "./PairingRow";

const mapStateToProps = state => {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps)(PairingRow);
