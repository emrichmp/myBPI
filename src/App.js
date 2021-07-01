import './App.css';
import Inputs from './Form/Inputs'
import Header from './Header/Header'
import Current from './DataDisplay/Current'
import Blurb from './DataDisplay/Blurb'
import {
  Route,
  HashRouter
} from "react-router-dom";
import Profile from './Profile/Profile'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Route path='/profile' component={Profile} />
        <Route exact path="/" component={Blurb} />
        <Route exact path="/" component={Current} />
        <Route exact path="/" component={Inputs} />
      </HashRouter>
    </div>
  );
}

export default App;
