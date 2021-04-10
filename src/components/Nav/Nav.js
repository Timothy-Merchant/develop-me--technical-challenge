import '../../styles/Nav.scss';
import { Link } from 'react-router-dom';

/**
 * Nav bar that resets the game upon selecting New Tournament, or lets the player navigate to view the Tournament History.
 */

const Nav = ({reset}) => {

    return (
        <>
            <div className="Nav__Wrapper">
                <Link onClick={() => reset()} className="Nav__Link" to="/">New Tournament</Link>
                <Link className="Nav__Link" to="/loadTournaments">Tournament History</Link>
            </div>
        </>
    )
}
export default Nav;