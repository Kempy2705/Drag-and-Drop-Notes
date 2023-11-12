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
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
    </div>
  );
}

export default App;
