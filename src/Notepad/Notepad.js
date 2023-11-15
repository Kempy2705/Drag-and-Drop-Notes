import './Notepad.css';


export default function NotePad() {
    return (
        <>
        <div className='notepad-container'>
            <div className='notepad'>
                <h2 className='note-title'>To Do</h2>
            </div>
            <div className='notepad'>
                <h2 className='note-title'>In Progress</h2>
            </div>
            <div className='notepad'>
                <h2 className='note-title'>Done</h2>
            </div>
        </div>
        </>
    )
}