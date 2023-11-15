import './Notepad.css';
import Note from '../Note/Note';

export default function NotePad() {
    return (
        <>
        <div className='notepad-container'>
            <div className='notepad'>
                <h2 className='notepad-title'>To Do</h2>
                <Note />
            </div>
            <div className='notepad'>
                <h2 className='notepad-title'>In Progress</h2>
                <Note />
            </div>
            <div className='notepad'>
                <h2 className='notepad-title'>Done</h2>
                <Note />
            </div>
        </div>
        </>
    )
}