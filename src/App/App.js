import './App.css';
import NavBar from '../NavBar/NavBar';
import AppFooter from '../App-Footer/AppFooter.js';
import Intro from '../Introduction/Intro';
import NotePad from '../Notepad/Notepad.js';
import Note from '../Note/Note.js';
import { useState } from 'react';
import uuid from 'react-uuid';


function App() {
  const [todoNotes,setNotes] = useState([]);
  const [inProgressNotes,setInProgressNotes] = useState([]);
  const [doneNotes,setDoneNotes] = useState([]);

  function onAddNote() {
    const newNote = {
      id: uuid(),
      body: ""
    };

setNotes([newNote, ...todoNotes]);
  }


  return (
    <div className="App">
      <NavBar />
      <main className='App-main'>
       <Intro/>
        <NotePad todoNotes={todoNotes} inProgressNotes={inProgressNotes} doneNotes={doneNotes} onAddNote={onAddNote}/>
      </main>
      <AppFooter/>
    </div>
  );
}

export default App;
