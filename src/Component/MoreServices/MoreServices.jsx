import React from "react";
import "./MoreServices.css";
const MoreServices = () => {
  const cardData = [
    { title: "Healthcare Startup Support" },
    { title: "Startup Support" },
    { title: "SaaS Support" },
    { title: "Inbound Call Center" },
    { title: "Pre-Sales Support Outsourcing" },
    { title: "Game Support Outsourcing" },
    { title: "Shopify Customer Service Outsourcing" },
    { title: "Answering Services for Small Businesses" },
    { title: "Virtual Answering Services" },
    { title: "IT Customer Services" },
    { title: "Retail Customer Service" },
    { title: "Outsource E-mail Support" },
    { title: "Bilingual Answering Service" },
    { title: "Tech Support Call Center" },
    { title: "Inbound Sales Call Center" },
    { title: "Virtual Call Center Services" },
    { title: "B2B Call Centers" },
    { title: "Order Taking Service" },
    { title: "Flat Rate Answering Service" },
    { title: "After Hours Answering Service" },
    { title: "E-mail Answering Service" },
    { title: "Outsourcing BPO Call Center" },
    { title: "On-Call Services" },
    { title: "Overflow Call Handling Services" },
    { title: "Fintech Support" },
  ];
  return (
    <div className="more-area">
    <div className="heading-area">
          <p>WE CAN DO</p>
        <h1>A LOT MORE</h1>
        <div className='hr'/>
       <p className="description">Broadium offers many services beyond expectations. Our team is ready to tackle new challenges. We customize solutions to meet your unique needs. You can trust us to handle all aspects of your business. Our flexibility keeps us ahead. We ensure that every service we offer aligns with your goals. </p>
       <p className="description">You will find our support adaptable to your business growth. Our expertise guarantees that we can do much more. We are always prepared to improve your business operations and elevate your customer experience.</p>
       </div>
      <div className="more-service-card">
      
        {cardData.map((item, index) => (
          <div className="more-card" key={index}>
            <h2 className="card-title">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MoreServices;