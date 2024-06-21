
import './App.css';
import Reuse from './reusecomp';

function App() {
  return (
    <div style={{width:"150px", margin:"auto"}}>
      <Reuse color="aqua" name="Button 1" handle={()=>alert('I\'m Button 1')}/>
      <Reuse color="red" name="Button 2" handle={()=>alert('I\'m Button 2')}/>
    </div>
  );
}

export default App;
