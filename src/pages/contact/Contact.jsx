import React from 'react'
import ContactForm from '../../Component/ContactForm/ContactForm'
import Location from '../../Component/Location/Location'
import Herosection from "../../Component/Hero/Herosection"
const Contact = () => {
  return (
    <div className='content'>
      <Herosection
        section="contact"
        title="CONTACT US"
        subtitle="We’re Just One Message Away"
      />
         <div className='heading'>
            <p>WE ARE OPEN TO LISTEN</p>
            <h1>CONTACT US</h1>
            <div className='hr'/>
        </div>
        <div className='about-p'>
        <p>We help global businesses with 24/7 customer support through smart outsourcing. You have reached the right place to talk to our support team. You can ask anything or <a href="https://broadium.us/services">request a service</a>. It is simple to contact us and get a fast reply. You should speak to our team to find the right solution. We respond on email, and phone. We stay active all day and night.
        </p>
        <p>You will receive full guidance with clear answers. We stay honest and are always ready. We handle every query with care. You will feel valued from the first reply. It is time to connect and solve your needs today.</p>
        </div>
        <ContactForm/>
        <Location/>
    </div>
  )
}

export default Contact