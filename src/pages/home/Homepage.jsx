import React, { useEffect, useState } from 'react'
import './HomePage.css'
import Service from '../../Component/Services/Service'
import Zerosection from '../../Component/Zero/Zerosection'
import Testimonial from '../../Component/Testimonial/Testimonial'
import { useNavigate } from 'react-router-dom'
import Herosection from "../../Component/Hero/Herosection"
const Homepage = () => {
  const navigate = useNavigate();
const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const heroImage = isMobile ? "/homehero-mobile.webp" : "/homehero.webp";

 

  return (
    <div className="content">
      <Herosection
        section="home"
        title="CUSTOMER SUPPORT"
        subtitle="Because Your Brand Deserves Better"
        showIcons={true}
        customImage={heroImage}
      />
        <div className='heading'>
            <p>WHO WE ARE</p>
            <h1>ABOUT US</h1>
            <div className='hr'/>
        </div>
        <div className='about-p'>
        <p>Broadium delivers reliable customer support built around your business. We offer 24/7 English-language call, chat, and email support across the USA, Canada, and the UK. You get a dedicated team that handles every customer interaction with care and clarity. We work under your brand and follow your workflow without disruption.</p>
        <p>Our agents are trained and experienced. Most have more than three years of experience in handling complex queries, booking tasks, and dispatch services. We use your CRM or preferred platform and keep every response aligned with your goals.</p>
        <p>We help businesses that need quick and clear communication. Many of our clients work in transport, roadside help, telecom, hotels, and medical billing. We take care of large call volumes and give fast replies. You grow your business. We handle the support. You don’t have to worry about breaks in service. Our uptime is 99.9%. We have strong backup systems and follow strict data safety rules. You also get reports every week and month to check how we are doing.</p>
        </div>
        <div className='about-btn'>
        <div className='outline-btn' onClick={() => navigate('/about-us')}>Learn More</div>
        </div>
        <br/>
        <br/>
        <div className='heading'>
            <p>CHECK OUT</p>
            <h1>OUR SERVICES</h1>
            <div className='hr'/>
        </div>
        <div className='about-p'>
        <p>At Broadium, we offer support that feels like part of your team. You get trained professionals who understand your business. We follow your process and represent your brand. We speak your language. Every interaction is tracked, and every report is clear. You get real-time updates without having to chase them. We work in the background while your team focuses on bigger goals. Our 24/7 support keeps your customers engaged. It ensures your services run smoothly.</p>
        </div>
        <br/>
        <Service/>
        <Zerosection/>
        <Testimonial/>
    </div>
  )
}

export default Homepage