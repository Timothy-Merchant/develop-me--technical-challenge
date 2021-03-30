import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = state => {
    return {
        gameConcluded: state.gameConcluded,
    }
}

export default connect(mapStateToProps)(App);
