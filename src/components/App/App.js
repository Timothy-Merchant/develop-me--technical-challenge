import '../../styles/App.scss';
import GameForm from '../GameForm';
import MatchBox from '../MatchBox';
import Roster from '../Roster';
import TournamentTree from '../TournamentTree';
import Victory from '../Victory';

const App = ({ gameConcluded, gameStarted }) => {
  return (

    <div className="pageStyle">
      <GameForm />
      <Roster />
      <MatchBox />
      <TournamentTree />
      { gameConcluded ? <Victory /> : null}
    </div>
  );
}

export default App;
