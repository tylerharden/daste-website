/* global fbq */
import React from 'react';
import { motion } from 'framer-motion';
import { format, parseISO } from 'date-fns';
import './Tour.css';

type TourItemProps = {
  date: string;
  day: string;
  city: string;
  venue: string;
  ticketLink: string;
  facebookLink: string;
  eventName: string;
  announceDate?: string;
  ticketDate?: string;
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return 'Date TBA';
  try {
    const date = parseISO(dateStr);
    return format(date, 'MMMM do, EEEE');
  } catch (error) {
    console.error('Invalid date format:', error);
    return 'Invalid date';
  }
};

const TourItem = ({
  date,
  day,
  city,
  venue,
  ticketLink,
  facebookLink,
  eventName,
  announceDate,
  ticketDate,
}: TourItemProps) => {
  const isTicketAvailable = true;

  return (
    <>
      <motion.div
        className="d-flex d-md-none tour-item-mobile row mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="left col-8">
          <p className="mb-1 event-date">{formatDate(date)}</p>
          <p className="mb-1 event-title">{eventName}</p>
          <p className="mb-1 event-city">{city}</p>
        </div>
        <div className="right col-4">
          <a
            href={ticketLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!isTicketAvailable}
            className="ticket-button mb-1"
            style={{
              pointerEvents: !isTicketAvailable ? 'none' : 'auto',
              opacity: !isTicketAvailable ? 0.5 : 1,
            }}
          >
            Tickets
          </a>
        </div>
      </motion.div>

      <motion.div
        className="d-none d-md-flex tour-item row mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="col-md-2">
          <p className="mb-1 event-date">{formatDate(date)}</p>
        </div>
        <div className="col-md-2 d-flex flex-column">
          <p className="mb-1 event-title">{eventName}</p>
        </div>
        <div className="col-md-2">
          <p className="mb-1 event-city">{city}</p>
        </div>
        <div className="col-md-2 d-flex flex-column">
          <p className="mb-1 announce-date">{announceDate ?? 'Tickets Available'}</p>
          <p className="mb-1 ticket-date">{ticketDate ?? ''}</p>
        </div>
        <div className="col-md-4 d-flex flex-column">
          <a
            href={ticketLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!isTicketAvailable}
            className="ticket-button mb-1"
            onClick={() => {
              if (typeof fbq === 'function') {
                fbq('track', 'Tickets Link', { eventName, city, date });
              }
            }}
            style={{
              pointerEvents: !isTicketAvailable ? 'none' : 'auto',
              opacity: !isTicketAvailable ? 0.5 : 1,
            }}
          >
            Tickets
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default TourItem;
