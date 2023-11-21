import './App.css';
import NavBar from '../NavBar/NavBar';
import AppFooter from '../App-Footer/AppFooter.js';
import Intro from '../Introduction/Intro';
import NotePad from '../Notepad/Notepad.js';
import { useState } from 'react';
import uuid from 'react-uuid';



function App() {
  const [notes,setNotes] = useState([]);


  // Create a new Note Component and Add to the To-Do Container
  const addNote = () => {
    const newNote = {
      id: uuid(),
      body: '',
      status: 'todo'
    }
    
      setNotes([...notes, newNote]);
    
    
  }


  // Update the provided note's status by identifying it by its 'id'.
  // Doing so will update the state and move it to the appropriate list.
  const updateNoteStatus = (id, newStatus) => {
    setNotes((prevNotes) => 
      prevNotes.map((note) => 
        note.id === id ? {...note, status: newStatus} : note
      )
    );
  };


  // Ensures that the notes content or 'body' is updated as the user typs in their commands
  const updateNoteContent = (id, newContent) => {
    setNotes((prevNotes) => 
      prevNotes.map((note) => 
      note.id === id ? {...note, content: newContent} : note
      )
    );
  };



  // Delete the note from the app.
  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }


  // Render the App
  return (
    <div className="App">
      <NavBar />
      <main className='App-main'>
       <Intro/>
        <NotePad
          notes={notes}
          onAddNote={addNote}
          updateNoteStatus={updateNoteStatus}
          updateNoteContent={updateNoteContent}
          deleteNote={deleteNote}/>
      </main>
      <AppFooter/>
    </div>
  );
}

export default App;
