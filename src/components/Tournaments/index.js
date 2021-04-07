import { connect } from "react-redux";
import Tournaments from "./Tournaments";

const mapStateToProps = state => {
    return {        
        tournaments: state.tournaments
    }
}

export default connect(mapStateToProps)(Tournaments);
