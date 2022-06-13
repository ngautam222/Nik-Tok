import React from 'react'
import './Vidfooter.css';
import { MusicNoteIcon } from '@heroicons/react/outline'

function Vidfooter({ channel, description, song }) {
    return (
        <div className="vidfooter">
            <div className='footer_text'>
                <h3>@{channel}</h3>
                <h3>        </h3>
                <p>{description}</p>
                <div className='par'>
                    <div className='yo'><MusicNoteIcon /></div>
                    <div className='tick'>
                        <marquee>{song}</marquee>
                    </div>
                </div>
            </div>
            <img className='record'
                src='https://pngimg.com/uploads/vinyl/vinyl_PNG100.png'
                alt='' />
            {/* <img src='https://www.cics.umass.edu/sites/default/files/styles/people_individual/public/headshots/marius_minea.jpg?itok=tefvgUq8'></img> */}
        </div>
    )
}

export default Vidfooter