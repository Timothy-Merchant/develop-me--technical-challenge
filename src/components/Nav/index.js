import { connect } from "react-redux";
import Nav from './Nav'
import { resetGame } from '../../data/actions/state'

const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = dispatch => {
    return {
        reset: (data) => dispatch(resetGame())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
