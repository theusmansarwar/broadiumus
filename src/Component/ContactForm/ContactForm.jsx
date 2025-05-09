import React from "react";
import "./Contact.css";
const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstname" className="required-label">
              First Name
            </label>
            <input id="firstname" type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastname" className="required-label">
              Last Name
            </label>
            <input id="lastname" type="text" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email" className="required-label">
              E-Mail
            </label>
            <input id="email" type="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="required-label ">
              Contact Number
            </label>
            <input id="phone" type="number" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="business" className="required-label">
              Business Name
            </label>
            <input id="business" type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="service" className="required-label">
              Service Interested in
            </label>
            <select id="service" defaultValue="" required>
              <option value="" hidden></option>{" "}
              <option value="web-development">Web Development</option>
              <option value="mobile-app">Mobile App Development</option>
              <option value="seo">SEO Optimization</option>
              <option value="graphic-design">Graphic Design</option>
            </select>
          </div>
        </div>
        <div className="textarea-container">
          <label htmlFor="textarea" className="text-area-label required-label">
            Message
          </label>
          <textarea id="textarea"></textarea>
        </div>
        <button className="send-btn">Send Message</button>
      </div>
    </div>
  );
};
export default ContactForm;