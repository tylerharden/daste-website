import React from 'react';
import './Tour.css';
import tourData from '../../data/tourData';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionHeader from '../SectionHeader';

const TourItem = ({ date, day, city, venue, ticketLink, facebookLink, eventName }) => (
  <>
    {/* Mobile Layout */}
    <div className="d-flex d-md-none tour-item-mobile row mb-4">
      <div className="left col-8">
        <p className="mb-1">{date}, {day}</p>
        <p className="mb-1 event-title">{eventName}</p>
        <p className="mb-1 event-venue">{venue}</p>
        <p className="mb-1 event-city">{city}</p>
      </div>
      <div className="right col-4">
        <a href={ticketLink} target="_blank" rel="noopener noreferrer" className="ticket-button mb-1">
          Tickets
        </a>
        <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="ticket-button-secondary">
          RSVP
        </a>
      </div>
    </div>

    {/* Desktop Layout */}
    <div className="d-none d-md-flex tour-item row mb-4">
      <div className="col-md-3">
        <p className="mb-1">{date}, {day}</p>
      </div>
      <div className="col-md-3 d-flex flex-column">
        <p className="mb-1 event-title">{eventName}</p>
        <p className="mb-1 event-venue">{venue}</p>
      </div>
      <div className="col-md-3">
        <p className="mb-1 event-city">{city}</p>
      </div>
      <div className="col-md-3 d-flex flex-column">
        <a href={ticketLink} target="_blank" rel="noopener noreferrer" className="ticket-button mb-1">
          Tickets
        </a>
        <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="ticket-button-secondary">
          RSVP
        </a>
      </div>
    </div>
  </>
);

const Tour = ({ theme }) => {
  // Group the tour data by country
  const groupedByCountry = tourData.reduce((acc, tour) => {
    acc[tour.country] = acc[tour.country] || [];
    acc[tour.country].push(tour);
    return acc;
  }, {});

  return (
    <div className="tour-container">
      {Object.keys(groupedByCountry).map((country, index) => (
        <div key={index} className="country-group mb-5">
          <SectionHeader leftHeading="Tour" rightHeading={country}></SectionHeader>
          {groupedByCountry[country].map((item, idx) => (
            <TourItem className='tour-item'
              key={idx}
              date={item.date}
              day={item.day}
              city={item.city}
              venue={item.venue}
              ticketLink={item.ticketLink}
              facebookLink={item.facebookLink}
              eventName={item.eventName}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Tour;
