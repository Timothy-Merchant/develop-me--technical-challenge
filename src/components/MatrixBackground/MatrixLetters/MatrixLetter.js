import '../../../styles/MatrixBackground.scss';
import { Component } from "react";

class MatrixLetter extends Component {

    render() {

        const { animationStyle, animationSpeed, letter } = this.props;

        return (
            <>
                <p style={{ animation: `${animationStyle} ${animationSpeed}s alternate infinite` }} className="Matrix__Letter">{letter}</p>
            </>
        );
    }
}

export default MatrixLetter;