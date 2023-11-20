import { useState } from 'react';
import './Note.css';


export default function Note({note, updateNoteStatus, updateNoteContent, deleteNote}) {

    const handleContentChange = (e) => {
        updateNoteContent(note.id, e.target.value);
    };

    return (
        <>
        <div className='note'>
            <textarea 
            className='text-field' 
            placeholder='Write Something...' 
            value={note.content} 
            onChange={handleContentChange} />
            <button className='note-button' onClick={() => updateNoteStatus(note.id, 'inProgress')}>Mark In Progress</button>
            <button className='note-button' onClick={() => updateNoteStatus(note.id, 'Done')}>Mark Done</button>
            <button className='note-delete-button' onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
        </>
    )
}