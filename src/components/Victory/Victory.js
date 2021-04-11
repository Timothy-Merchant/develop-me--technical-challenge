import { Redirect } from 'react-router';
import '../../styles/Victory.scss';

/**
 * This component serves a placeholder while the MatrixBackground
 * component displays the victory message.
 * This component will display until the player chooses either new tournament
 * or view tournaments. 
 */

const Victory = ({ gameStarted }) => {

    return (
        !gameStarted ? <Redirect to="develop-me--technical-challenge/" /> :
            <>
                <div className="pageStyle">

                </div>
            </>
    );
}

export default Victory;
