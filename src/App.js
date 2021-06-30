import './App.css';
import Inputs from './Form/Inputs'
import Header from './Header/Header'
import Current from './DataDisplay/Current'
import Blurb from './DataDisplay/Blurb'

function App() {
  return (
    <div className="App">
      <Header />
      <Blurb />
      <Current />
      <Inputs />
    </div>
  );
}

export default App;
