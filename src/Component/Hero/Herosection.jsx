import React, { useEffect, useState } from "react";
import "./Herosection.css";
import HomeHero from "../../assets/homehero.webp";
import HomeHeroMobile from "../../assets/homehero-mobile.webp";
import ServiceHero from "../../assets/servicehero.jpeg";
import ClientHero from "../../assets/clienthero.webp";
import IndustryHero from "../../assets/industryhero.webp";
import AboutHero from "../../assets/abouthero.jpeg";
import ContactHero from "../../assets/contacthero.jpeg";
import { useLocation } from "react-router-dom";

const Herosection = () => {
  const location = useLocation();
 const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const contentMap = {
    "/": {
      image: isMobile ? HomeHeroMobile : HomeHero,
      h1: "CUSTOMER SUPPORT",
      h2: "Because Your Brand Deserves Better",
    },
    "/services": {
      image: ServiceHero,
      h1: "OUR SERVICES",
      h2: "Tailored Solutions for Every Business",
    },
    "/our-client": {
      image: ClientHero,
      h1: "OUR CLIENTS",
      h2: "Strong Partnerships, Proven Results",
    },
    "/industries": {
      image: IndustryHero,
      h1: "OUR INDUSTRIES",
      h2: "Solutions That Scale With You",
    },
    "/about-us": {
      image: AboutHero,
      h1: "ABOUT US",
      h2: "Driven by Passion, Guided by Purpose",
    },
    "/contact": {
      image: ContactHero,
      h1: "CONTACT US",
      h2: "We’re Just One Message Away",
    },
  };

  const currentPath = location.pathname;
  const content = contentMap[currentPath] || {
    image: HomeHero,
    h1: "Broadium",
    h2: "Because Your Brand Deserves Better",
  };

  return (
    <div
      className="hero-section"
      style={{
        position: "relative",
        backgroundImage: `url(${content.image})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="dark-effect">
        <div className="hero-text">
          <h1>{content.h1}</h1>
          <h2>{content.h2}</h2>
          <div className="hr" />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
