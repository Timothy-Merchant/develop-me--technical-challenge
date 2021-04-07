import { connect } from "react-redux";
import Tournaments from "./Tournaments";

const mapStateToProps = state => {
    return {
        loaded: state.loaded
    }
}

export default connect(mapStateToProps)(Tournaments);
