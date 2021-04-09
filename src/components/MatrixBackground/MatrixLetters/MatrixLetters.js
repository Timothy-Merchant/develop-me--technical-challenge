import '../../../styles/MatrixBackground.scss';
import { Component } from "react";
import MatrixLetter from './MatrixLetter';

class MatrixLetters extends Component {

    constructor(props) {
        super(props)
        this.state = {
            duration: 1,
            letters: []
        }

        this.setupLetterSpeed = this.setupLetterSpeed.bind(this);
        this.setupLetterStyle = this.setupLetterStyle.bind(this);
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

    componentDidMount = () => {

        const numberOfLetters = Math.floor(Math.random() * (40 - 5) + 5);

        const newLetters = [];

        let counter = 0;

        while (counter < numberOfLetters) {
            counter += 1;
            newLetters.push(this.LettersArray[Math.floor(Math.random() * this.LettersArray.length)])
        }

        const newDuration = Math.floor(Math.random() * (12 - 5) + 5);

        // if (this.props.type === "victory") {
        //     newLetters.push(this.props.letter);
        // }

        this.setState({
            letters: newLetters,
            duration: newDuration,
        })
    };

    onAnimationEnd = () => {

        const numberOfLetters = Math.floor(Math.random() * (40 - 5) + 5);

        const newLetters = [];

        let counter = 0;

        while (counter < numberOfLetters) {
            counter += 1;
            newLetters.push(this.LettersArray[Math.floor(Math.random() * this.LettersArray.length)])
        }

        this.setState({
            letters: newLetters
        })
    };

    setupLetterStyle = () => {
        const dice = Math.floor(Math.random() * (100 - 1) + 1);

        let animationStyle = dice < 10 ? 'colorChangeLight' : 'colorChangeDark';

        return animationStyle
    }

    setupLetterSpeed = () => {
        const alternationSpeed = Math.floor(Math.random() * (5 - 1) + 1);

        return alternationSpeed;
    }

    render() {

        const { duration, letters } = this.state

        return (
            this.props.type === "victory" ?
                <>
                    <div className="Matrix__VictoryBox">
                        <div style={{ animation: `letterFallVictory ${duration}s linear 1`, animationFillMode: "forwards" }}>
                            {
                                letters.map((letter, index) => (
                                    <MatrixLetter key={index} animationStyle={this.setupLetterStyle()} animationSpeed={this.setupLetterSpeed()} letter={letter} />
                                ))
                            }
                            <MatrixLetter animationStyle='colorChangeVictory' animationSpeed={this.setupLetterSpeed()} letter={this.props.letter} />
                        </div>
                    </div>
                </> :
                <>
                    <div style={{ animation: `letterFall ${duration}s linear infinite` }} onAnimationEnd={this.onAnimationEnd} className="Matrix__LetterBox">
                        {
                            letters.map((letter, index) => (
                                <MatrixLetter key={index} animationStyle={this.setupLetterStyle()} animationSpeed={this.setupLetterSpeed()} letter={letter} />
                            ))
                        }
                    </div>
                </>
        );
    }
}

export default MatrixLetters;