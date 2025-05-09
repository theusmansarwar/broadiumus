import React from 'react'
import './Herosection.css'
import bg from '../../assets/bg.svg'
const Herosection = () => {
  return (
    <div className='hero-section' 
    style={{
        position: 'relative',
     
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }}
    >
       <div className="dark-effect">
        <h1>24/7 Customer Support Partner
        </h1>
        <h2>Call, Chat, and Email Support for Businesses in the USA – Canada and UK</h2>
        <div className='hr'/>
       </div>
    </div>
  )
}

export default Herosection