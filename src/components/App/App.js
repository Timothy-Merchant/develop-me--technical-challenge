import '../../styles/App.scss';
import GameForm from '../GameForm';
import Player from '../Player/Player';
import Roster from '../Roster';
import TournamentTree from '../TournamentTree';

const App = () => {
  return (
    <div className="pageStyle">
      <GameForm />
      <Roster />
      <Player/>
      <TournamentTree />
    </div>
  );
}

export default App;
