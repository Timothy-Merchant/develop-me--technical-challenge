import '../../../styles/MatrixBackground.scss';
import { Component } from "react";
import MatrixLetter from './MatrixLetter';
import LettersArray from './LettersArray.json';

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

    componentDidMount = () => {

        const numberOfLetters = Math.floor(Math.random() * (40 - 5) + 5);

        const newLetters = [];

        let counter = 0;

        while (counter < numberOfLetters) {
            counter += 1;
            newLetters.push(LettersArray[Math.floor(Math.random() * LettersArray.length)])
        }

        const newDuration = Math.floor(Math.random() * (12 - 5) + 5);

        let newVictoryDuration = 0;

        if (this.props.type === "victory") {
            newVictoryDuration = Math.floor(Math.random() * (5000 - 2200) + 2200);
        }

        this.setState({
            letters: newLetters,
            duration: newDuration,
            victoryDuration: newVictoryDuration
        })
    };

    onAnimationEnd = () => {

        const numberOfLetters = Math.floor(Math.random() * (40 - 5) + 5);

        const newLetters = [];

        let counter = 0;

        while (counter < numberOfLetters) {
            counter += 1;
            newLetters.push(LettersArray[Math.floor(Math.random() * LettersArray.length)])
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
        return Math.floor(Math.random() * (5 - 1) + 1);
    }

    render() {

        const { duration, victoryDuration, letters } = this.state

        return (
            this.props.type === "victory" ?
                <>
                    <div className="Matrix__VictoryBox">
                        <div style={{ animation: `letterFallVictory ${victoryDuration}ms linear 1 forwards` }}>
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