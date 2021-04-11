import '../../styles/App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import GameForm from '../GameForm';
import MatchBox from '../MatchBox';
import Victory from '../Victory';
import FourOhFour from '../FourOhFour/FourOhFour';
import Nav from '../Nav';
import LoadTournaments from '../Tournaments/LoadTournaments';
import Tournaments from '../Tournaments/';
import MatrixBackground from '../MatrixBackground/';

/**
 * Welcome to Pongtrix!
 * This App has five pages:
 * A Player creation page. (GameForm)
 * A Game/Tournament play through page. (MatchBox)
 * A Victory screen page. (Victory)
 * A Tournament listings Page. (Tournaments)
 * A 404 redirect page. (FourOhFour)
 */

const App = ({ gameConcluded, gameStarted }) => {
  return (
    <>
      <Router>
        <Nav />
        <MatrixBackground />
        <Switch>
          <Route exact path="develop-me--technical-challenge/" component={GameForm}></Route>
          <Route exact path="develop-me--technical-challenge/game" component={MatchBox}></Route>
          <Route exact path="develop-me--technical-challenge/victory" component={Victory}></Route>
          <Route exact path="develop-me--technical-challenge/loadTournaments" component={LoadTournaments}></Route>
          <Route exact path="develop-me--technical-challenge/tournaments" component={Tournaments}></Route>
          <FourOhFour />
        </Switch>
      </Router>
    </>
  );
}

export default App;
