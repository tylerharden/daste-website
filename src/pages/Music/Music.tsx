import React from 'react';
import { motion } from 'framer-motion';
import './Music.css';
import type { ChangeTheme, ThemeName } from '../../types/theme';
import SpotifyEmbed from './SpotifyEmbed';
import SEO from '../../components/SEO';

type MusicProps = {
  theme: ThemeName;
  changeTheme: ChangeTheme;
};

const Music = ({ theme }: MusicProps) => {
  return (
    <>
      <SEO
        title="daste. Music - Stream on Spotify, Apple Music & YouTube"
        description="Listen to daste.'s latest releases and albums. Stream on Spotify, Apple Music, YouTube Music, and Bandcamp. Watch music videos and discover our discography."
        url="https://daste.world/music"
        keywords="daste music, daste spotify, daste album, dasteWORLD, electronic music, stream daste, daste songs"
      />
      <motion.div
        className={`music ${theme}`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="media-grid">
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
              referrerPolicy="strict-origin-when-cross-origin"
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
        </div>
      </motion.div>
    </>
  );
};

export default Music;
