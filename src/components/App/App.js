import '../../styles/App.scss';
import PairingRow from '../PairingRow';
import TournamentTree from '../TournamentTree';

const App = () => {
  return (
    <>
      <h1>TournamentTree</h1>
      <TournamentTree />
      <h1>PairingRow</h1>
      <PairingRow />
    </>
  );
}

export default App;
