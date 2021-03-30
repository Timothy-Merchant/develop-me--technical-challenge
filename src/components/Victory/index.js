import { connect } from "react-redux";
import Victory from "./Victory";

const mapStateToProps = state => {
    return {
        champion: state.champion
    }
}

export default connect(mapStateToProps)(Victory);