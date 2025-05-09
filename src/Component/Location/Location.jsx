import React from "react";
import "./Location.css";
function Location() {
  const embeddedMapURL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.786202889736!2d74.3287534744869!3d31.56089778171899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904b3a2c9800b%3A0x99e6b565b9939a7a!2sPlaza%20119!5e0!3m2!1sen!2sus!4v1715008993878!5m2!1sen!2sus";
  return (
    <div className="location-container">
        <div className="heading-area">
          <p>CHECK OUT OUR SERVICE CENTER</p>
        <h1>LOCATION</h1>
        <div className='hr'/>
       
        </div>
      <div className="location-content">
        <div className="address-container">
          <div className="address">
            <h2>Address 01</h2>
            <p>Floor # 02, Plaza 119, Allama Iqbal Road</p>
            <p>Larex Colony, Garhi Shahu,</p>
            <p>Lahore, 54000.</p>
          </div>
          <div className="address">
            <h2>Address 02</h2>
            <p>Floor # 02, Plaza 119, Allama Iqbal Road</p>
            <p>Larex Colony, Garhi Shahu,</p>
            <p>Lahore, 54000.</p>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src={embeddedMapURL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default Location;