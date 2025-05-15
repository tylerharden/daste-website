// components/Redirect/Redirect.js
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function Redirect() {
  const [searchParams] = useSearchParams();
  const redirectUrl = searchParams.get('url');

  useEffect(() => {
    if (redirectUrl) {
      // Meta Pixel event firing
      if (window.fbq) {
        window.fbq('track', 'ticketLink');
      }

      // Redirect after short delay
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 2000); // 2 seconds
    }
  }, [redirectUrl]);

  if (!redirectUrl) {
    return <p>Missing redirect URL.</p>;
  }

  return (
    <div>
      <p>Redirecting you to the ticketing site... <a href={redirectUrl}>Click here if not redirected.</a></p>
    </div>
  );
}

export default Redirect;