import React from 'react'
import './Service.css'
import { useNavigate } from 'react-router-dom';
const Service = () => {
  const navigate = useNavigate();
  return (
    <div className='service-section'>

<div className='service-area'>


        <div className='service-card'>
            <p>CHECK OUT</p>
            <h2>Call Support</h2>
            <p>Broadium offers call answering services that suit your business needs. Our team handles order confirmations, appointment scheduling, and follow-up calls. Customers get quick, professional support at all times. We train our agents to provide seamless service. You can rely on us to manage customer calls efficiently.</p>
        </div>
        <div className='service-card'>
            <p>CHECK OUT</p>
            <h2>Chat Support</h2>
            <p>Live chat support helps you communicate instantly with your customers. Our agents resolve queries quickly and accurately. We provide chat support on your website or app. You can expect fast responses every time. Customers will enjoy smooth communication through our chat service.</p>
        </div>
        <div className='service-card'>
            <p>CHECK OUT</p>
            <h2>Email Support</h2>
            <p>Broadium ensures timely email responses to your customers. We manage queries, tickets, and follow-ups efficiently. Our team provides clear solutions to all email inquiries. Customers get accurate and prompt information. We help maintain smooth and professional email communication for your business.</p>
        </div>
        </div>
        <div className='outline-btn2' onClick={() => navigate('/services')}>View All</div>

    </div>
  )
}

export default Service