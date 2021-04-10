import '../../styles/MatrixBackground.scss';
import MatrixLetters from "./MatrixLetters";
import { Component } from "react";

/**
 * This component displays the background and victory screen background.
 * It simply produces a certain number of MatrixLetters subcomponents and displays them horizontally.
 * It inserts a finite set of MatrixLetters between the two divs when displaying the victory screen.
 * These letters are specifically designed to pass '<Player Name>-Wins!' as the last letter in each
 * MatrixLetters component.
 */

class MatrixBackground extends Component {

    render() {

        return (
            <div className="MatrixBackground">
                <div className="MatrixBackground--Victory">
                    {[...Array(60)].map((letter, index) => (
                        <MatrixLetters key={index} />
                    ))}
                    {this.props.gameConcluded ?
                        <div className="MatrixBackground__VictorySegment">
                            {this.props.champion.split("").map((letter, index) => (
                                <MatrixLetters key={index} letter={letter} type="victory" />
                            ))}
                            <MatrixLetters letter="-" type="victory" />
                            <MatrixLetters letter="W" type="victory" />
                            <MatrixLetters letter="i" type="victory" />
                            <MatrixLetters letter="n" type="victory" />
                            <MatrixLetters letter="s" type="victory" />
                            <MatrixLetters letter="!" type="victory" />
                        </div> : null
                    }
                    {[...Array(60)].map((letter, index) => (
                        <MatrixLetters key={index} />
                    ))}
                </div>
            </div>
        );
    }
}

export default MatrixBackground;