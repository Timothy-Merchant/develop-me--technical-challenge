import '../../styles/App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import GameForm from '../GameForm';
import MatchBox from '../MatchBox';
import Victory from '../Victory';

const App = ({ gameConcluded, gameStarted }) => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/start" component={GameForm}></Route>
          <Route exact path="/game" component={MatchBox}></Route>                      
          <Route exact path="/victory">
            <div className="pageStyle">
              <Victory />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
