import React, { useState } from "react";
import "./WhiteClient.css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const WhiteClient = ({ cards = [],title,description }) => {
  const cardsPerView = 3;
  const totalDots = cards.length - cardsPerView + 1;
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = cards.slice(startIndex, startIndex + cardsPerView);

  const goToIndex = (index) => setStartIndex(index);
  const nextCard = () => {
    if (startIndex + cardsPerView < cards.length) {
      setStartIndex((prev) => prev + 1);
    }
  };
  const prevCard = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="assistance-container2">
      <div className="heading-area3">
        <h1>{title}</h1>
        <p className="description">
          {description}
        </p>
      </div>
      <div className="mid">
        <ul>
          {cards.map((card) => {
            const isActive = visibleCards.includes(card);
            return (
              <li
                key={card.id}
                className={isActive ? "active-description" : ""}
              >
                <span></span><strong> {card.title}</strong> {card.description}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="cards-section">
        {visibleCards.map((card) => (
          <div className="cards-area active-card" key={card.id}>
            <div className="top">
              <img src={card.logo} alt={card.title} />
            </div>
            <div className="hr2" />
            <p>{card.title}</p>
          </div>
        ))}
      </div>
      {cards.length > cardsPerView && (
      <div className="pagination">
        <div className="dots-wrapper">
          {Array.from({ length: totalDots }).map((_, index) => (
            <span
              key={index}
              className={`dot-dark ${index === startIndex ? "active" : ""}`}
              onClick={() => goToIndex(index)}
            />
          ))}
        </div>
        <div className="arrowss-dark">
          <FaArrowLeft className="arrow" onClick={prevCard} />
          <FaArrowRight className="arrow" onClick={nextCard} />
        </div>
      </div>
      )}
    </div>
  );
};

export default WhiteClient;