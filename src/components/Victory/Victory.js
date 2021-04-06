import { Redirect } from 'react-router';
import '../../styles/Victory.scss';
import TournamentTree from '../TournamentTree/';

const Victory = ({ champion, gameStarted, reset }) => {

    return (
        !gameStarted ? <Redirect to="start" /> :
            <>
                <div className="pageStyle">
                    <p>{champion} Wins!</p>
                    <button onClick={() => reset()}>Start new Tournament</button>
                    <TournamentTree />
                </div>
            </>
    );
}

export default Victory;
