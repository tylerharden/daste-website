import React from 'react';

type SpotifyEmbedProps = {
  artistId: string;
};

const SpotifyEmbed = ({ artistId }: SpotifyEmbedProps) => {
  const embedUrl = `https://open.spotify.com/embed/artist/${artistId}`;

  return (
    <div className="spotify-embed">
      <iframe
        src={embedUrl}
        title="daste. Spotify"
        width="100%"
        height="100%"
        allow="encrypted-media"
        style={{ minHeight: '70vh' }}
      />
    </div>
  );
};

export default SpotifyEmbed;
