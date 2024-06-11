import React from 'react';
import './Contact.css';

const Contact = ({ theme, changeTheme }) => {
  return (
    <main className="contact">
      <form action="mailto:thatdasteaband@gmail.com" method="post" enctype="text/plain">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        
        <input type="submit" value="Send" />
      </form>
    </main>
  );
}

export default Contact;
