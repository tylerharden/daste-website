import React from 'react';

const SpotifyEmbed = ({ artistId }) => {
  const embedUrl = `https://open.spotify.com/embed/artist/${artistId}`;

  return (
    <div className="spotify-embed">
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
        style={{ minHeight: '70vh' }}
      ></iframe>
    </div>
  );
};

export default SpotifyEmbed;
