import { connect } from "react-redux";
import Player from "./Player";
import { disableButtons } from '../../data/actions/state'

const mapStateToProps = state => {
    return {
        inputDisabled: state.inputDisabled
    }
}

const mapDispatchToProps = dispatch => {
    return {
        disableButtons: () => dispatch(disableButtons())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
