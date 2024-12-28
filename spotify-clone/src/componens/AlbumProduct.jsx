import React from 'react'
import { useNavigate } from 'react-router-dom';

function AlbumProduct({image,desc,name,bg,id}) {

  const navigate = useNavigate();

  return (
    <div className=' ' >
      <div onClick={() => navigate(`/album/${id}`)} className=' flex flex-col gap-1 p-2.5  min-w-[180px] hover:bg-[#ffffff26] cursor-pointer '>
        <img src={image} alt='' className=' w-[150px] h-[150px] rounded-md' />
        <p className=' font-bold  text-white'>{name}</p>
        <p className=' text-xm text-slate-200'>{desc}</p>
      </div>

    </div>
  )
}

export default AlbumProduct;