import '../../styles/FourOhFour.scss';
import { Link } from 'react-router-dom';
import { Component } from 'react';

class Tournaments extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className="pageStyle">
                    <p className="Error__Text">404: Page not found</p>
                    <p className="Error__Text">Your page is out there, Neo, and it's looking for you, and it will find you if you want it to.</p>
                    <Link className="Error__Button" to="">Go Back</Link>
                </div>
            </>
        )
    }
}

export default Tournaments;