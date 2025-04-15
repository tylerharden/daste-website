import React from 'react';
import { format, parseISO } from 'date-fns';
import './Tour.css';

// Helper function to format date
const formatDate = (dateStr) => {
  if (!dateStr) return 'Date TBA';
  try {
    const date = parseISO(dateStr); // Parse ISO format
    return format(date, 'MMMM do, EEEE'); // Format to 'Month day, DayOfWeek' (e.g., 'January 1st, Monday')
  } catch (error) {
    console.error('Invalid date format:', error);
    return 'Invalid date';
  }
};

const TourItem = ({ date, day, city, venue, ticketLink, facebookLink, eventName, announceDate, ticketDate }) => {
  // const isRSVPAvailable = true;
  const isTicketAvailable = true;

  return (
    <>
      {/* Mobile Layout */}
      <div className="d-flex d-md-none tour-item-mobile row mb-4">
        <div className="left col-8">
          <p className="mb-1 event-date">{formatDate(date)}</p>
          <p className="mb-1 event-title">{eventName}</p>
          {/* <p className="mb-1 event-venue">{venue}</p> */}
          <p className="mb-1 event-city">{city}</p>
        </div>
        <div className="right col-4">
          <a href={ticketLink} target="_blank" rel="noopener noreferrer" disabled={!isTicketAvailable} className="ticket-button mb-1" style={{ pointerEvents: !isTicketAvailable ? 'none' : 'auto', opacity: !isTicketAvailable ? 0.5 : 1 }}>
            Tickets
          </a>
          {/* <a href={facebookLink} target="_blank" rel="noopener noreferrer" disabled={!isRSVPAvailable} className="ticket-button mb-1" style={{ pointerEvents: !isRSVPAvailable ? 'none' : 'auto', opacity: !isRSVPAvailable ? 0.5 : 1 }}>
            RSVP
          </a> */}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="d-none d-md-flex tour-item row mb-4">
        <div className="col-md-2">
          <p className="mb-1 event-date">{formatDate(date)}</p>
        </div>
        <div className="col-md-2 d-flex flex-column">
          <p className="mb-1 event-title">{eventName}</p>
          {/* <p className="mb-1 event-venue">{venue}</p> */}
        </div>
        <div className="col-md-2">
          <p className="mb-1 event-city">{city}</p>
        </div>
        <div className="col-md-2 d-flex flex-column">
          <p className="mb-1 announce-date">Tickets Available</p>
          <p className="mb-1 ticket-date">{ticketDate}</p>
        </div>
        <div className="col-md-4 d-flex flex-column">
        <a
          href={ticketLink}
          target="_blank"
          rel="noopener noreferrer"
          disabled={!isTicketAvailable}
          className="ticket-button mb-1"
          onClick={() => {
            fbq('track', 'Tickets Link', { eventName: eventName, city: city, date: date });
          }}
          style={{
            pointerEvents: !isTicketAvailable ? 'none' : 'auto',
            opacity: !isTicketAvailable ? 0.5 : 1,
          }}
        >
          Tickets
        </a>
          {/* <a href={facebookLink} target="_blank" rel="noopener noreferrer" disabled={!isRSVPAvailable} className="ticket-button mb-1" style={{ pointerEvents: !isRSVPAvailable ? 'none' : 'auto', opacity: !isRSVPAvailable ? 0.5 : 1 }}>
            RSVP
          </a> */}
        </div>
      </div>
    </>
  );
};

export default TourItem;
