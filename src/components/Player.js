import React, {useRef, useState} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faPlay, faPause, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong, setIsPlaying, isPlaying, audioRef, songInfo, setSongInfo}) => {


    const playSongHandler =()=>{
        
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying)
        }
}

    //To Show Time Nicely
    const getTime =(time)=>{
        return (
            Math.floor(time /60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    };

    const dragHandler =(e)=>{
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
    }
    
    return (
        <div className="player">
           <div className="time-control">
            <p>{getTime(songInfo.currentTime)}</p>
            <input
            min={0}
            max={songInfo.duration}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
            />

            <p>{getTime(songInfo.duration)}</p>
           </div>
           <div className="play-control">
               <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon
                onClick={playSongHandler}
                className="play"
                icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight}/>
           </div>
        </div>
    )
}

export default Player;
