import './Note.css';

export default function Note() {
    return (
        <>
        <div className='note'>
            <textarea className='text-field' placeholder='Write Something...'/>
            <button>Left</button>
            <button>Right</button>
        </div>
        </>
    )
}