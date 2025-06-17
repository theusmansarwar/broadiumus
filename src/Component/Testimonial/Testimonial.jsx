import React, { useState } from "react";
import "./Testimonial.css";
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      image: "/james.avif",
      name: "James Randle",
      role: "Dispatch Manager",
      message:
        "Broadium has transformed how we handle support. Their team responds fast and stays consistent. We never miss a call, and our customers always get quick answers. It’s a smooth process every time.",
      stars: 4,
    },
    {
      id: 2,
      image: "/clara.webp",
      name: "Clara Christensen",
      role: "Telecom Consultant",
      message:
        "We were losing leads until we partnered with Broadium. Now every call is answered on time. Their agents are smart and trained well. We scaled fast without missing business opportunities again.",
      stars: 5,
    },
    {
      id: 3,
      image: "/carlos.webp",
      name: "Carlos Rodriguez",
      role: "Operations Lead",
      message:
        "Our team needed reliable backup, and Broadium delivered from day one. Their service is always on, even during peak hours. They handle pressure well and keep communication smooth with timely updates.",
      stars: 5,
    },
    {
      id: 4,
      image: "/lily.webp",
      name: "Lily Greenwood",
      role: "Service Coordinator",
      message:
        "Broadium gave our business the extra support we needed. They treat our customers like their own. Their performance reports are always on point. It feels like they are part of our team.",
      stars: 4,
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const testimonial = testimonials[currentPage];

  const renderStars = (count) => {
    return (
      <div className="stars">
        {"★".repeat(count)}
        {"☆".repeat(5 - count)}
      </div>
    );
  };

  return (
    <div className="testimonial-main-div">
      <div className="heading">
        <p>CHECK OUT</p>
        <h1>TESTIMONIALS</h1>
        <div className="hr" />
      </div>
      <div className="about-p">
        <p>
          Our clients rely on us to deliver top-notch support. They trust our
          services to boost their business operations.We focus on providing
          excellent service, and our clients <a href="https://broadium.us/our-client">feedback</a> reflects that.
        </p>
      </div>

      <div className="testimonials-section">
        <div className="testimonials-area">
          <div className="left">
            <div className="overlay-div">
              <FaQuoteRight className="quote-icon" />
              <h2 className="quote-name">{testimonial.name}</h2>
            </div>
            <div className="sub-left">
              <div className="testimonial-left-content">
                <p className="quote-title">WHAT THEY SAY ABOUT US?</p>

                <p className="quote-role">{testimonial.role}</p>
              </div>
            </div>
            <div className="sub-right">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                loading="lazy"
                className="testimonial-img"
              />
            </div>
          </div>
          <div className="right">
            <div className="testimonial-right-content">
              <FaQuoteRight className="quote-icon" />
              <p>{testimonial.message}</p>
              {renderStars(testimonial.stars)}
            </div>
          </div>
        </div>
        <div className="pagination">
          <div className="dots-wrapper">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`dot-dark ${index === currentPage ? "active" : ""}`}
                onClick={() => setCurrentPage(index)}
              />
            ))}
          </div>
          <div className="arrowss-dark">
            <FaArrowLeft
              className="arrow"
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 0))}
            />
            <FaArrowRight
              className="arrow"
              onClick={() =>
                setCurrentPage((p) => Math.min(p + 1, testimonials.length - 1))
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
