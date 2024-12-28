import React from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  let navigate = useNavigate();
  return (
    <div className=' bg-[#121212] w-[100%] flex items-center justify-between pb-4  '>
        <div className='  flex p-2 gap-4'>
            <button onClick={() => navigate(-1)}><img  className=' size-9 rounded-2xl bg-black p-2 cursor-pointer' src={assets.arrow_left} alt=''/></button>
            <button onClick={() => navigate(1)}><img className=' w-9 h-9 rounded-2xl bg-black p-2 cursor-pointer' src={assets.arrow_right} alt=''/></button>
        </div>
        <div className=' flex gap-5 text-white p-2'>
            <p className=' px-4 py-1 bg-white text-black font-semibold  text-center  rounded-full cursor-pointer'>Explore Premium</p>
            <p className=' px-4 py-1 bg-black text-white font-semibold  text-center rounded-full cursor-pointer'> Install App</p>
            <p className=' px-4 py-1 bg-black text-white font-semibold  text-center rounded-full cursor-pointer'> Sign In</p>
            <p title='Abhishek Singh' className=' bg-purple-500 w-7 h-7 rounded-full text-center my-auto cursor-pointer'>A</p>
        </div>

    </div>
  )
}

export default Navbar;