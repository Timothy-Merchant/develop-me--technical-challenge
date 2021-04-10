import { connect } from "react-redux";
import LoadTournaments from "./LoadTournaments";
import { getTournaments } from "../../../data/actions/api"

const mapStateToProps = ({ loaded }) => ({
    loaded,
});

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(getTournaments()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoadTournaments);