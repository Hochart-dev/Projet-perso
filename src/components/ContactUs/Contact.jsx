import React from 'react';
import StyleForm from './StyleContactUs';

export default function ContactUs() {
  return (
    <StyleForm>
      <div>
        <form className="contact-form">
          <label htmlFor="name">
            <input
              type="text"
              name="from_name"
              placeholder="insert your name here"
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              name="from_email"
              placeholder="insert your email here"
            />
          </label>
          <label htmlFor="message">
            <textarea name="html_message" placeholder="insert your text here" />
          </label>
          <input type="submit" value="send" />
        </form>
      </div>
    </StyleForm>
  );
}
