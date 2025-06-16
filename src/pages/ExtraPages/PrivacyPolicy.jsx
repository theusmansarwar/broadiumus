import React, { useEffect } from "react";
import "./extra.css";
import { useLocation } from "react-router-dom";
const PrivacyPolicy = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top on route change
  }, [pathname]);
  return (
    <div className="content">
      <div className="heading">
        {/* <p>WHO WE ARE</p> */}
        <h1>Privacy Policy </h1>
        <div className="hr" />
      </div>

      <section>
        <h2>At Broadium, We Value Your Trust</h2>
        <p>
          We deliver consistent, secure, and high-quality services for every
          client. Our systems follow strict protocols to ensure your data stays
          safe and your customers stay protected. We work under clear standards
          that support transparency, reliability, and continuous improvement.
          Our goal is to exceed your expectations through quality-driven
          outsourcing solutions, including{" "}
          <a href="https://broadium.us/services">
            customer support inbound and outbound calls, and business process
            handling
          </a>
          .
        </p>

        <h2>Data Security and Confidentiality</h2>
        <p>
          We protect your information through tested and trusted security
          practices. Our systems ensure the confidentiality, integrity, and
          availability of all data and service processes. Every member of our
          team follows strict guidelines that prevent misuse or unauthorized
          access. We use updated tools and global best practices to create a
          secure environment. Our methods support flexible work operations and
          guarantee stable service delivery, even in challenging times.
        </p>

        <h2>Commitment to Compliance</h2>
        <p>
          Broadium meets all applicable legal, regulatory, and client-specific
          requirements. We have policies in place to manage risks and handle any
          incidents that may impact business continuity. Our commitment includes
          full compliance with integrated management systems and security
          standards. We conduct regular training and planning to improve our
          policies. These include:
        </p>
        <ul className="extra-ul">
          <li>Data classification and handling</li>
          <li>Secure asset management</li>
          <li>Safe mobile and media use</li>
          <li>Controlled network access</li>
          <li>Physical security standards</li>
          <li>Risk management and response</li>
        </ul>
        <p>
          Learn more about how we serve{" "}
          <a href="https://broadium.us/industries">diverse industries</a> and{" "}
          <a href="https://broadium.us/our-client">our clients</a> with reliable
          and secure solutions
        </p>

        <h2>Ongoing Improvement</h2>
        <p>
          Our team reviews and improves internal processes to strengthen your
          protection. We believe in active client communication to align with
          your business goals and make real-time adjustments where needed. Every
          user at Broadium is expected to follow our security policies. Failing
          to do so can lead to serious risks for your data.
        </p>

        <h2>Questions or Concerns?</h2>
        <p>
          If you have any questions about how we protect your data or need more
          details, feel free to <a href="https://broadium.us/contact">contact us</a>. We’re here to support you every step
          of the way.Learn more <a href="https://broadium.us/contact">About Us</a> and how we prioritize your success.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
