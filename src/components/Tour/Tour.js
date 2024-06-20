import React, { useState, useEffect } from 'react';
import './Tour.css';
import tourData from '../../data/tourData.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const TourItem = ({ date, day, city, venue, ticketLink, facebookLink, eventName, announceDate, ticketDate, currentDate }) => {
  // const isAnnounced = new Date(currentDate) >= new Date(announceDate);
  //const isTicketAvailable = new Date(currentDate) >= new Date(ticketDate);
  const isRSVPAvailable = true// new Date(currentDate) >= new Date(announceDate);
  const isTicketAvailable = true;
  // if (!isAnnounced) return null;

  return (
    <>
      {/* Mobile Layout */}
      <div className="d-flex d-md-none tour-item-mobile row mb-4">
        <div className="left col-8">
          <p className="mb-1 event-date">{date}, {day}</p>
          <p className="mb-1 event-title">{eventName}</p>
          <p className="mb-1 event-venue">{venue}</p>
          <p className="mb-1 event-city">{city}</p>
        </div>
        <div className="right col-4">
          <a href={ticketLink} target="_blank" rel="noopener noreferrer" disabled={!isTicketAvailable} className="ticket-button mb-1" style={{ pointerEvents: !isTicketAvailable ? 'none' : 'auto', opacity: !isTicketAvailable ? 0.5 : 1 }}>
            Tickets
          </a>
          <a href={facebookLink} target="_blank" rel="noopener noreferrer" disabled={!isRSVPAvailable} className="ticket-button mb-1" style={{ pointerEvents: !isRSVPAvailable ? 'none' : 'auto', opacity: !isRSVPAvailable ? 0.5 : 1 }}>
            RSVP
          </a>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="d-none d-md-flex tour-item row mb-4">
        <div className="col-md-2">
          <p className="mb-1 event-date">{date}, {day}</p>
        </div>
        <div className="col-md-2 d-flex flex-column">
          <p className="mb-1 event-title">{eventName}</p>
          <p className="mb-1 event-venue">{venue}</p>
        </div>
        <div className="col-md-2">
          <p className="mb-1 event-city">{city}</p>
        </div>
        <div className="col-md-2 d-flex flex-column">
          <p className="mb-1 announce-date">Tickets Available</p>
          <p className="mb-1 ticket-date">{ticketDate}</p>
        </div>
        <div className="col-md-4 d-flex flex-column">
        <a href={ticketLink} target="_blank" rel="noopener noreferrer" disabled={!isTicketAvailable} className="ticket-button mb-1" style={{ pointerEvents: !isTicketAvailable ? 'none' : 'auto', opacity: !isTicketAvailable ? 0.5 : 1 }}>
            Tickets
          </a>
          <a href={facebookLink} target="_blank" rel="noopener noreferrer" disabled={!isRSVPAvailable} className="ticket-button mb-1" style={{ pointerEvents: !isRSVPAvailable ? 'none' : 'auto', opacity: !isRSVPAvailable ? 0.5 : 1 }}>
            RSVP
          </a>
        </div>
      </div>
    </>
  );
};

const Tour = ({ theme }) => {
  const [events, setEvents] = useState([]);
  const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format

  useEffect(() => {
    setEvents(tourData);
  }, []);

  // Group the tour data by country
  const groupedByCountry = events.reduce((acc, tour) => {
    acc[tour.country] = acc[tour.country] || [];
    acc[tour.country].push(tour);
    return acc;
  }, {});

  return (
    <div className="tour-container">
      {Object.keys(groupedByCountry).map((country, index) => (
        <div key={index} className="country-group mb-5">
          <h2 className=''>{country}</h2>
          {groupedByCountry[country].map((item, idx) => (
            <TourItem
              key={idx}
              date={item.date}
              day={item.day}
              city={item.city}
              venue={item.venue}
              ticketLink={item.ticketLink}
              facebookLink={item.facebookLink}
              eventName={item.eventName}
              announceDate={item.announceDate}
              ticketDate={item.ticketDate}
              currentDate={currentDate}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Tour;
