import { useContext, useState,useRef } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import InsideAlbum from "./componens/InsideAlbum";
import { useEffect } from "react";
import { assets } from "./assets/assets";
import { PlayerStateContext } from "./context/PlayerStateContext";
import Sidebar from "./componens/Sidebar";
import Display from "./componens/Display";
import Player from "./componens/Player";

function App() {

  // const audioRef = useRef(null);
  const {currentSong,track,accessAudio,songsData} = useContext(PlayerStateContext);

  function showSpotify() {
    setTimeout(function() {
        console.log('show spotify page');
        let img = document.querySelector('.active');
        let home = document.querySelector('.home');

        if (img) {
            img.classList.add('hidden');
            img.classList.remove('block'); // Assuming you want to remove the 'hidden' class
            home.classList.add('block'); // Assuming you want to add the 'block' class
            home.classList.remove('hidden');
        }
    }, 2000);
}

useEffect(() => {
    showSpotify();
}, []);

  return (
    <div className=" ">

        <div className='active block justify-cente items-center bg-black w-screen h-[100vh] '>
            <img src={assets.spotify_logo_Big} alt='' className=' size-12 sm:size-24  mx-auto '/>
        </div>

      <div className="home hidden">

      {
        songsData.length !== 0 ?
        <>
        <Routes >
            <Route path='/' element={<Homepage/>} />
            <Route path="/album/:id" element={<InsideAlbum/>}/>
        </Routes>
        </>
        
        : null
      }
        <audio  src={track?track.file:""} ref={accessAudio}   preload="auto"></audio> {/* src={track?track.file:""} */ }
      

      

      </div>

    </div>
  );
}

export default App;
