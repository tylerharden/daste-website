import React, { useState, useEffect } from 'react';
import './Tour.css';
import tourData from '../../data/tourData.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import TourItem from './TourItem';

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
