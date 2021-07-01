import './App.css';
import Inputs from './Form/Inputs'
import Header from './Header/Header'
import Current from './DataDisplay/Current'
import Blurb from './DataDisplay/Blurb'
import {
  Route,
  HashRouter
} from "react-router-dom";
import Profile from './Profile'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Route exact path="/" component={Blurb} />
        <Route exact path="/" component={Current} />
        <Route exact path="/" component={Inputs} />
        <Route exact path="/profile" componenet={Profile} />
      </HashRouter>
    </div>
  );
}

export default App;
