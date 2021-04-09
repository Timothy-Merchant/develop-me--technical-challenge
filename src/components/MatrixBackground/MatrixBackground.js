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

        // const { width } = this.state

        return (
            <div className="MatrixBackground">
                <div className="MatrixBackground--Victory">
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
                    {this.props.gameConcluded ?
                        <div className="MatrixBackground__VictorySegment">
                            {this.props.champion.split("").map((letter, index) => (
                                <MatrixLetters key={index} letter={letter} type="victory" />
                            ))}
                            <MatrixLetters letter="_" type="victory" />
                            <MatrixLetters letter="W" type="victory" />
                            <MatrixLetters letter="i" type="victory" />
                            <MatrixLetters letter="n" type="victory" />
                            <MatrixLetters letter="s" type="victory" />
                            <MatrixLetters letter="!" type="victory" />
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
                </div>
            </div>
        );
    }
}

export default MatrixBackground;