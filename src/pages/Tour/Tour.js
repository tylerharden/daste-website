import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './Tour.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TourItem from './TourItem';
import SEO from '../../components/SEO';
import { Helmet } from 'react-helmet-async';
import { getEventsListSchema } from '../../utils/structuredData';

const Spinner = () => (
  <div className="loading-wrap" role="status" aria-live="polite" aria-label="Loading events">
    <div className="spinner" />
  </div>
);

const Tour = ({ theme }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await axios.get('https://rest.bandsintown.com/artists/daste./events', {
          params: { app_id: '54644e531863078b3a1f8e51bd3288a3' },
        });
        const bandsintownEvents = response.data.map(event => {
          const eventDate = new Date(event.datetime);
          return {
            date: isNaN(eventDate.getTime()) ? null : event.datetime,
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

  const groupedByCountry = events.reduce((acc, tour) => {
    acc[tour.country] = acc[tour.country] || [];
    acc[tour.country].push(tour);
    return acc;
  }, {});

  return (
    <>
      <SEO 
        title="daste. Tour Dates - Live Shows & Concert Tickets"
        description="See daste. live! Find upcoming tour dates and concerts across Australia, USA, and Europe. Get tickets for live shows and music events."
        url="https://daste.world/tour"
        keywords="daste tour, daste concert, daste tickets, daste live, daste shows, electronic music concerts"
      />
      {events.length > 0 && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(getEventsListSchema(events))}
          </script>
        </Helmet>
      )}
      <motion.div
        className="tour-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
      {loading ? (
        <Spinner />
      ) : events.length === 0 ? (
        <motion.div
          className="no-events-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.h2
            className="no-events-title"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            No Shows Scheduled
          </motion.h2>
          <motion.p
            className="no-events-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Check back soon for upcoming tour dates
          </motion.p>
          <motion.div
            className="no-events-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a 
              href="https://www.bandsintown.com/a/15465034-daste." 
              target="_blank" 
              rel="noopener noreferrer"
              className="no-events-button"
            >
              Follow on Bandsintown
            </a>
            <a 
              href="https://www.songkick.com/artists/9910004-daste" 
              target="_blank" 
              rel="noopener noreferrer"
              className="no-events-button"
            >
              Follow on Songkick
            </a>
          </motion.div>
        </motion.div>
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
    </>
  );
};

export default Tour;