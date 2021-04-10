import "../../../styles/Loading.scss";
import { Component } from "react";
import { Redirect } from "react-router";

/**
 * Component which provides a loading screen while we 
 * call tournaments information from the API.
 */

class LoadTournaments extends Component {

    componentDidMount() {
        if (!this.props.loaded) {
            this.props.handleLoad();
        }
    }

    render() {
        const { loaded } = this.props;
        return loaded ? <Redirect to="tournaments" /> : (
            <div className="pageStyle">
                <div className="Loading">
                    <p>Loading...</p>
                </div>
            </div>
        );
    }
}

export default LoadTournaments;