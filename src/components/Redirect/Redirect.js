// components/Redirect/Redirect.js
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './redirect.css'; // Create this file for styling

function Redirect() {
  const [searchParams] = useSearchParams();
  const redirectUrl = searchParams.get('url');

  useEffect(() => {
    if (redirectUrl) {
      // Fire Meta Pixel event
      if (window.fbq) {
        window.fbq('track', 'ticketLink');
      }

      // Redirect after short delay
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 2000);
    }
  }, [redirectUrl]);

  if (!redirectUrl) {
    return <div className="redirect-container"><p>Missing redirect URL.</p></div>;
  }

  return (
    <div className="redirect-container">
      <h1 className="redirect-title">Hang tight…</h1>
      <p className="redirect-subtitle">We're taking you to the ticketing site</p>
      <a href={redirectUrl} className="redirect-button">Buy Tickets</a>
    </div>
  );
}

export default Redirect;