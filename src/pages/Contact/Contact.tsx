import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import contactsData from '../../data/contactsData.json';
import SEO from '../../components/SEO';
import { Helmet } from 'react-helmet-async';
import { getOrganizationSchema } from '../../utils/structuredData';
import type { ChangeTheme, ThemeName } from '../../types/theme';

type ContactEntry = {
  id: string | number;
  title: string;
  name: string;
  link: string;
};

type ContactProps = {
  theme: ThemeName;
  changeTheme: ChangeTheme;
};

const Contact = ({ theme }: ContactProps) => {
  const [contacts, setContacts] = useState<ContactEntry[]>([]);

  useEffect(() => {
    setContacts(contactsData as unknown as ContactEntry[]);
  }, []);

  return (
    <>
      <SEO
        title="Contact daste. - Bookings, Management & Press Inquiries"
        description="Get in touch with daste. for bookings, management, and press inquiries. Contact information for Australia, USA, Europe, and UK bookings."
        url="https://daste.world/contact"
        keywords="daste contact, daste booking, daste management, book daste, daste press"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(getOrganizationSchema())}</script>
      </Helmet>
      <motion.div
        className={`contact-container ${theme}`}
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
              <a href={contact.link} className="contact-link">
                {contact.link.replace('mailto:', '')}
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Contact;
