import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
//import MyForm from './MyForm';
//import Names from './Names';
import Greetings from './Greetings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome/>
        {/* <Names /> */}
       { /*<MyForm/>  */}
    <Greetings username= "User1"/>
        
      </header>
    </div>
  );
}

export default App;
