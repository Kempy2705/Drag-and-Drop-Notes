import './App.css';
import NavBar from '../NavBar/NavBar';
import AppFooter from '../App-Footer/AppFooter.js';
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
      <AppFooter/>
    </div>
  );
}

export default App;
