import React, { useContext } from 'react'
import { PlayerStateContext } from '../context/PlayerStateContext';
import { songsData } from '../assets/assets';

function SongProduct({image,desc,name,bg,id}) {
  const {track,setTrack,play,setPlay,accessAudio,idHandler,songsData} = useContext(PlayerStateContext);

  return (
    <div onClick={()=>{console.log("ye wali song id click kiya hai",id);idHandler(id)}} className=' ' >
      <div   className=' flex flex-col gap-1 p-2.5  min-w-[180px] hover:bg-[#ffffff26] cursor-pointer '>
        <img src={image} alt='' className=' w-[150px] h-[150px] rounded-md' />
        <p className=' font-bold  text-white'>{name}</p>
        <p className=' text-xm text-slate-200'>{desc}</p>
      </div>
    </div>
  )
}

export default SongProduct;