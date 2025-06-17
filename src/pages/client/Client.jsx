import React, { useEffect } from 'react'
import RedClient from '../../Component/Client/RedClient'
import WhiteClient from '../../Component/Client/WhiteClient'
import carnival from '../../assets/carnival.png'
import clearcreek from '../../assets/clearcreak.png'
import cleveland from '../../assets/cleaved.png'
import cox from '../../assets/cox.png'
import dish from '../../assets/dish.png'
import frontier from '../../assets/frontier.png'
import ATT from '../../assets/att.png'
import home2suits from '../../assets/home2.png'
import hughesnet from '../../assets/hughes.png'
import hungryhouse from '../../assets/hungry.png'
import lynx from '../../assets/lynx.png'
import ohara from '../../assets/ohara.svg'
import optimum from '../../assets/optimum.png'
import riu from '../../assets/riu.png'
import shipacar from '../../assets/shipacar.png'
import spectrum from '../../assets/spectrum.png'
import statefarm from '../../assets/statefarm.png'
import sutterhealth from '../../assets/shutter.png'
import viasat from '../../assets/viasat.png'
import xfinity from '../../assets/xfinity.png'
import greenbee from '../../assets/greenbee.png'
import Herosection from "../../Component/Hero/Herosection"
const Client = () => {

  const medicalDentalData = [
    {
      id: 1,
      logo: cleveland,
      title: "Cleveland Clinic (Orthopedic, US)",
      description: "AR coding and eligibility verification for fast claims",
    },
    {
      id: 2,
      logo: clearcreek,
      title: "Clear Creek Dental Clinic (US)",
      description: "AR, claims processing, and insurance verification",
    },
    {
      id: 3,
      logo: sutterhealth,
      title: "SUTTER HEALTH (US)",
      description: "AR coding and eligibility for smooth billing and claims",
    },
  ];
  const hospitalityData = [
    {
      id: 1,
      logo: hungryhouse,
      title: "Hungry House (UK)",
      description: "24/7 restaurant support for orders and customer inquiries",
    },
    {
      id: 2,
      logo: home2suits,
      title: "Home2Suites (US)",
      description: "Reservation and customer support for seamless hotel stays",
    },
    {
      id: 3,
      logo: riu,
      title: "RIU Hotels (US)",
      description: "Dedicated support for reservations and guest services",
    },
  ];

  const telecomData = [
    {
      id: 1,
      logo: ATT,
      title: "AT&T",
      description: "24/7 customer support for account questions and service-related issues.",
    },
    {
      id: 2,
      logo: spectrum,
      title: "Spectrum",
      description: "Live assistance for new connection setups and technical service queries.",
    },
    {
      id: 3,
      logo: xfinity,
      title: "Xfinity",
      description: "Complete support for handling calls related to billing and internet problems.",
    },
  
    {
      id: 4,
      logo: cox,
      title: "Cox",
      description: "Customer care focused on plan upgrades, payments, and troubleshooting.",
    },
    {
      id: 5,
      logo: optimum,
      title: "Optimum",
      description: "Real-time support for installations, signal issues, and account questions.",
    },
    {
      id: 6,
      logo: hughesnet,
      title: "HughesNet",
      description: "Satellite internet help desk to manage customer service requests.",
    },
    {
      id: 7,
      logo: viasat,
      title: "Viasat",
      description: "Professional assistance for rural broadband customers and service updates.",
    },
    {
      id: 8,
      logo: dish,
      title: "Dish",
      description: "Round-the-clock response team for TV service activation and billing support.",
    },
    {
      id: 9,
      logo: frontier,
      title: "Frontier",
      description: "Reliable service desk for network issues and general customer guidance.",
    },
  ];
  const transportationData = [
    {
      id: 1,
      logo: lynx,
      title: "Lynx Taxis (UK)",
      description: "Complete 24/7 customer support for bookings and trip updates",
    },
    {
      id: 2,
      logo: ohara,
      title: "O’Hara Cab (US)",
      description: "Nonstop phone support to manage taxi operations smoothly",
    },
    {
      id: 3,
      logo: shipacar,
      title: "Ship a Car Direct (US)",
      description: "Quick assistance for customers needing car delivery help",
    },
    {
      id: 4,
      logo: statefarm,
      title: "State Farm (US)",
      description: "Round-the-clock roadside support to handle emergencies fast",
    },
    {
      id: 5,
      logo: carnival,
      title: "Carnival Cruise Line (US)",
      description: "24/7 customer care for SEA tour inquiries and reservations",
    },
    {
      id: 6,
      logo: greenbee,
      title: "Green Bee Parking (US)",
      description: "Live support for airport parking bookings and help requests",
    },
  ];
  return (
    <div className='content'>
       <Herosection
       section='client'
        title="OUR CLIENTS"
        subtitle="Strong Partnerships, Proven Results"
      />
        <div className='heading'>
            <p>WHO WE WORKED WITH</p>
            <h1>OUR CLIENTS</h1>
            <div className='hr'/>
        </div>
        <div className='about-p'>
        <p>We help global businesses with 24/7 customer support through smart outsourcing. You have reached the right place to talk to our <a href="https://broadium.us/contact">support team</a>. You can ask anything or request a service. It is simple to contact us and get a fast reply. You should speak to our team to find the right solution. We respond on live chat, email, and phone. We stay active all day and night.
        </p>
        <p>You will receive full guidance with clear answers. We stay honest and are always ready. We handle every query with care. You will feel valued from the first reply. It is time to connect and solve your needs today.</p>
        </div>
        <RedClient cards={transportationData} title="Transportation & Road Assistance" description="We help transport businesses stay active every hour. Broadium offers fast response and reliable call handling so drivers and dispatchers never lose time."/>
        <WhiteClient cards={telecomData} title="Telecom Support" description='<a href="https://broadium.us/">Broadium</a> began with telecom and still leads in it. We manage high volumes and solve issues fast, so customers never feel stuck.'/>
        <RedClient cards={hospitalityData} title="Hospitality" description='We provide tailored customer support to enhance the hospitality experience. <a href="https://broadium.us/services">Our services</a> ensure smooth operations and help guests with reservations, inquiries, and special requests around the clock.' />
        <WhiteClient cards={medicalDentalData} title="Medical & Dental" description='We help healthcare providers manage claims, billing, and patient inquiries. Our team ensures <a href="https://broadium.us/contact">quick processing</a>  and accurate results.'/>
    </div>
  )
}

export default Client