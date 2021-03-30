import '../../styles/App.scss';
import GameForm from '../GameForm';
import MatchBox from '../MatchBox/MatchBox';
import Roster from '../Roster';
import TournamentTree from '../TournamentTree';
import Victory from '../Victory';

const App = ({gameConcluded}) => {
  return (

    <div className="pageStyle">
      <GameForm />
      <Roster />
      { gameConcluded ? <Victory /> : null}
      <TournamentTree />
      <MatchBox />
    </div>
  );
}

export default App;
