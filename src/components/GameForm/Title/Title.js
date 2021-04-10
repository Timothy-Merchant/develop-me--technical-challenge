import '../../../styles/Title.scss';
import { Component } from 'react';
import Letter from './Letter';

class Title extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    // onAnimationEnd = () => {

    //     const numberOfLetters = Math.floor(Math.random() * (40 - 5) + 5);

    //     const newLetters = [];

    //     let counter = 0;

    //     while (counter < numberOfLetters) {
    //         counter += 1;
    //         newLetters.push(this.LettersArray[Math.floor(Math.random() * this.LettersArray.length)])
    //     }

    //     this.setState({
    //         letters: newLetters
    //     })
    // };

    render() {

        const title = ['P', 'o', 'n', 'g', 't', 'r', 'i', 'x'];

        return (
            <>
                <div className="Title__Wrapper">
                    {title.map((letter, index) => (
                        <Letter key={index} letter={letter} />
                    ))}
                </div>
            </>
        )
    }
}

export default Title;