import './Notepad.css';
import Note from '../Note/Note';


export default function NotePad({todoNotes, inProgressNotes, doneNotes, onAddNote}) {
    return (
        <>
        <div className='notepad-container'>
            <button onClick={onAddNote}>Add Note</button>
            <div className='notepad'>
                    <h2 className='notepad-title'>To Do</h2>
                         {todoNotes.map((note) => {
                            return (
                                <Note />
                            )
                        })}
                    
                </div>
                <div className='notepad'>
                    <h2 className='notepad-title'>In Progress</h2>
                        {inProgressNotes.map((note) => {
                            return (
                                <Note />
                            )
                        })}
                </div>
                <div className='notepad'>
                    <h2 className='notepad-title'>Done</h2>
                        {doneNotes.map((note) => {
                                return (
                                    <Note />
                                )
                            })}
                </div>
        </div>
        </>
    )
}
