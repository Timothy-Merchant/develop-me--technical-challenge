import '../../styles/MatrixBackground.scss';
import MatrixLetters from "./MatrixLetters";
import { Component } from "react";

class MatrixBackground extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }


    render() {

        return (
            <div className="MatrixBackground">
                {this.props.gameConcluded ?
                    <div className="MatrixBackground--Victory">
                        {this.props.champion.split("").map((letter) => (
                            <MatrixLetters letter={letter} />
                        ))}
                    </div> : null
                }

                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
                <MatrixLetters />
            </div>

        );
    }
}

export default MatrixBackground;