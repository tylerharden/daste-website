import React, { useEffect } from 'react';
import './TourModal.css';
import tourPoster from '../assets/1.daste-World-Poster-NoLogo.jpg'; // Update with your actual tour poster path

const TourModal = ({ onClose }) => {
  useEffect(() => {
    // Add blur effect to the background
    document.body.classList.add('blurred');

    return () => {
      // Remove blur effect when the modal is closed
      document.body.classList.remove('blurred');
    };
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">x</button>
        <img src={tourPoster} alt="Atlas Tour" className="tour-poster" />
        <a href="https://ticket-link.com" target="_blank" rel="noopener noreferrer" className="ticket-link">
          Atlas Tour
        </a>
      </div>
    </div>
  );
};

export default TourModal;
