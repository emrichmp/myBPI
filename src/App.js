import './App.css';
import Inputs from './Form/Inputs'
import Header from './Header/Header'
import Current from './DataDisplay/Current'

function App() {
  return (
    <div className="App">
      <Header />
      <Current />
      <Inputs />
    </div>
  );
}

export default App;
