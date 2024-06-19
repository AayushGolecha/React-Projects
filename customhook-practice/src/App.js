import './App.css';
import Data from './components/fetchdata'
import Data1 from './components/fetch'
import StatusBar from './components/network';
import SaveButton from './components/Savebutton';

function App() {
  return (
    <div className="App">
      <StatusBar />
      <SaveButton />
      <Data />
      <Data1 />
    </div>
  );
}

export default App;
