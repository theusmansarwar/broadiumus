import React, { useState } from 'react';
import './Zerosection.css';
import bg from '../../assets/bg.svg';
import zerologo from '../../assets/zero-logo.svg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import carnival from '../../assets/carnival.png'
import clearcreek from '../../assets/clearcreak.png'
import cleveland from '../../assets/cleaved.png'

import home2suits from '../../assets/home2.png'
import hungryhouse from '../../assets/hungry.png'
import lynx from '../../assets/lynx.png'
import ohara from '../../assets/ohara.svg'
import optimum from '../../assets/optimum.png'
import riu from '../../assets/riu.png'
import shipacar from '../../assets/shipacar.png'
import spectrum from '../../assets/spectrum.png'
import statefarm from '../../assets/statefarm.png'
import sutterhealth from '../../assets/shutter.png'
import xfinity from '../../assets/xfinity.png'
import greenbee from '../../assets/greenbee.png'
import { useNavigate } from 'react-router-dom';
const Zerosection = () => {
  const navigate = useNavigate();
  const cards = [
    { id: 1, logo: lynx, title: "Lynx Taxis (UK)" },
    { id: 2, logo: ohara, title: "O’Hara Cab (US)" },
    { id: 3, logo: shipacar, title: "Ship a Car Direct (US)" },
    { id: 4, logo: statefarm, title: "State Farm (US)" },
    { id: 5, logo: zerologo, title: "AT&T" },
    { id: 6, logo: spectrum, title: "Spectrum" },
    { id: 7, logo: xfinity, title: "Xfinity, Verizon, Cox" },
    { id: 8, logo: optimum, title: "Optimum, HughesNet, Viasat, Dish, Frontier" },
    { id: 9, logo: carnival, title: "Carnival Cruise Line (US)" },
    { id: 10, logo: greenbee, title: "Green Bee Parking (US)" },
    { id: 11, logo: hungryhouse, title: "Hungry House (UK)" },
    { id: 12, logo: home2suits, title: "Home2Suites (US)" },
    { id: 13, logo: riu, title: "RIU Hotels (US)" },
    { id: 14, logo: cleveland, title: "Cleveland Clinic (Orthopedic, US)" },
    { id: 15, logo: clearcreek, title: "Clear Creek Dental Clinic (US)" },
    { id: 16, logo: sutterhealth, title: "SUTTER HEALTH (US)" },
  ];
  

  const cardsPerPage = 3;
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const startIdx = currentPage * cardsPerPage;
  const visibleCards = cards.slice(startIdx, startIdx + cardsPerPage);

  const goToPage = (index) => setCurrentPage(index);
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));

  return (
    <div
      className='zero-section'
      style={{
        position: 'relative',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="dark-effect2">
        <div className='heading-area'>
        <p>CHECK OUT</p>
        <h1>OUR CLIENTS</h1>
        <div className='hr' />
        <p className='description'>
        Broadium works with businesses from different industries. We provide high-quality customer support tailored to their needs. Clients trust us to represent their brand and ensure customer satisfaction. We help businesses improve efficiency and cut costs. Our support solutions scale as your business grows. We make sure your customers are always engaged. Our solutions make communication easier and faster.
        </p>
        </div>

        {/* Cards */}
        <div className='cards-section'>
          {visibleCards.map((card) => (
            <div className='cards-area' key={card.id}>
              <div className="top">
                <img src={card.logo} alt={card.title} />
              </div>
              <div className='hr2' />
              <p>{card.title}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className='pagination'>
        <div className='dots-wrapper'>
            {Array.from({ length: totalPages }).map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentPage ? 'active' : ''}`}
                onClick={() => goToPage(index)}
              />
            ))}
          </div>
          <div className='arrowss'>
          <FaArrowLeft className='arrow' onClick={prevPage} />
        
          <FaArrowRight className='arrow' onClick={nextPage} />
          </div>
        </div>

        <div className='outline-btn2' onClick={() => navigate('/our-client')}>View All</div>
      </div>
    </div>
  );
};

export default Zerosection;
