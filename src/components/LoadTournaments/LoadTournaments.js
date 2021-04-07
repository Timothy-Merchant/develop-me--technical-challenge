import { Component } from "react";
import { Redirect } from "react-router";

class LoadTournaments extends Component {

    componentDidMount() {
        if (!this.props.loaded) {
            this.props.handleLoad();
        }
    }

    render() {
        const { loaded } = this.props;
        return loaded ? <Redirect to="tournaments" /> : (
            <div className="progress">
                <div
                    className="progress-bar progress-bar-striped active"
                    style={{ width: "100%" }}
                />
            </div>
        );
    }
}

export default LoadTournaments;