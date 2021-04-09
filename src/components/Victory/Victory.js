import { Redirect } from 'react-router';
import '../../styles/Victory.scss';
// import TournamentTree from '../TournamentTree/';

const Victory = ({ champion, gameStarted, reset }) => {

    return (
        !gameStarted ? <Redirect to="" /> :
            <>
                <div className="pageStyle">
                </div>
            </>
    );
}

export default Victory;
