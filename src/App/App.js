import './App.css';
import NavBar from '../NavBar/NavBar';
import App_Footer from '../App-Footer/App-Footer';

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
      <App_Footer/>
    </div>
  );
}

export default App;
