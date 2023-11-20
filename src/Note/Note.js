import { useState } from 'react';
import './Note.css';


export default function Note() {

    return (
        <>
        <div className='note'>
            <textarea className='text-field' placeholder='Write Something...' />
            <button>Mark In Progress</button>
            <button>Mark Done</button>
            <button>Delete</button>
        </div>
        </>
    )
}