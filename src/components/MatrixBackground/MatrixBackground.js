import '../../styles/MatrixBackground.scss';
import { Component } from "react";

class MatrixBackground extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            duration: 0,
            characters: 0,
        }
    }

    Letters = [
        "ア",
        "イ",
        "ウ",
        "エ",
        "オ",
        "カ",
        "キ",
        "ク",
        "ケ",
        "コ",
        "サ",
        "シ",
        "ツ",
    ]


    onAnimationIteration = () => {
        this.setState({ count: this.state.count + 1 });
        console.log(this.state.count);
      };

    render() {

        const gridX = 200;

        return (
            <div className="MatrixBackground">
                <div onAnimationIteration={this.onAnimationIteration} className="Matrix__Letters">
                    {this.Letters.map(letter => (
                        <p className="Matrix__Letter">{letter}</p>
                    ))}
                </div>
                <div className="Matrix__Letters">
                    {this.Letters.map(letter => (
                        <p className="Matrix__Letter">{letter}</p>
                    ))}
                </div>
            </div>
        );
    }
}

export default MatrixBackground;