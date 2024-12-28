import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';
import Player from './Player';
import Navbar from './Navbar';
import Display from './Display';
import { useParams } from 'react-router-dom';
import { assets, songsData } from '../assets/assets';
// import { albumsData } from '../assets/assets';
import { useContext } from 'react';
import { PlayerStateContext } from '../context/PlayerStateContext';

function InsideAlbum() {
  const {accessAudio,track,setTrack,volume,playpausefunction,play,seekbar,seekbg,time,volumeHandler,idHandler,previousfunctionHandler,nextfunctionHandler,albumsData,songsData } = useContext(PlayerStateContext);
  const{id} = useParams();
  console.log('the album id is :', id);
  const album = albumsData[id];
  let bgcolor = albumsData[id].bgColor;

  useEffect(()=>{
    document.querySelector('.bgcolor').style.background =`linear-gradient(${bgcolor} , #121212  )`;
    document.querySelector('.bgcolor2').style.backgroundColor =`${bgcolor} `; 
    console.log(bgcolor);
  },[]);

  // const [filterSongs,setFilterSongs] = useState([]);

  // // ek aisa function liko jo whi song uthae jo jis album me feed kiya ho
  // const filterSongsData = async () => {
  //   const newData = [];
  //   for(let i=0 ; i<songsData.length ; i++){
  //     songsData[i].filter((item) => {item.album})
  //   }
  // }

  return (
    <div className=  " bg-black  h-screen w-screen"  >
      <div className=' h-[90vh] flex '>
        <Sidebar/>
        <div className=' w-full p-2 text-white overflow-auto scrollable-content '>
            <Navbar />
            <div className=' flex gap-0 sm:gap-10 text-white p-4 items-end justify-center sm:justify-normal  flex-wrap  bgcolor2  '>
              <img src={album.image} alt='' className=' w-[130px] sm:w-[170px]'/>
              <div className=' flex flex-col gap-1  sm:gap-2 pt-2 px-4'>
                <p>Playlist</p>
                <p className=' font-bold text-3xl sm:text-5xl'>{album.name}</p>
                <p className=' '>Your Weekly update of the most played tracks</p>
                <div className=' flex gap-1 flex-wrap items-center justify-center sm:gap-2 '>
                  <img src={assets.spotify_logo} alt='' className=' w-[20px] h-[20px] sm:w-[20px]'/> 
                  <span>Spotify</span>
                    <li>2,12,345 likes</li>
                    <li>50 Songs</li>
                    <li>2 hr 30 min</li>
                </div>
              </div>
            </div>
              
            <div className='  pt-2  bgcolor '>
                <div className=' grid grid-cols-4 gap-14 justify-between p-2 '>
                  <div className=' flex gap-5'>
                    <p>#</p>
                    <p>Title</p>
                  </div>
                  <div>Album</div>
                  <div>Date Added</div>
                  <div>
                    <img src={assets.clock_icon} alt='' className=' w-[25px]' />
                  </div>
                </div> 
                <hr className=' ml-2 mr-2 '/>
                  {
                    songsData.filter((item)=>item.album === album.name).map( (eachsong,index) => {
                        return <div onClick={()=>idHandler(index)} className=' flex gap-5 p-2 justify-evenly hover:bg-[#ffffff26]'>
                          <div className='flex gap-4 '>
                            <p>{eachsong.id+1}</p>
                            <img src={eachsong.image} alt='' className='w-[55px]' />
                            <p className=''>{eachsong.name}</p>
                          </div>
                          <div className=' hidden sm:flex'>{album.name}</div>
                          <div>5 days ago</div>
                          <div>{eachsong.duration}</div>
                        </div>
                      })
                    }
            </div>

        </div>
      </div>
  
      <div className=''>
        <Player/>
      </div>
    </div>
  )
}

export default InsideAlbum;