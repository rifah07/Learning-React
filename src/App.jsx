import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
//import Names from './Names';
import Greetings from './Greetings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome/>
        {/* <Names /> */}
        <Greetings />
        
      </header>
    </div>
  );
}

export default App;
