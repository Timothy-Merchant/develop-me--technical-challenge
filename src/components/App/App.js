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

const App = ({ gameConcluded, gameStarted }) => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/start" component={GameForm}></Route>
          <Route exact path="/game" component={MatchBox}></Route>
          <Route exact path="/victory" component={Victory}></Route>
          <FourOhFour />
        </Switch>
      </Router>
    </>
  );
}

export default App;
