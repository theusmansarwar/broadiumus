import React from "react";
import "./Herosection.css";
import bg from "../../assets/bg.svg";
import Hero1 from "../../assets/hero1.webp";
import Hero2 from "../../assets/hero2.webp";
import HomeHero from "../../assets/homehero.jpg";
import ServiceHero from "../../assets/servicehero.jpg";
import ContactHero from "../../assets/contact2.jpg";
import ClientHero from "../../assets/clienthero2.jpg";
import IndustryHero from "../../assets/industryhero.jpg";
import About from "../../assets/about1.jpg";
import { useLocation } from "react-router-dom";
const Herosection = () => {
  const location = useLocation();
  const imageMap = {
    "/": HomeHero,
    "/services": ServiceHero,
    "/contact": ContactHero,
    "/our-client": ClientHero,
    "/industries": Hero1,
    "/about-us": About
  };
  const backgroundImage = imageMap[location.pathname] || bg;
  return (
    <div
      className="hero-section"
      style={{
        position: "relative",

        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="dark-effect">
        <div className="hero-text">
          <h1>CUSTOMER SUPPORT</h1>
        <h2>Because Your Brand Deserves Better</h2>
        <div className="hr" />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
