import '../../../styles/Title.scss';
import { Component } from 'react';
import Letter from './Letter';

/**
 * Title component that displays Pongtrix letters flying in from 4 random directions.
 * Makes use of a Letter subcomponent which holds the directional logic.
 */

class Title extends Component {

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