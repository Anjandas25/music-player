import React, {useState, useRef} from 'react';

import Song from './components/Song';

import app from './styles/app.scss';

import Player from './components/Player';

import Nav from './components/Nav';

import Library from './components/Library';

import data from './util';
import LibrarySong from './components/LibrarySong';

const App = () => {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({
      currentTime: 0,
      duration: 0,
  });  

      //Using useRef
      const audioRef = useRef(null);

      // Event Handler
      const timeUpdateHandler = (e) =>{
      const current = e.target.currentTime;
      const duration = e.target.duration;
      setSongInfo({...songInfo, currentTime:current, duration})
  }

  return (
    <div>
      <Nav />
      <Song currentSong={currentSong}/>
      <Player audioRef={audioRef} setSongInfo={setSongInfo} songInfo={songInfo} currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>

      <Library isPlaying={isPlaying} songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef}/>
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src = {currentSong.audio}></audio>
    </div>
  )
}

export default App; 
