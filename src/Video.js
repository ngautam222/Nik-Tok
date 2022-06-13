import React, { useRef, useState } from 'react'
import Sidebar from './Sidebar'
import './Video.css'
import Vidfooter from './Vidfooter'
// import React, { useRef } from 'react'

function Video({ url, channel, description, song, likes, shares, comments }) {
    const [play, setPlay] = useState(false)
    const ref = useRef(null)
    const Press = () => {
        if (!play) {

            ref.current.play();
            setPlay(true);
        }
        else {
            ref.current.pause();
            setPlay(false)
        }
    }
    return (
        <div className='video'>
            <video className="player"
                loop
                onClick={Press}
                ref={ref}

                src={url}>

            </video>

            <Vidfooter channel={channel} description={description} song={song} />
            <Sidebar likes={likes} shares={shares} comments={comments} />
        </div>
    )
}

export default Video