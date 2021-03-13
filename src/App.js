import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import Characters from './Components/Characters';
function App() {
  return (
    <div>
      <BrowserRouter>
    <Navbar />
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/characters">
      <Characters />
    </Route>
    </BrowserRouter>
    </div>
  );
}

export default App;
