import React, { useState, useEffect } from 'react';
import './App.css';
import db from './firebase';
import Video from './Video';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="App">

      <div className="app_vid">
        {videos.map(
          ({ url, channel, description, song, likes, comments, shares }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              comments={comments}
              description={description}
              shares={shares}
            />
          )
        )}



      </div>
    </div>
  );
}

export default App;
