import logo from '../logo.svg';
import './App.css';
import NavBar from '../NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <nav className='Nav-Bar'>
        <NavBar />
      </nav>
      <header className="App-header">
          <div className='Intro-container'>
            <h2>Had some thoughts?</h2>
            <p>Why not write them down?<br/>As you take notes, feel free to drag them to the different containers as you are done with those thoughts!</p>
          </div>
      </header>
      <main className='App-main'>
      </main>
      <footer className='App-Footer'>
      <div className='Made-with-react'>
          <img src={logo} className="App-logo" alt="logo" />
        <p>
          Made with <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a>
        </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
