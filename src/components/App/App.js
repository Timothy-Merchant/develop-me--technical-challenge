import '../../styles/App.scss';
import GameForm from '../GameForm';
import MatchBox from '../MatchBox/MatchBox';
import Roster from '../Roster';
import TournamentTree from '../TournamentTree';

const App = () => {
  return (
    <div className="pageStyle">
      <GameForm />
      <Roster />
      <MatchBox />
      <TournamentTree />
    </div>
  );
}

export default App;
