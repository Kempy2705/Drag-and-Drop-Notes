import './App.css';
import NavBar from '../NavBar/NavBar';
import AppFooter from '../App-Footer/AppFooter.js';
import Intro from '../Introduction/Intro';
import NotePad from '../Notepad/Notepad.js';
import Note from '../Note/Note.js';
import { useState } from 'react';
import uuid from 'react-uuid';



function App() {
  const [notes,setNotes] = useState([]);

  const addNote = () => {
    const newNote = {
      id: uuid(),
      body: '',
      status: 'todo'
    }
    if (notes.length < 3) {
      setNotes([...notes, newNote]);
    }
    
  }

  return (
    <div className="App">
      <NavBar />
      <main className='App-main'>
       <Intro/>
        <NotePad
          notes={notes}
          onAddNote={addNote}/>
      </main>
      <AppFooter/>
    </div>
  );
}

export default App;
