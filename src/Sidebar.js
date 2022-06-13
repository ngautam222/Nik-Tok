import { ChatIcon, HeartIcon, ShareIcon } from '@heroicons/react/solid';
import { HeartIcon as Outline } from '@heroicons/react/outline';
import React, { useState } from 'react'
import './sidebar.css';

function Sidebar({ likes, shares, comments }) {
    const [liked, setliked] = useState(true);
    return (
        <div className='sidebar'>

            {/* <h1>ypo</h1> */}

            <div className='button1'>
                {liked ? (
                    < Outline fontSize="large" onClick={x => setliked(false)} />
                ) : (<HeartIcon fontSize="large" onClick={x => setliked(true)} />
                )
                }
                {liked ? (<p>{likes}</p>) : (<p>{likes + 1}</p>)}
            </div>
            <div className='button2'>

                <ChatIcon />
                <p>{comments}</p>
            </div>

            <div className='button3'>

                <ShareIcon />
                <p>{shares}</p>
            </div>
        </div>

    )
}

export default Sidebar;