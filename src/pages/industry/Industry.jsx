import React, { useEffect } from 'react'

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
import { useLocation } from 'react-router-dom';
const Industry = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top on route change
  }, [pathname]);
  const cardData = [
    {
      img: Image1,
      title: "Cab (Taxi) Services",
      description:
        "Efficient rides are delivered through seamless GPS tracking. GPS tracks the nearest driver, and optimized routes ensure timely arrivals. Passengers always reach their destination without delays.",
    },
    {
      img: Image2,
      title: "Road Assistance",
      description:
        "Immediate help arrives when needed. GPS tracks real-time locations, and routes are optimized to reduce delays. Drivers get the assistance they require quickly.",
    },
    {
      img: Image3,
      title: "Parking Lot Reservations",
      description:
        "Finding parking is made easy through real-time GPS tracking. Available spots are shown on the map. Optimized routes lead drivers to the nearest parking.",
    },
    {
      img: Image4,
      title: "Dispatching",
      description:
        "Dispatching services are optimized for efficiency. GPS tracks vehicles in real time with the fastest route to the destination. All services reach their destinations promptly.",
    },
    {
      img: Image5,
      title: "Telecom",
      description:
        "Telecom services benefit from real-time GPS tracking. Field technicians' locations are monitored to ensure quicker responses. Routes are optimized for efficiency, and customers experience faster service.",
    },
    {
      img: Image6,
      title: "Medical Billing",
      description:
        "Medical billing becomes smoother with GPS tracking. Routes are optimized to reduce travel time, allowing documents to reach clinics quickly. The entire billing process runs fast.",
    },
    {
      img: Image7,
      title: "Dental Billing",
      description:
        "Dental billing services are streamlined with GPS tracking. Agents' locations are monitored, and routes are optimized to save time. Documents reach their destinations promptly.",
    },
    {
      img: Image8,
      title: "Hotel Reservations",
      description:
        "Hotel guests enjoy a seamless experience with optimized transfers. GPS tracks shuttle vehicles, and real-time route adjustments ensure on-time arrivals.",
    },
    {
      img: Image9,
      title: "Cruise Reservation",
      description:
        "Cruise transfers are efficient and timely. GPS tracks vehicles to ensure quick arrivals at the dock. Routes are optimized for speed, allowing guests to board their cruises.",
    },
    {
      img: Image10,
      title: "General Order Processing",
      description:
        "Order processing is made faster with real-time GPS tracking. Routes are optimized to minimize delays so deliveries reach customers quickly. Each order is processed efficiently.",
    },
    {
      img: Image11,
      title: "Restaurant Order Taking",
      description:
        "Restaurant deliveries are guaranteed on time. Routes are optimized for speed, and meals reach customers fresh. Timely service enhances customer satisfaction.",
    },
  ];
  
  return (
    <div className='content'>

<div className='heading'>
            <p>WHO WE SERVED</p>
            <h1>INDUSTRIES</h1>
            <div className='hr'/>
        </div>
        <div className='about-p'>
        <p>Broadium delivers customer support services across various industries. We focus on meeting the unique needs of each sector. Our services ensure your customers stay happy and your operations run smoothly. We support transportation businesses 24/7. Taxis, roadside assistance, and car delivery companies trust us to manage customer queries and issues. </p>
        <p>We handle customer support for leading providers. Your customers will get the best service around the clock. We assist travelers with bookings and inquiries. We also work with hospitality businesses. Hotels and restaurants trust us to manage reservations and customer support.</p>
        </div>
    <div className="industry-card">
      {cardData.map((item, index) => (
        <div className="flip-card" key={index}>
          <div className="flip-card-inner">
            {/* Front Side */}
            <div className="flip-card-front">
              <img src={item.img} alt={item.title} className="card-image" />
              <div className="card-overlay">
                <p className="card-subtitle">{item.subtitle}</p>
                <h3 className="card-title">{item.title}</h3>
                <hr className="card-line" />
              </div>
            </div>
            {/* Back Side */}
            <div className="flip-card-back">
              <p className="card-subtitle">WHO WE SERVED</p>
              <h2 className="card-title">{item.title}</h2>
              <p className="card-description">{item.description}</p>
              <button className="btn" >LEARN MORE</button>
            </div>
          </div>
        </div>
      ))}
    </div>



    </div>
  )
}

export default Industry