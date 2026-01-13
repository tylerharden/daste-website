import React from 'react';
import { motion } from 'framer-motion';
import './LatestUpdateCard.css';

export default function LatestUpdateCard({
  title = 'dasteWORLD is out now',
  blurb = 'Our debut album dasteWORLD is finally here. It’s a journey through late-night grooves, sunlit melodies, and the in-between. Have a listen, share it around, and let us know your favourite track.',
  artworkSrc = '/images/dasteWORLD.jpg', // replace with your actual path
  links = {
    spotify: 'https://open.spotify.com/artist/5uXWOfu1kA8mQ9bUp5GgxT',
    apple: 'https://music.apple.com/au/artist/daste/1442679290',
    youtube: 'https://music.youtube.com/',
    bandcamp: 'https://daste.bandcamp.com/',
  },
}) {
  return (
    <motion.section
      className="latest-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      aria-label="Latest release: dasteWORLD"
    >
      <div className="latest-card__imageWrap">
        <img
          src={artworkSrc}
          alt="dasteWORLD album artwork"
          className="latest-card__image"
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="latest-card__content">
        <h2 className="latest-card__title">{title}</h2>
        <p className="latest-card__blurb">{blurb}</p>

        <div className="latest-card__actions">
          <a
            className="latest-card__btn"
            href={links.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            Listen on Spotify
          </a>
          <a
            className="latest-card__btn"
            href={links.apple}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple Music
          </a>
          <a
            className="latest-card__btn"
            href={links.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube Music
          </a>
          <a
            className="latest-card__btn latest-card__btn--outline"
            href={links.bandcamp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Bandcamp
          </a>
        </div>
      </div>
    </motion.section>
  );
}
