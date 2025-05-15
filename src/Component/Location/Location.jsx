import React from "react";
import "./Location.css";

function Location() {
  const mapURL1 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.8119051233743!2d74.35440580000001!3d31.55677630000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919057d6065b07b%3A0x67c70d8d17968a04!2sBroadium!5e0!3m2!1sen!2s!4v1746798246691!5m2!1sen!2s";
   
  const mapURL2 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.1461311206923!2d-104.8595243!3d38.8885361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87134c3c29a8e187%3A0x7a5c7c1ef4037f10!2s4419%20Centennial%20Blvd%20Ste%201060%2C%20Colorado%20Springs%2C%20CO%2080907!5e0!3m2!1sen!2sus!4v1715272270917!5m2!1sen!2sus";

  return (
    <div className="location-container">
 
    <div className="location-section">
      <div className="address">
        <h2>Address 01</h2>
        <p>Floor # 02, Plaza 119, Allama Iqbal Road Larex Colony, Garhi Shahu, Lahore.</p>
      </div>
      <div className="map-container">
        <iframe
          src={mapURL1}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lahore Office Map"
        ></iframe>
      </div>
    </div>
  
    <div className="location-section">
      <div className="address address2">
        <h2>Address 02</h2>
        <p>4419 Centennial Blvd Ste 1060 Colorado Springs, CO 80907, United States</p>
      </div>
      <div className="map-container">
        <iframe
          src={mapURL2}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Colorado Office Map"
        ></iframe>
      </div>
    </div>
  </div>
  
  
  );
}

export default Location;
