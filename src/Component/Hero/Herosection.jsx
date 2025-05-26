import React from "react";
import "./Herosection.css";

const bgImages = {
  home: "/homehero.webp",
  service: "/servicehero.webp",
  industry: "/industryhero.webp",
  client: "/clienthero.webp",
  contact: "/contacthero.jpeg",
  about: "/abouthero.jpeg",
};

const HeroSection = ({ section = "", title, subtitle, showIcons = false,  customImage,}) => {
  const key = section.toLowerCase();
  const bgImage = customImage || bgImages[key];

  return (
    <div
      className={`hero-section ${section}`}
      style={{
       backgroundImage: `url(${bgImage})`,
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="dark-effect">
        <div className="hero-text">
          {showIcons && (
            <div className="hero-icons">
              <img src="/mail.png" alt="Mail Icon" />
              <img src="/chat.png" alt="Chat Icon" />
            </div>
          )}
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <div className="hr" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
