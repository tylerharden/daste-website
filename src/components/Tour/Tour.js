import React, { useState, useEffect } from 'react';
import './Tour.css';
import tourData from '../../data/tourData.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import TourItem from './TourItem';

const Tour = ({ theme }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const currentDate = new Date(); 
    // Filter the tour data to include only future events
    const filteredEvents = tourData.filter(event => {
      const eventDate = new Date(event.date); 
      return eventDate >= currentDate; 
    });
    setEvents(filteredEvents);
  }, []); 

  // Group the filtered tour data by country
  const groupedByCountry = events.reduce((acc, tour) => {
    acc[tour.country] = acc[tour.country] || [];
    acc[tour.country].push(tour);
    return acc;
  }, {});

  return (
    <div className="tour-container">
      {events.length === 0 ? (
        <p>No future events...</p>
      ) : (
        Object.keys(groupedByCountry).map((country, index) => (
          <div key={index} className="country-group">
            <h2>{country}</h2>
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
              />
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Tour;
