import React, { useState } from "react";
import "./ServiceCard.css";
import Modal from "../modal/Modal";
const ServiceCard = () => {
  const cardData = [
    {
      title: "CALL SUPPORT",
      subtitle: "CHECK OUT",
      description:
        "Broadium provides 24/7 call support with real-time handling of customer inquiries. Each call is tracked and resolved promptly so your team stays focused and customer satisfaction always remains consistent",
      modaldescription:
        "Broadium offers 24/7 voice support with real-time tracking and resolution. Every call is handled by trained agents to ensure professionalism and consistency. Our service helps your team stay focused while we maintain peak customer satisfaction. This is a proven fact, and we deliver every time.",
    },
    {
      title: "CHAT SUPPORT",
      subtitle: "CHECK OUT",
      description:
        "Broadium offers fast and reliable live chat support across all hours. Every conversation is monitored to maintain quick responses so you can build trust without disrupting daily business operations",
      modaldescription:
        "Broadium delivers fast, reliable live chat support around the clock. Each chat is monitored to ensure responses are quick, accurate, and consistent. You can build customer trust while keeping your business running smoothly without interruptions. This is a fact. Our service helps you stay ahead.",
    },
    {
      title: "EMAIL SUPPORT",
      subtitle: "CHECK OUT",
      description:
        "Broadium manages email queries with speed and accuracy. Each message is prioritized and answered in detail. You get clear reporting, and customers enjoy seamless support without delays or confusion",
      modaldescription:
        "Email is a good communication tool, and Broadium excels in providing swift, high-quality responses. Our team prioritizes each message for faster response times. We ensure clear reporting and resolve issues without delays. Customers appreciate our precision and efficiency. You can trust us to maintain high service standards.",
    },
    {
      title: "OMNI-CHANNEL SUPPORT",
      subtitle: "CHECK OUT",
      description:
        "Broadium centralizes customer communication across phone, chat, email, and social media. All interactions stay organized in one system, which helps your team provide consistent and responsive service every time",
      modaldescription:
        "Broadium streamlines communication across phone, chat, email, and social media. All interactions stay in one system, so your team provides consistent service. You never miss a message, no matter the channel. Customers enjoy quick and responsive support every time.",
    },
    {
      title: "B2B SALES SUPPORT",
      subtitle: "CHECK OUT",
      description:
        "Broadium strengthens your sales strategy by managing lead generation, follow-ups, and qualification. You receive updated reports while your team focuses on conversions and business growth without wasting time",
      modaldescription:
        "Broadium offers a powerful sales team to drive rapid growth for your business. Our experienced sales experts use high-level strategies to generate quality leads and maximize conversions. We ensure your sales process thrives with deep industry knowledge and exceptional communication skills.",
    },
    {
      title: "KYC SUPPORT",
      subtitle: "CHECK OUT",
      description:
        "Broadium ensures quick and secure KYC document verification. All data is managed under strict compliance, giving you peace of mind while your customers experience smooth onboarding and account validation",
      modaldescription:
        "Broadium offers fast and secure KYC document verification. We manage all data with strict compliance, ensuring smooth onboarding and account validation. Your customers experience hassle-free processing while you enjoy peace of mind. We streamline the KYC process for you.",
    },
  ];
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <>
      <div className="service-card2">
        {cardData.map((item, index) => (
          <div className="card" key={index}>
            <p className="card-subtitle">{item.subtitle}</p>
            <h3 className="card-title">{item.title}</h3>
            <div className="card-line" />
            <p className="card-description">{item.description}</p>
            <button className="btn" onClick={() => setSelectedCard(item)}>
              Learn More
            </button>
          </div>
        ))}
      </div>
      <Modal data={selectedCard} onClose={() => setSelectedCard(null)} />
    </>
  );
};
export default ServiceCard;