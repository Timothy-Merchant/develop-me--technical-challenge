import '../../styles/App.scss';
import GameForm from '../GameForm';
import Roster from '../Roster';
import TournamentTree from '../TournamentTree';

const App = () => {
  return (
    <div className="pageStyle">
      <GameForm />
      <Roster />
      <TournamentTree />
    </div>
  );
}

export default App;
