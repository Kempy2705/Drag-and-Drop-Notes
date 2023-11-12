import './App.css';
import NavBar from '../NavBar/NavBar';
import App_Footer from '../App-Footer/App-Footer';
import Intro from '../Introduction/Intro';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className='App-main'>
       <Intro/>
       <div className="Notepad-Container">
        
       </div>
      </main>
      <App_Footer/>
    </div>
  );
}

export default App;
