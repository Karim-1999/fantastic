import './App.css';
import {  Sum } from './components/es';


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      {Sum(3, 3)}
      </header>

    </div>
  );
}

export default App;
