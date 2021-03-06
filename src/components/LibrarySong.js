import React from 'react';

const LibrarySong = ({song, songs, setCurrentSong, isPlaying, audioRef, id}) => {

    const songSelectHandler = ()=>{
        const selectedSong = songs.filter((state) => state.id === id);
        setCurrentSong(selectedSong[0])
        audioRef.current.play()
    
        //Check if the Song is Playing
        if (isPlaying){
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then((audio)=>{
                    audioRef.current.play()
                })
            }
        }
    }

    return (
        <div onClick={songSelectHandler} className="library-song">
            <img src={song.cover}></img>
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;
