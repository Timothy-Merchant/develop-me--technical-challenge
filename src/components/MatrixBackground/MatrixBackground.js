import '../../styles/MatrixBackground.scss';
import { Component } from "react";

class MatrixBackground extends Component {

    constructor(props) {
        super(props)
        this.state = {

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


    render() {

        const gridX = 200;
        const gridY = 50;


        return (
            <div className="MatrixBackground">
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