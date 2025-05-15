import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import './redirect.css';

function Redirect() {
  const [searchParams] = useSearchParams();
  const baseUrl = searchParams.get('url');
  const campaign = searchParams.get('campaign');
  const source = searchParams.get('source') || 'meta';
  const medium = 'paid_social';

  const finalUrl = baseUrl
    ? `${baseUrl}?utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`
    : null;

  useEffect(() => {
    if (finalUrl) {
      if (window.fbq) {
        window.fbq('track', 'ticketLink');
      }

      setTimeout(() => {
        window.location.href = finalUrl;
      }, 3000);
    }
  }, [finalUrl]);

  if (!finalUrl) {
    return <div className="redirect-container"><p>Missing redirect URL.</p></div>;
  }

  return (
    <motion.div
      className="redirect-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="redirect-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Hang tight...
      </motion.h1>
      <motion.p
        className="redirect-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        We're taking you to the tickets
      </motion.p>
      <motion.a
        href={finalUrl}
        className="redirect-button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        Buy Tickets
      </motion.a>
    </motion.div>
  );
}

export default Redirect;