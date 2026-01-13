import React, { useEffect } from 'react';
import './TourModal.css';
import tourPoster from '../../assets/1.daste-World-Poster-NoLogo.jpg';

type TourModalProps = {
  onClose: () => void;
};

const TourModal = ({ onClose }: TourModalProps) => {
  useEffect(() => {
    document.body.classList.add('blurred');

    return () => {
      document.body.classList.remove('blurred');
    };
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">
          x
        </button>
        <img src={tourPoster} alt="Atlas Tour" className="tour-poster" />
        <a
          href="https://ticket-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="ticket-link"
        >
          Atlas Tour
        </a>
      </div>
    </div>
  );
};

export default TourModal;
