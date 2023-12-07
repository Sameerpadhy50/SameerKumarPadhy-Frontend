import logo from './logo.svg';
import './App.css';
import { Capsules } from './Components/Capsules';
import {Navbar} from './Components/Navbar';
import { Register } from './Components/Register';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Capsules/>
      {/* <Register/> */}
    </div>
  );
}

export default App;
