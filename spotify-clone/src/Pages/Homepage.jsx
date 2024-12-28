import React, { useEffect } from 'react'
import Sidebar from '../componens/Sidebar';
import Display from '../componens/Display';
import Player from '../componens/Player';

function Homepage() {


  return (
    <div className=' bg-black h-screen w-screen '>



    <div className=' h-[90vh] flex '>
        <Sidebar/>
        <Display/>
      </div>
  
      <div className='h-[10vh]'>
        <Player/>
      </div>
    </div>


  )
}

export default Homepage;