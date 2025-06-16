import React, { useEffect } from 'react';
import './extra.css';
import { useLocation } from 'react-router-dom';

const Disclaimer = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to top on route change
    }, [pathname]);
  return (
    <div className="content">
      <div className="heading">
        {/* <p>LEGAL</p> */}
        <h1>DISCLAIMER</h1>
        <div className="hr" />
      </div>

      <section>
        <p>
          Welcome to Broadium! We appreciate your trust when you use our website. This Disclaimer explains the limits of our website and services. Please read it carefully. Continuing to use our website means you agree to these terms. If you disagree with any part of this Disclaimer, please stop using our website.
        </p>
      
        <h2>Content Accuracy</h2>
        <p>
          We strive to provide accurate and up-to-date information. However, we cannot guarantee complete accuracy or reliability. Some content may contain errors. Broadium makes no warranties about the completeness or correctness of any content.
        </p>
        <p>
          All website content is for informational purposes only. Acting on this content is at your own risk. We are not responsible for any decisions made based on the information provided.
        </p>
      
        <h2>Changes to Content</h2>
        <p>
          We may modify website content at any time. Updates are not guaranteed, so check back frequently to ensure you have the most current information.
        </p>
      
        <h2>Third-Party Links</h2>
        <p>
          Our website may contain links to external sites for your convenience. Broadium does not endorse or control these websites and is not responsible for any issues or damages from their use. Please review their terms and privacy policies independently.
        </p>
      
        <h2>Service Availability</h2>
        <p>
          While we strive for 24/7 access, we cannot ensure uninterrupted availability. Downtime may occur due to maintenance or unexpected issues. Broadium is not liable for service disruptions.
        </p>
        <p>To explore our solutions, please visit <a href="https://broadium.us/services">Our Services</a> Page </p>
      
        <h2>Limitation of Liability</h2>
        <p>
          Broadium is not responsible for damages or losses resulting from your use of the website or services. This includes loss of data, business, personal injury, or damage to reputation. Our liability is limited to any amount paid for services, if applicable.
        </p>
      
        <h2>No Warranty</h2>
        <p>
          All website content and services are provided "as is." Broadium offers no guarantees about reliability or accuracy. We disclaim all implied warranties, including merchantability and fitness for a specific purpose.
        </p>
      
        <h2>Personal Information</h2>
        <p>
          We value your privacy. Please read our <a href="https://broadium.us/privacy-policy">Privacy Policy</a> to understand how your data is collected, used, and protected.
        </p>
      
        <h2>Changes to Disclaimer</h2>
        <p>
          Broadium may revise this Disclaimer at any time. Updated terms take effect immediately when posted. Please review this page regularly. Continued use of the site means you accept the changes.
        </p>
      
        <h2>Intellectual Property Rights</h2>
        <p>
          All content on this site—including text, images, logos, and videos—is owned by Broadium or our content providers. It is protected by copyright laws. You may not copy, reproduce, or use any content without written permission.
        </p>
        <p>Learn More about <a href="https://broadium.us/our-client">Our Clients</a> or how we serve <a href="https://broadium.us/industries">Industries</a> through our solutions.</p>
      
        <h2>Termination of Access</h2>
        <p>
          We reserve the right to block or terminate access to our site if this Disclaimer is violated. We act to protect our site, services, and reputation.
        </p>
      
        <h2>Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Broadium, its affiliates, employees, and agents from any claims or losses resulting from your use of our website.
        </p>
      
        <h2>Governing Law</h2>
        <p>
          This Disclaimer is governed by the laws of Broadium's operating jurisdiction. Disputes will be resolved in that jurisdiction's courts.
        </p>
      
        <h2>Questions or Concerns?</h2>
        <p>
          We’re here to help and ensure your experience is secure and clear.
        </p>
        <p>Please feel free to <a href="https://broadium.us/contact">Contact Us</a> with any questions. Or learn more <a href="https://broadium.us/about-us">About Us</a> and our mission.</p>
      </section>
    </div>
  );
};

export default Disclaimer;
