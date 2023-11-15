import './App.css';
import NavBar from '../NavBar/NavBar';
import AppFooter from '../App-Footer/AppFooter.js';
import Intro from '../Introduction/Intro';
import NotePad from '../Notepad/Notepad.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className='App-main'>
       <Intro/>
        <NotePad />
      </main>
      <AppFooter/>
    </div>
  );
}

export default App;
