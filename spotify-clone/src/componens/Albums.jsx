import React from 'react'
// import { albumsData } from '../assets/assets';
import AlbumProduct from './AlbumProduct';
// import { songsData } from '../assets/assets';
import SongProduct from './SongProduct';
import { useContext } from 'react';
import { PlayerStateContext } from '../context/PlayerStateContext';

function Albums() {

   const {songsData,albumsData} = useContext(PlayerStateContext)

  return (
    <div className=' bg-[#121212]  h-[80vh] overflow-auto scrollable-content '>
        <div className=' flex p-3 '>
            <p className=' px-4 py-1 bg-white text-black rounded-full cursor-pointer'>All</p>
            <p className=' px-4 py-1  text-white rounded-full cursor-pointer'>Music</p>
            <p className=' px-4 py-1  text-white rounded-full cursor-pointer'>Podcasts</p>
        </div>

        <div className='  p-3 flex flex-col gap-5  overflow-auto scrollable-content'>
          <p className=' font-bold text-2xl text-white '>Featured Charts</p>
          <div className=' flex gap-0  sm:gap-2 '>{
            albumsData.map( (item,index) => <AlbumProduct key={index} image={item.image} name={item.name} desc={item.desc} bg={item.bgColor} id={index}/> )
            }
          </div>
        </div>
  
        <br/> <br/>
        <div className='  p-3 flex flex-col gap-5 overflow-auto scrollable-content'>
          <p className=' font-bold text-2xl text-white '>Today's Biggest Hits</p>
          <div className=' flex gap-0  sm:gap-2'>{
            songsData.map( (item,index) => <SongProduct key={index} image={item.image} name={item.name} desc={item.desc} bg={item.bgColor} id={index}/>)
            }
          </div>
        </div>
    </div>
  )
}

export default Albums;