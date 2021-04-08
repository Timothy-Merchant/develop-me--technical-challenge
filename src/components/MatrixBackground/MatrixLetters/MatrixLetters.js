import '../../../styles/MatrixBackground.scss';
import { Component } from "react";
import { endRound } from '../../../data/actions/api';

class MatrixLetters extends Component {

    constructor(props) {
        super(props)
        this.state = {
            duration: 4,
            letters: []
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

    onAnimationEnd = () => {

        this.setState({ count: this.state.count + 1, toggle: false });
        const numberOfLetters = Math.floor(Math.random() * (40 - 5) + 5);

        const newLetters = [];

        let counter = 0;

        while (counter < numberOfLetters) {
            counter += 1;
            newLetters.push(this.LettersArray[Math.floor(Math.random() * this.LettersArray.length)])
        }

        const newDuration = Math.floor(Math.random() * (10 - 4) + 4);
        this.setState({
            letters: newLetters,
            duration: newDuration
        })
    };

    render() {

        const { duration, letters } = this.state

        return (
            <>
                <div style={{ animation: `letterFall ${duration}s linear infinite` }} onAnimationIteration={this.onAnimationEnd} className="Matrix__LetterBox">
                    {
                        letters.map(letter => (
                            <p className="Matrix__Letter">{letter}</p>
                        ))
                    }
                </div>
            </>
        );
    }
}

export default MatrixLetters;