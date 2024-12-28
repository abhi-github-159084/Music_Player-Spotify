import {React,useContext} from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { PlayerStateContext } from '../context/PlayerStateContext'

const Sidebar = () => {
    const {songsData} = useContext(PlayerStateContext)
    let navigate = useNavigate();
  return (
    
        songsData.length !== 0 ?
        <>
<div className=' lg:w-[25%] h-full p-2 flex-col gap-2 text-white hidden w-[0%] lg:flex '>
        <div className=' h-[15%] bg-[#121212] rounded flex flex-col justify-around '>
            <div onClick={()=>navigate('/')} className=' flex items-center gap-3 pl-8 cursor-pointer '>
                <img src={assets.home_icon} className='w-6'></img>
                <p className=' font-bold'>Home</p>
            </div>
            <div className=' flex items-center gap-3 pl-8 cursor-pointer '>
                <img src={assets.search_icon} className='w-6'></img>
                <p className=' font-bold'>Search</p>
            </div>
        </div>

        <div className=' h-[85%] flex flex-col bg-[#121212] rounded'>
            <div className=' flex p-4 justify-between'>
                <div className=' flex gap-3 items-center'>
                    <img src={assets.stack_icon} className='w-6' alt=''/>
                    <p className='font-bold '>Your Library</p>
                </div>
                <div className=' flex gap-3 items-center'>
                    <img src={assets.arrow_icon} className='w-5' alt=''/>
                    <img src={assets.plus_icon} className='w-5' alt=''/>
                </div>
            </div>

            <div className=' p-4 bg-[#242424] rounded m-2 font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                <h1>Create your first playlist</h1>
                <p className=' font-light'>It's we will help you</p>
                <button className=' px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
            </div>

            <div className=' p-4 bg-[#242424] rounded m-2 font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                <h1>Let's find some poscast to follow</h1>
                <p className=' font-light'> We will keep update you on new podcast's</p>
                <button className=' px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse podcasts</button>
            </div>

        </div>

    </div>
        </>
        : null
    
    
  )
}

export default Sidebar