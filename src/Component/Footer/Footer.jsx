import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import { RiFacebookFill, RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import footerlogo from '../../assets/Brodium-White.png'
const Footer = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('EN');

  const menuItems = [
    { label: 'Services', path: '/services' },
    { label: 'Industries', path: '/industries' },
    { label: 'Our Clients', path: '/our-client' },
    { label: 'Contact Us', path: '/contact' },
    
   
    { label: 'Terms & Condition', path: '/terms' },
    { label: 'Disclaimer', path: '/disclaimer' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'About Us', path: '/about-us' },
  
  ];

  const handleNavClick = (item) => {
    navigate(item.path);
  };

  return (
    <div className="footer">
      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-section">
          <img src={footerlogo} className="logo" alt="Logo" />
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
          </p>
         
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            {menuItems.slice(0, 4).map((item) => (
              <li key={item.label} onClick={() => handleNavClick(item)}>{item.label}</li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h4>Others</h4>
          <ul>
            {menuItems.slice(4, 10).map((item) => (
              <li key={item.label} onClick={() => handleNavClick(item)}>{item.label}</li>
            ))}
          </ul>
        </div>
       

        {/* Newsletter */}
        <div className="footer-section">
          <h4>Contact</h4>
        
          <div className="contact-info">
            <p><CiMail /> info@hello.com</p>
            <p><IoCallOutline /> +1 000-000-0000</p>
            <p><IoLocationOutline /> 8819 Ohio St. South Gate, CA 90280</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
     
        <p>Broadium 2025. All right reserved</p>
       
      </div>
    </div>
  );
};

export default Footer;
