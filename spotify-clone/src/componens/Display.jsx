import React, { useContext } from 'react'
import Navbar from './Navbar';
import Albums from './Albums';
import { PlayerStateContext } from '../context/PlayerStateContext';

function Display() {
  const {songsData} = useContext(PlayerStateContext)
  return (
    songsData.length !== 0 ?
    <>
    <div className=' w-[100%] lg:w-[75%]  flex flex-col '>
        <div className=' w-full h-full px-2 pt-2'>
            <Navbar/>
        </div>
        <div className='w-full h-full px-2'>
            <Albums/>
        </div>
        
    </div>
    </>
    : null
    
  )
}

export default Display;