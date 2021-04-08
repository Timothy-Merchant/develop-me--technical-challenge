import '../../../styles/MatrixBackground.scss';
import { Component } from "react";

class MatrixLetter extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }


    // onAnimationEnd = () => {

    //     const dice = Math.floor(Math.random() * (100 - 1) + 1);

    //     const animationStyle = dice < 10 ? 'colorChangeLight' : 'colorChangeDark';

    //     const alternationSpeed = Math.floor(dice / 10);

    //     return animationStyle
    //     return alternationSpeed;
    // };

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