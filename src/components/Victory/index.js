import { connect } from "react-redux";
import Victory from "./Victory";

const mapStateToProps = state => {
    return {
        gameStarted: state.gameStarted
    }
}

export default connect(mapStateToProps)(Victory);