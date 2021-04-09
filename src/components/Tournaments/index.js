import { connect } from "react-redux";
import Tournaments from "./Tournaments";
import { tournamentLoaded } from "../../data/actions/state";

const mapStateToProps = state => {
    return {
        tournaments: state.tournaments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        tournamentLoaded: () => dispatch(tournamentLoaded())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tournaments);
