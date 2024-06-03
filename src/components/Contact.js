import React from 'react';
import './Contact.css';

const Contact = ({ theme, changeTheme }) => {
  return (
    <main className="contact">
      <h1>Contact Us</h1>
      <ul>
        <li>Management: <a href="mailto:jez@mammalsounds.com">jez@mammalsounds.com</a></li>
        <li>Booking Agent (United States): <a href="mailto:julian.schwartzman@etpagency.com">julian.schwartzman@etpagency.com</a></li>
      </ul>
      <h2>Send us a message</h2>
      <form action="mailto:thatdasteaband@gmail.com" method="post" enctype="text/plain">
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" /><br />
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" /><br />
        <label htmlFor="message">Message:</label><br />
        <textarea id="message" name="message"></textarea><br />
        <input type="submit" value="Send" />
      </form>
    </main>
  );
}

export default Contact;
