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
import LoadTournaments from '../LoadTournaments/';
import Tournaments from '../Tournaments/';
import MatrixBackground from '../MatrixBackground/';

const App = ({ gameConcluded, gameStarted }) => {
  return (
    <>
      <Router>
        <Nav />
        <MatrixBackground />
        <Switch>
          <Route exact path="/" component={GameForm}></Route>
          <Route exact path="/game" component={MatchBox}></Route>
          <Route exact path="/victory" component={Victory}></Route>
          <Route exact path="/loadTournaments" component={LoadTournaments}></Route>
          <Route exact path="/tournaments" component={Tournaments}></Route>
          <FourOhFour />
        </Switch>
      </Router>
    </>
  );
}

export default App;
