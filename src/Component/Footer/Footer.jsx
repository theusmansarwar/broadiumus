import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import { LuMail } from "react-icons/lu";
import { IoCallOutline} from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import footerlogo from "../../assets/Brodium-White.png";
const Footer = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Services", path: "/services" },
    { label: "Industries", path: "/industries" },
    { label: "Our Clients", path: "/our-client" },
    { label: "Contact Us", path: "/contact" },

    { label: "Terms & Condition", path: "/terms" },
    { label: "Disclaimer", path: "/disclaimer" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "About Us", path: "/about-us" },
  ];

  const handleNavClick = (item) => {
    navigate(item.path);
  };

  return (
    <div className="footer">
      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-section">
          <img src={footerlogo} className="logo" alt="broadium.us" />
          <p className="footer-description">
            Boost customer trust with Broadium, where every call and message
            gets a fast and accurate response every time.
          </p>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            {menuItems.slice(0, 4).map((item) => (
              <li key={item.label} onClick={() => handleNavClick(item)}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h4>Others</h4>
          <ul>
            {menuItems.slice(4, 10).map((item) => (
              <li key={item.label} onClick={() => handleNavClick(item)}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h4>Contact</h4>

          <div className="contact-info">
            <p>
              <LuMail />
              <a href="mailto:support@broadium.us">support@broadium.us</a>
            </p>
            <p>
              <IoCallOutline />
              <a href="tel:+12103468115">+1 (210) 346-8115</a>
            </p>
            <p className="location-icon">
              <SlLocationPin  /> 
              <a
                href="https://www.google.com/maps/place/4419+Centennial+Blvd+Ste+1060,+Colorado+Springs,+CO+80907"
                target="_blank"
                rel="noopener noreferrer"
              >
              4419 Centennial Blvd Ste 1060, Colorado Springs, CO 80907 USA
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Designed by <a href="https://zemalt.com/" target="_blank" rel="noopener noreferrer">Zemalt.com</a> - Security managed by <a href="https://plutosec.ca/" target="_blank" rel="noopener noreferrer">Plutosec.ca</a></p>
        <span className="pipe"></span>
        <p>Copyright © 2021-2025 Broadium LLC . All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
