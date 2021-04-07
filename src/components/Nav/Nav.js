import '../../styles/Nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <>
            <div className="Nav__Wrapper">
                <Link className="Nav__Link" to="">View Tournaments</Link>
                <Link className="Nav__Link" to="">Load Tournament</Link>
            </div>
        </>
    )
}
export default Nav;