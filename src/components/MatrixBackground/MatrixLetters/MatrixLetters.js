import '../../../styles/MatrixBackground.scss';
import { Component } from "react";

class MatrixLetters extends Component {

    constructor(props) {
        super(props)
        this.state = {
            duration: 4,
            letters: [],
        }
    }

    LettersArray = [
        "Z",
        "X",
        "Y",
        "W",
        "A",
        "B",
        "C",
        "D",
        "￥",
        "＃",
        "＄",
        "＆",
        "＠",
        "丸",
        "馬",
        "雲",
        "火",
        "水",
        "暗",
        "光",
        "木",
        "土",
        "氷",
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
        const numberOfLetters = Math.floor(Math.random() * (40 - 5) + 5);
        const newDuration = Math.floor(Math.random() * (10 - 4) + 4);
        const newLetters = [];
        let counter = 0;
        while (counter < numberOfLetters) {
            counter += 1;
            newLetters.push(this.LettersArray[Math.floor(Math.random() * this.LettersArray.length)])
        }

        this.setState({
            letters: newLetters,
            duration: newDuration
        })
    };

    render() {

        return (
            <>
                <div style={{ animation: `mymove ${this.state.duration}s linear infinite` }} onAnimationIteration={this.onAnimationIteration} className="Matrix__LetterBox">
                    {
                        this.state.letters.map(letter => (
                            <p className="Matrix__Letter">{letter}</p>
                        ))
                    }
                </div>
            </>
        );
    }
}

export default MatrixLetters;