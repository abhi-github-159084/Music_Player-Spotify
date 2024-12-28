import React, { useContext, useEffect, useRef, useState } from 'react'
import { assets, songsData } from '../assets/assets'
import { PlayerStateContext } from '../context/PlayerStateContext'

function Player() {

    const {accessAudio,track,volume,playpausefunction,play,seekbar,seekbg,seekSong,time,volumeHandler,previousfunctionHandler,nextfunctionHandler } = useContext(PlayerStateContext);




    return  (
        track  ?
        <>
        <div className=' h-[10vh]  w-screen flex justify-between items-center bg-black text-white py-2 px-4 mt-2 sm:mt-0 pt-5 sm:pt-0 sm:pb-0'>
            <div className=' flex  items-center gap-3 sm:gap-4'>
                <img src={track.image} className=' w-11 sm:w-12 ' alt='' />
                <div>
                    <p className=' text-[14px] sm:text-[16px]'> {track.name}</p>
                    <p className=' hidden sm:flex'>{track.desc.slice(0, 12) + '...'}</p>
                    {/* <p className='hidden sm:flex'>{track.desc ? track.desc.slice(0, 12) + '...' : ''}</p> */}

                </div>
            </div>
            <div className=' flex flex-col items-center gap-1 m-auto'>
                <div className=' flex gap-2 sm:gap-4'>
                    <img src={assets.shuffle_icon} className=' w-4 cursor-pointer ' />
                    <img onClick={previousfunctionHandler} src={assets.prev_icon} className=' w-4 cursor-pointer ' />
                    <img onClick={playpausefunction}  src={play ? assets.pause_icon : assets.play_icon} className=' w-4 cursor-pointer ' />
                    <img onClick={nextfunctionHandler}  src={assets.next_icon} className=' w-4 cursor-pointer ' />
                    <img src={assets.loop_icon} className=' w-4 cursor-pointer ' />
                </div>
                <div className=' flex items-center gap-2 sm:gap-5'>
                    <p> {time.currentTime.minutes}:{time.currentTime.seconds}</p>
                    <div ref={seekbg} onClick={seekSong} className='w-[45vw]  sm:max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr ref={seekbar}   className='h-1 border-none w-0   bg-green-800 rounded-full ' />
                    </div>
                    <p>{time.totalTime.minutes}:{time.totalTime.seconds}</p>
                </div>
            </div>

            <div className=' hidden lg:flex items-center gap-2 opacity-75'>
                <img src={assets.plays_icon} alt='' className='w-4' />
                <img src={assets.mic_icon} alt='' className='w-4' />
                <img src={assets.queue_icon} alt='' className='w-4' />
                <img src={assets.speaker_icon} alt='' className='w-4' />
                <input className='range' type='range' min={0} max={1} step={0.01} onChange={volumeHandler}  value={volume}></input>
                <img src={assets.mini_player_icon} alt='' className='w-4' />
                <img src={assets.zoom_icon} alt='' className='w-4' />
            </div>
            <audio ref={accessAudio} id="audio-player" src={track?track.file:""} preload="auto"></audio>
        </div>

        </>
        : null
        
    ) 
}

export default Player












// import React, { useContext, useEffect, useRef, useState } from 'react'
// import { assets, songsData } from '../assets/assets'
// import { PlayerStateContext } from '../context/PlayerStateContext'

// function Player() {
//     const { play, setPlay, currentSong, volume, setVolume, totalTime, setTotalTime,currentTime , setCurrentTime} = useContext(PlayerStateContext);

//     const [starting,setstarting] = useState(0);
//     function changevolumeHandler(e) {
//         setVolume(e.target.value);
//         // console.log(e);
//         // document.querySelector('.range').style.backgroundSize = e.target.value*100 + '% 100%'   // yaha isliye nhi lagaya bcoz at starting this will not be called
//     }

//     useEffect( ()=> {
//         accessAudio.current.volume = volume;
//         document.querySelector('.range').style.backgroundSize = volume*100 + '% 100%'
//         console.log(accessAudio);
        
//     },[volume]);
    
//     const accessAudio = useRef(" ");
//     function playpauseHandler(){
//         if(play === true){
//             setPlay(false);
//             accessAudio.current.pause();    // accessAudio.current by this we access the autio tag and pause play is its property
//         }
//         else{
//             setPlay(true);
//             accessAudio.current.play();
//         }
//     }

//     let TotalTime = (parseInt( accessAudio.current.duration ));
//     setTotalTime(TotalTime);
//     let totalMinutes = parseInt(TotalTime/60);
//     let totalSeconds = TotalTime%60;
    
//     // function currenttimeHandler(){
//     //     let CurrentTime = (parseInt( accessAudio.current.currentTime ));
//     //     setCurrentTime(CurrentTime);
//     //     currentminutes = parseInt(CurrentTime/60);
//     //     currentseconds = CurrentTime%60;
//     // }

//     // useEffect( ()=> {
//     //     let CurrentTime = (parseInt( accessAudio.current.currentTime ));
//     //     console.log(CurrentTime);
//     //     setCurrentTime(CurrentTime);
//     //     currentminutes = parseInt(CurrentTime/60);
//     //     currentseconds = CurrentTime%60;
//     // },[currentTime]);
//     useEffect( () => {
//         setTimeout( () => {
//             accessAudio.current.ontimeupdate = () => {
//                 setCurrentTime(parseInt(accessAudio.current.currentTime ));
//                 // console.log(currentTime);
//             }
//         },1000);
//     },[currentTime]);



//     const lineChange = useRef('');
//     useEffect( ()=> {
//         // accessAudio.current.currentTime = lineChange.current
//         lineChange.current.style.width = ((currentTime/TotalTime)*100) + '%';
//     })
//     function lineChangeHandler(e){
//         setstarting(e.target.value);
//     }



//     return (
//         <div className=' h-[10%] w-screen flex justify-between items-center bg-black text-white py-2 px-4 '>
//             <div className=' hidden lg:flex  items-center gap-4'>
//                 <img src={songsData[0].image} className=' w-12 ' alt='' />
//                 <div>
//                     <p>{songsData[0].name}</p>
//                     <p>{songsData[0].desc.slice(0, 12) + '...'}</p>
//                 </div>
//             </div>
//             <div className=' flex flex-col items-center gap-1 m-auto'>
//                 <div className=' flex gap-4'>
//                     <img src={assets.shuffle_icon} className=' w-4 cursor-pointer ' />
//                     <img src={assets.prev_icon} className=' w-4 cursor-pointer ' />
//                     <img onClick={playpauseHandler}  src={play ? assets.pause_icon : assets.play_icon} className=' w-4 cursor-pointer ' />
//                     <img src={assets.next_icon} className=' w-4 cursor-pointer ' />
//                     <img src={assets.loop_icon} className=' w-4 cursor-pointer ' />
//                 </div>
//                 <div className=' flex items-center gap-5'>
//                     <p >{Math.floor(currentTime/60)}:{Math.floor(currentTime%60)}</p>
//                     <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
//                         <hr ref={lineChange} onChange={lineChangeHandler} className='h-1 border-none w-0   bg-green-800 rounded-full audioLine' />
//                     </div>
//                     <p>{totalMinutes}:{totalSeconds}</p>
//                 </div>
//             </div>

//             <div className=' hidden lg:flex items-center gap-2 opacity-75'>
//                 <img src={assets.plays_icon} alt='' className='w-4' />
//                 <img src={assets.mic_icon} alt='' className='w-4' />
//                 <img src={assets.queue_icon} alt='' className='w-4' />
//                 <img src={assets.speaker_icon} alt='' className='w-4' />
//                 <input className='range' type='range' min={0} max={1} step={0.01} onChange={changevolumeHandler} value={volume}></input>
//                 <img src={assets.mini_player_icon} alt='' className='w-4' />
//                 <img src={assets.zoom_icon} alt='' className='w-4' />
//             </div>
//             <audio ref={accessAudio} id="audio-player" src={currentSong} preload="auto"></audio>
//         </div>
//     )
// }

// export default Player
