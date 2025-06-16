import React from 'react'
import ServiceCard from '../../Component/ServiceCard/ServiceCard'
import MoreServices from '../../Component/MoreServices/MoreServices'
import Herosection from "../../Component/Hero/Herosection"

const ServicePage = () => {
  
  return (
    <div className='content'>
      <Herosection
      section="service"
        title="OUR SERVICES"
        subtitle="Tailored Solutions for Every Business"
      />
<div className='heading'>
            <p>WHO WE SERVED</p>
            <h1>OUR SERVICES</h1>
            <div className='hr'/>
        </div>
        <div className='about-p'>
        <p>Broadium provides reliable 24/7 support tailored to your business. We manage calls, emails, and <a href="https://broadium.us/contact">live chats</a> to ensure customer satisfaction at all times. Our team is trained to handle each interaction professionally and efficiently. You can trust Broadium to seamlessly integrate with your team. We help your business grow by offering flexible services. Our agents adapt to all your needs.</p>
        <p>Each team member has the experience and knowledge needed to handle complex tasks. We make sure to follow your processes and represent your brand. Our goal is to deliver high-quality service to your customers.</p>
        </div>
        <ServiceCard/>
        <MoreServices/>
    </div>
  )
}

export default ServicePage