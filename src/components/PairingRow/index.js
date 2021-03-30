import { connect } from "react-redux";
import PairingRow from "./PairingRow";
import { endRound } from "../../data/actions/state"

const mapStateToProps = state => {
    return {
        games: state.games
    }
}

const mapDispatchToProps = dispatch => {
    return {
        endRound: (data) => dispatch(endRound(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PairingRow);
