import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import contactsData from '../../data/contactsData.json';

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(contactsData);
  }, []);

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {contacts.map((contact) => (
        <motion.div
          key={contact.id}
          className="contact-item"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="contact-title">{contact.title}</div>
          <div className="contact-info">
            <div className="contact-name">{contact.name}</div>
            <a href={contact.link} className="contact-link">{contact.link.replace('mailto:', '')}</a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Contact;
