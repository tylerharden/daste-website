import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Tour.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TourItem from './TourItem';

const Tour = ({ theme }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        // Bandsintown API fetch
        const response = await axios.get('https://rest.bandsintown.com/artists/daste./events', {
          params: {
            app_id: '54644e531863078b3a1f8e51bd3288a3',
          },
        });
        const bandsintownEvents = response.data.map(event => {
          const eventDate = new Date(event.datetime);
          console.log(response.data)
          return {
            date: isNaN(eventDate.getTime()) ? null : event.datetime, // Ensure date validity
            day: isNaN(eventDate.getTime()) ? '' : eventDate.toLocaleDateString('en-US', { weekday: 'long' }),
            city: event.venue.city,
            country: event.venue.country,
            venue: event.venue.name,
            ticketLink: event.offers.length > 0 ? event.offers[0].url : '',
            facebookLink: event.facebook_rsvp_url,
            eventName: event.title || 'Concert',
          };
        });

        // Set combined events
        setEvents(bandsintownEvents);
      } catch (error) {
        console.error('Error fetching Bandsintown data:', error);
      }
    };

    fetchTourData();
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
              />
            ))}
          </div>
        ))
      )}
      <div className="bottom-padding"></div>
    </div>
  );
};

export default Tour;
