import React, { useState, useEffect } from 'react';
import './Contact.css';
import contactsData from '../../data/contactsData.json';

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(contactsData);
  }, []);

  return (
    <div className="contact-container">
      {contacts.map((contact) => (
        <div key={contact.id} className="contact-item">
          <div className="contact-title">{contact.title}</div>
          <div className="contact-info">
            <div className="contact-name">{contact.name}</div>
            <a href={contact.link} className="contact-link">{contact.link.replace('mailto:', '')}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
