import './App.css';
import NavBar from '../NavBar/NavBar';
import App_Footer from '../App-Footer/App-Footer';
import Intro from '../Introduction/Intro';

function App() {
  return (
    <div className="App">
      <nav className='Nav-Bar'>
        <NavBar />
      </nav>
      <main className='App-main'>
        <Intro />
      </main>
      <App_Footer/>
    </div>
  );
}

export default App;
