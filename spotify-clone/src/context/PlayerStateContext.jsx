import React, { createContext, useEffect, useRef, useState } from 'react'
// import { songsData } from '../assets/assets';
import axios from 'axios'

export const PlayerStateContext = createContext();

export default function PlayerStateContextProvider({children}){

    const [play,setPlay] = useState(false);
    const [volume,setVolume] = useState(0.5);  // Default volume set to 50%
    const [time,setTime] = useState({
        currentTime: {
            minutes: 0,
            seconds: 0
        },
        totalTime: {
            minutes: 0,
            seconds: 0
        }
    })

    const accessAudio = useRef(" ");
    const seekbar = useRef(" ");
    const seekbg = useRef(" ");
    console.log('seek bg', seekbg);
    console.log(accessAudio);

    const url = 'http://localhost:4000';
    const [songsData,setSongData] = useState([]);
    const [albumsData,setAlbumsData] = useState([]);
    const [track,setTrack] = useState(songsData[0]);
    
    const playpausefunction = () => {
        if(play){
            accessAudio.current.pause();                         
            setPlay(false);
        }
        else{
            accessAudio.current.play();
            setPlay(true);
        }
    };
    const volumeHandler = (e) => {
        setVolume(e.target.value);
        accessAudio.current.volume = e.target.value;  // Update the audio volume when the seek bar is moved.
        document.querySelector('.range').style.backgroundSize = e.target.value*100 + '% 100%'
    }
    const idHandler = async (id) => {
        console.log("idHandler se ye id hai: ",id);
        await setTrack(songsData[id]);
        await accessAudio.current.play();
        setPlay(true);
    }
    const nextfunctionHandler = async () => {
        if(track.id<(songsData.length-1)){
            await setTrack(songsData[track.id + 1]);
            await accessAudio.current.play();
            setPlay(true);
        }
    }
    const previousfunctionHandler = async () => {
        if(track.id > 0){
            await setTrack(songsData[track.id - 1]);
            await accessAudio.current.play();
            setPlay(true);
        }
    }
    const seekSong = (e) => {
        console.log(e);
        accessAudio.current.currentTime = (e.nativeEvent.offsetX / seekbg.current.offsetWidth) * accessAudio.current.duration;
    }

    const getSongsData = async () => {
        try {
            const response = await axios.get(`${url}/api/song/list`);
            console.log('it is the songs list data came for spotify-clone',response);
            setSongData(response.data.data);
            setTrack(response.data.data[0]);
        } catch (error) {
            
        }

    }
    const getAlbumsData = async () => {
        try {
            const response = await axios.get(`${url}/api/album/list`);
            console.log('it is the albums list data came for spotify-clone',response);
            setAlbumsData(response.data.albums);
        } catch (error) {
        }
    }

    // we have to call this whenever this components were loaded
    useEffect(()=>{
        getAlbumsData();
        getSongsData();
    },[]);

    useEffect(()=>{
        setTimeout(() => {
            accessAudio.current.ontimeupdate = () => {
                seekbar.current.style.width =( accessAudio.current.currentTime/accessAudio.current.duration *100) + '%';
                console.log('now is the chance to change the time')
                setTime({
                    currentTime: {
                        minutes: Math.floor(accessAudio.current.currentTime / 60),
                        seconds: Math.floor(accessAudio.current.currentTime % 60)
                    },
                    totalTime: {
                        minutes:Math.floor(accessAudio.current.duration / 60),
                        seconds: Math.floor(accessAudio.current.duration % 60),
                    }
                });
            }
        }, 1000);
    },[accessAudio]);

    const value= {
    accessAudio,
    play,setPlay,
    volume,setVolume,
    time,setTime,
    track,setTrack,
    playpausefunction,
    seekbar,seekbg,
    volumeHandler,
    idHandler,
    nextfunctionHandler,
    previousfunctionHandler,
    seekSong,
    songsData,albumsData
    }



    return <PlayerStateContext.Provider value={value} >
        {children}
    </PlayerStateContext.Provider> 
}
