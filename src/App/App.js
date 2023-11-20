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

  const updateNoteStatus = (id, newStatus) => {
    setNotes((prevNotes) => 
      prevNotes.map((note) => 
        note.id === id ? {...note, status: newStatus} : note
      )
    );
  };


  const updateNoteContent = (id, newContent) => {
    setNotes((prevNotes) => 
      prevNotes.map((note) => 
      note.id === id ? {...note, content: newContent} : note
      )
    );
  };

  return (
    <div className="App">
      <NavBar />
      <main className='App-main'>
       <Intro/>
        <NotePad
          notes={notes}
          onAddNote={addNote}
          updateNoteStatus={updateNoteStatus}
          updateNoteContent={updateNoteContent}/>
          
      </main>
      <AppFooter/>
    </div>
  );
}

export default App;
