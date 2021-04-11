import '../../styles/FourOhFour.scss';
import { Link } from 'react-router-dom';

const FourOhFour = () => {    

    return (
        <>
            <div className="pageStyle">
                <p className="Error__Text">404: Page not found</p>
                <p className="Error__Text">Your page is out there, Neo, and it's looking for you, and it will find you if you want it to.</p>
                <Link className="Error__Button" to="develop-me--technical-challenge/">Go Back</Link>
            </div>
        </>
    )
}
export default FourOhFour;