import { useState } from 'react';
import Note from '../Note/Note';
import './Notepad.css';
import uuid from 'react-uuid';



export default function NotePad({notes, onAddNote, updateNoteStatus, updateNoteContent, deleteNote}) {

    return (
        <>
        <div className='notepad-container'>
            <button onClick={onAddNote}>Add Note</button>
            <div className='notepad'>
                    <h2 className='notepad-title'>To Do</h2>
                    {notes.filter((note) => note.status === 'todo')
                    .map((note) => (
                        <Note
                         key={note.id}
                         note={note}
                         updateNoteStatus={updateNoteStatus}
                         updateNoteContent={updateNoteContent}
                         deleteNote={deleteNote}
                         />
                    ))}
                </div>
                <div className='notepad'>
                    <h2 className='notepad-title'>In Progress</h2>
                    {notes.filter((note) => note.status === 'inProgress')
                    .map((note) => (
                        <Note
                         key={note.id}
                         note={note}
                         updateNoteStatus={updateNoteStatus}
                         updateNoteContent={updateNoteContent}
                         deleteNote={deleteNote}
                         />
                    ))}
                </div>
                <div className='notepad'>
                    <h2 className='notepad-title'>Done</h2>
                    {notes.filter((note) => note.status === 'Done')
                    .map((note) => (
                        <Note
                         key={note.id}
                         note={note}
                         updateNoteStatus={updateNoteStatus}
                         updateNoteContent={updateNoteContent}
                         deleteNote={deleteNote}
                         />
                    ))}
                </div>
        </div>
        </>
    )
}
