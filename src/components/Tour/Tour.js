import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './Tour.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TourItem from './TourItem';

const Tour = ({ theme }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setEvents(bandsintownEvents);
      } catch (error) {
        console.error('Error fetching Bandsintown data:', error);
      } finally {
        setLoading(false);
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
    <motion.div
      className="tour-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* <p className="text-center " style={{ paddingTop: '10px', fontStyle: 'italic' }}>
        If you are having trouble with any ticket links, check out our{' '}
        <a href="https://www.bandsintown.com/a/15465034-daste." target="_blank" rel="noopener noreferrer">
          Bandsintown page
        </a> or {' '} <a href="https://www.songkick.com/artists/9910004-daste" target="_blank" rel="noopener noreferrer">
          Songkick page
        </a> for more information.
      </p> */}
      {loading ? (
        <p>Loading events...</p>
      ) : events.length === 0 ? (
        <p>No future events...</p>
      ) : (
        Object.keys(groupedByCountry).map((country, index) => (
          <motion.div
            key={index}
            className="country-group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
          >
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
          </motion.div>
        ))
      )}
      <div className="bottom-padding"></div>
    </motion.div>
  );
};

export default Tour;
