import React from 'react';

import LibrarySong from './LibrarySong';

const Library = ({songs, isPlaying, setCurrentSong, audioRef}) => {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => 
                <LibrarySong 
                setCurrentSong={setCurrentSong} 
                songs={songs} 
                song={song}
                id={song.id}
                key={song.id}    
                audioRef={audioRef}   
                isPlaying={isPlaying}         
                />)}
            </div>
        </div>
    )
}

export default Library;
