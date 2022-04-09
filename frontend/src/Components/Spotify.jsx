import React from 'react'
import SpotifyPlayer from 'react-spotify-player';
const Spotify = () => {

    const size = {
        width: '20%',
        height: 500,
    };
    const view = 'list'; // or 'coverart'
    const theme = 'black'; // or 'white'

    return (
        <>

<iframe title="My Daily Marathon Tracker" src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?utm_source=generator" width="20%" height="500" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </>
    )
}

export default Spotify