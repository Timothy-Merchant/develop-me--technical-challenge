import { connect } from "react-redux";
import MatrixBackground from "./MatrixBackground";

const mapStateToProps = (state) => ({    
    gameConcluded: state.gameConcluded,
    loaded: state.loaded,
    champion: state.champion
});

const mapDispatchToProps = (dispatch) => ({    
});

export default connect(mapStateToProps, mapDispatchToProps)(MatrixBackground);