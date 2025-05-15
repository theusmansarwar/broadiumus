import React, { useEffect } from "react";
import "./extra.css";
import { useLocation } from "react-router-dom";
const AboutUs = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top on route change
  }, [pathname]);
  return (
    <div className="content">
      <div className="heading">
        <p>WHO WE ARE</p>
        <h1>ABOUT US</h1>
        <div className="hr" />
      </div>

      <section>
        <h1>We Are Here to Help Your Business Grow</h1>
        <p>
          Broadium works as an extension of your brand. You receive consistent
          and high-quality customer service every day. Our reliable team handles
          customer interactions 24/7. You get the support you need no matter the
          scale of your operations.
        </p>

        <h2>Our Foundation</h2>
        <p>
          Our company is built on trust, speed, and dependability. We focus on
          clear communication and proactive service. Our team members are
          trained to represent your brand. They reflect the professionalism and
          care of your company.
        </p>

        <h2>Our Journey</h2>
        <p>
          Broadium started with one simple idea: how can business communication
          become more human and responsive? This led us to launch services
          focused on real-time customer engagement and flexible integration. Our
          early work with telecom and transportation companies expanded to serve
          industries like healthcare, hospitality, and more.
        </p>

        <h2>What We Offer</h2>
        <p>
          We do more than handle calls. Broadium offers a full customer service
          ecosystem tailored to your business needs. Our services include:
        </p>
        <ul className="extra-ul">
          <li>24/7 Live Support</li>
          <li>Voice, Email, and SMS Assistance</li>
          <li>Customer Onboarding and Retention</li>
          <li>Inbound and Outbound Call Handling</li>
          <li>Helpdesk and Technical Support</li>
          <li>Appointment Scheduling</li>
          <li>Payment Reminders and Billing Support</li>
          <li>Real-Time Reporting and Analytics</li>
        </ul>

        <h2>Industries We Serve</h2>
        <p>
          Broadium services work across many industries. We understand the
          unique needs of every sector. Our team receives specific training to
          meet those needs. We currently serve businesses in:
        </p>
        <ul>
          <li>Transportation and Roadside Assistance</li>
          <li>Telecom and Internet Services</li>
          <li>Hospitality and Tourism</li>
          <li>Parking and Cruise Services</li>
          <li>Medical and Dental Practices</li>
          <li>E-commerce and Product Support</li>
        </ul>

        <h2>You Can Trust</h2>
        <p>
          We guarantee 99.9% uptime and follow strict data security standards.
          Your customer data stays protected at all times. We use trusted
          platforms for call routing, analytics, and CRM integration. Every
          interaction is logged, tracked, and improved. Our reporting tools keep
          you informed about your support system.
        </p>

        <h2>Our People</h2>
        <p>
          Technology plays a big role but our people bring the real value. We
          select each team member with care and train them to high standards.
          They solve problems, speak for your brand, and keep your customers
          happy. We also work closely with your team to make sure everything
          runs smoothly.
        </p>

        <h2>Our Commitment</h2>
        <p>
          Broadium does more than offer support. We build strong partnerships
          with every client. You get all of this when you work with us:
        </p>
        <ul>
          <li>A dedicated account manager</li>
          <li>A smooth onboarding process</li>
          <li>Custom scripts and brand alignment</li>
          <li>Multilingual support options</li>
          <li>Continuous performance improvement</li>
          <li>Scalable plans to grow with your business</li>
        </ul>
        <p>
          We offer flexible pricing, clear contracts, and services tailored to
          you. We adjust to your needs whether you receive 50 calls a day or
          5,000.
        </p>

        <h2>Security and Compliance</h2>
        <p>
          Security stays at the core of everything we do at Broadium. We follow
          strict data protection rules and meet top standards like GDPR, HIPAA,
          and PCI-DSS. Our team trains in security practices, and our systems
          are watched 24/7 to prevent breaches. You can trust our backup plans
          to keep your services running during any issue.
        </p>

        <h2>Client Success</h2>
        <p>
          Broadium helps reduce wait times, boost satisfaction, and scale
          faster. Our clients often see strong improvements. Here are a few
          examples:
        </p>
        <ul>
          <li>A UK-based taxi service reduced call abandonment by 42%.</li>
          <li>
            A hotel chain in the US increased booking confirmations by 30%.
          </li>
          <li>
            A telecom provider gained 18% more lead conversions with our
            outbound service.
          </li>
        </ul>

        <h2>Why Choose Broadium?</h2>
        <p>
          Broadium goes beyond basic support. We act as your partner in
          long-term growth. You can count on our people, our tools, and our
          commitment. Here’s why businesses choose us:
        </p>
        <ul>
          <li>24/7 multilingual support</li>
          <li>High call accuracy and fast responses</li>
          <li>Seamless integration with your CRM</li>
          <li>Transparent pricing and detailed reports</li>
          <li>Custom solutions designed for your needs</li>
        </ul>

        <h2>Let’s Build Something Great Together</h2>
        <p>
          Ready to improve your customer experience? Broadium gives you the
          support and flexibility your business needs. Contact us today. We will
          listen to your goals and create a plan that delivers real results.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
