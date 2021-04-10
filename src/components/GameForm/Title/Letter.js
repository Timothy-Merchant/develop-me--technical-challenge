import '../../../styles/Title.scss';
import { Component } from "react";

/**
 * Individual Letter component for use in the Title component.
 * Holds logic for creating random speeds and directions for each
 * letter to arrive at.
 */

class Letter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            duration: 0,
            direction: "left"
        }
    }

    componentDidMount = () => {

        let direction = Math.ceil(Math.random() * (4 - 0) + 0);
        const duration = Math.floor(Math.random() * (3 - 1) + 1);

        if (direction === 1) {
            direction = "top"
        }
        if (direction === 2) {
            direction = "right"
        }
        if (direction === 3) {
            direction = "bottom"
        }
        if (direction === 4) {
            direction = "left"
        }

        this.setState({
            duration: duration,
            direction: direction
        })
    };

    render() {

        const { direction, duration } = this.state;

        return (
            <>
                <p style={{
                    animation: `${direction} ${duration}s alternate 1`
                }} className="Title__Letter">
                    {this.props.letter}
                </p>
            </>
        );
    }
}

export default Letter;