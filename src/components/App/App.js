import '../../styles/App.scss';
import PairingRow from '../PairingRow';
import TournamentTree from '../TournamentTree';

const App = () => {
  return (
    <div className="pageStyle">
      <h1>TournamentTree</h1>
      <TournamentTree />
      <h1>PairingRow</h1>
      <PairingRow />
    </div>
  );
}

export default App;
