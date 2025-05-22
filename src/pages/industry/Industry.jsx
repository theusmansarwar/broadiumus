import React, { useEffect } from "react";
import "./Industry.css";
import Image1 from "../../assets/1.jpg";
import Image2 from "../../assets/2.jpg";
import Image3 from "../../assets/3.jpg";
import Image4 from "../../assets/4.jpg";
import Image5 from "../../assets/5.jpg";
import Image6 from "../../assets/6.jpg";
import Image7 from "../../assets/7.jpg";
import Image8 from "../../assets/8.jpg";
import Image9 from "../../assets/9.jpg";
import Image10 from "../../assets/10.jpg";
import Image11 from "../../assets/11.jpg";
import { useLocation, useNavigate } from "react-router-dom";
const Industry = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const cardData = [
    {
      img: Image1,
      title: "Cab (Taxi) Services",
      description:
        "You get help booking rides and confirming appointments. Our agents support you during your trip. They make sure dispatchers can manage rides well and stay focused.",
    },
    {
      img: Image2,
      title: "Road Assistance",
      description:
        "You receive fast help if your car breaks down. Our 24/7 call team connects you with service providers. This reduces your wait time and keeps communication clear.",
    },
    {
      img: Image3,
      title: "Parking Lot Reservations",
      description:
        "You can ask about parking and get your reservation confirmed. Our agents follow up to keep things smooth. Businesses rely on us to improve customer satisfaction day and night.",
    },
    {
      img: Image4,
      title: "Dispatching",
      description:
        "Our team handles dispatch requests in real time. They confirm deliveries and guide vehicles to the right place. You can trust clear and professional communication every time.",
    },
    {
      img: Image5,
      title: "Telecom",
      description:
        "You get answers to billing questions and new service requests. Agents solve technical issues fast. Telecom companies count on our 24/7 team for accurate support.",
    },
    {
      img: Image6,
      title: "Medical Billing",
      description:
        "Our experts confirm insurance details and post payments. They make AR calls to reduce delays. You will find steady communication throughout the process.",
    },
    {
      img: Image7,
      title: "Dental Billing",
      description:
        "Our agents verify insurance and follow up on claims. They resolve billing questions quickly. Dental offices enjoy easier communication and smooth operations.",
    },
    {
      img: Image8,
      title: "Hotel Reservations",
      description:
        "You get 24/7 help with booking changes and questions. Agents handle your needs carefully. Hotels improve reservation accuracy support thanks to this service.",
    },
    {
      img: Image9,
      title: "Cruise Reservation",
      description:
        "Our team manages your cruise bookings and answers questions. They provide clear travel details. You get smooth and professional service at every step.",
    },
    {
      img: Image10,
      title: "General Order Processing",
      description:
        "You place orders with confidence. Our agents check details and keep in touch. Businesses avoid mistakes and missed messages with our help.",
    },
    {
      img: Image11,
      title: "Restaurant Order Taking",
      description:
        "You order by phone or chat and confirm special requests. Restaurants improve speed and customer satisfaction with this support",
    },
  ];

  return (
    <div className="content">
      <div className="heading">
        <p>WHO WE SERVED</p>
        <h1>INDUSTRIES</h1>
        <div className="hr" />
      </div>
      <div className="about-p">
        <p>
          Broadium delivers customer support services across various industries.
          We focus on meeting the unique needs of each sector. Our services
          ensure your customers stay happy and your operations run smoothly. We
          support transportation businesses 24/7. Taxis, roadside assistance,
          and car delivery companies trust us to manage customer queries and
          issues.{" "}
        </p>
        <p>
          We handle customer support for leading providers. Your customers will
          get the best service around the clock. We assist travelers with
          bookings and inquiries. We also work with hospitality businesses.
          Hotels and restaurants trust us to manage reservations and customer
          support.
        </p>
      </div>
      <div className="industry-card">
        {cardData.map((item, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={item.img} alt={item.title} className="card-image" />
                <div className="card-overlay">
                  <p className="card-subtitle">{item.subtitle}</p>
                  <h3 className="card-title">{item.title}</h3>
                  <hr className="card-line" />
                </div>
              </div>
              <div className="flip-card-back">
                <h2 className="card-title">{item.title}</h2>
                <p className="card-description">{item.description}</p>
                <button className="btn" onClick={() => navigate(`/contact`)}>
                  Contact us
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industry;
