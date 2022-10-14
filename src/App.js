import './App.css';
import {  helloName } from './components/es';


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      {helloName('karim')}
      </header>

    </div>
  );
}

export default App;
