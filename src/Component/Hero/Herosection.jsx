import React, { useEffect, useState } from "react";
import "./Herosection.css";
import { useLocation } from "react-router-dom";

const Herosection = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const contentMap = {
    "/": {
      image: isMobile ? "/homehero-mobile.webp" : "/homehero.webp",
      h1: "CUSTOMER SUPPORT",
      h2: "Because Your Brand Deserves Better",
    },
    "/services": {
      image: "/servicehero.jpeg",
      h1: "OUR SERVICES",
      h2: "Tailored Solutions for Every Business",
    },
    "/our-client": {
      image: "/clienthero.webp",
      h1: "OUR CLIENTS",
      h2: "Strong Partnerships, Proven Results",
    },
    "/industries": {
      image: "/industryhero.webp",
      h1: "OUR INDUSTRIES",
      h2: "Solutions That Scale With You",
    },
    "/about-us": {
      image: "/abouthero.jpeg",
      h1: "ABOUT US",
      h2: "Driven by Passion, Guided by Purpose",
    },
    "/contact": {
      image: "/contacthero.jpeg",
      h1: "CONTACT US",
      h2: "We’re Just One Message Away",
    },
  };

  const currentPath = location.pathname;
  const content = contentMap[currentPath] || {
    image: "/homehero.webp",
    h1: "Broadium",
    h2: "Because Your Brand Deserves Better",
  };

  return (
    <div className="hero-section">
      <img
        src={content.image}
        alt="Hero Background"
        className="hero-image"
        loading={currentPath === "/" ? "eager" : "lazy"}
      />
      <div className="dark-effect">
        <div className="hero-text">
          {currentPath === "/" && (
            <div className="hero-icons">
              <img src="/mail.png" alt="Mail Icon" />
              <img src="/chat.png" alt="Chat Icon" />
            </div>
          )}
          <h1>{content.h1}</h1>
          <h2>{content.h2}</h2>
          <div className="hr" />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
