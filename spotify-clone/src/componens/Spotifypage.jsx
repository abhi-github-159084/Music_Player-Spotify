import React, { useEffect } from 'react';
import { assets } from '../assets/assets';

function Spotifypage() {

    function showSpotify() {
        setTimeout(function() {
            console.log('show spotify page');
            let img = document.querySelector('.active');
            if (img) {
                img.classList.add('hidden');
                img.classList.remove('block'); // Assuming you want to remove the 'hidden' class
            }
        }, 3000);
    }

    useEffect(() => {
        showSpotify();
    }, []);

    return (
        <div className='active block'>
            <img src={assets.spotify_logo} alt='' />
        </div>
    );
}

export default Spotifypage;
