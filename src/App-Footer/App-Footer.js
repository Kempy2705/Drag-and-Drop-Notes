import './App-Footer.css'
import logo from '../logo.svg';

export default function App_Footer() {
    return (
        <footer className='App-Footer'>
        <div className='Made-with-react'>
            <img src={logo} className="App-logo" alt="logo" />
          <p>
            Made with <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a>
          </p>
          </div>
        </footer>
    );
}