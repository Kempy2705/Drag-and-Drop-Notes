import './Note.css';


export default function Note({note, updateNoteStatus, updateNoteContent, deleteNote}) {


    // Ensures that the notes content or 'body' is updated as the user typs in their commands
    const handleContentChange = (e) => {
        updateNoteContent(note.id, e.target.value);
    };
    // Provide the JSX for the Note Component
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