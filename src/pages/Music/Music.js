import React from 'react';
import { motion } from 'framer-motion';
import './Music.css';
import SpotifyEmbed from './SpotifyEmbed';
// import LatestUpdateCard from '../cards/LatestUpdateCard';

const Music = ({ theme, changeTheme }) => {
  return (
    <motion.div
      className='music'
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* <LatestUpdateCard
        artworkSrc="/images/dasteWORLD_Album_Artwork.jpeg"
        links={{
          spotify: "https://open.spotify.com/album/...", 
          apple: "https://music.apple.com/album/...",
          youtube: "https://music.youtube.com/playlist?list=...",
          bandcamp: "https://daste.bandcamp.com/album/dasteworld"
        }}
      /> */}

      <motion.div
        className="video-wrapper"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        <iframe 
          src="https://www.youtube.com/embed/tS8d4XtT5oM?si=qst2KXv-XqEHGim4" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        />
      </motion.div>

      <motion.div
        className="spotify-embed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      >
        <SpotifyEmbed artistId={'5uXWOfu1kA8mQ9bUp5GgxT'} />
      </motion.div>
    </motion.div>
  );
}

export default Music;