import '../../styles/App.scss';
import GameForm from '../GameForm';
import TournamentTree from '../TournamentTree';

const App = () => {
  return (
    <div className="pageStyle">
      <GameForm />
      <TournamentTree />
    </div>
  );
}

export default App;
