import React, { useEffect } from 'react'
import './extra.css'
import { useLocation } from 'react-router-dom';
const TermsAndConditions = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to top on route change
    }, [pathname]);
  return (
    <div className='content'>
  <div className='heading'>
            {/* <p>WHO WE ARE</p> */}
            <h1>Terms And Conditions </h1>
            <div className='hr'/>
        </div>
        

        <section>
    <p>
      You agree to these Terms and Conditions when you use Broadium’s website or services. If you do not agree, please stop using our website and services immediately. We may update these terms at any time. Continued use of our services means you accept any changes.
   
      Broadium provides services such as call routing, CRM integration, and analytics. We strive to ensure our services are reliable, but we cannot guarantee 100% uptime. You must use our services responsibly—do not overload or harm the system. Illegal activities are strictly prohibited.
    </p>
  
   
    <p>
      We are committed to protecting your privacy. Your data is used only to improve services and is never sold or misused. Please refer to our <a href="https://broadium.us/privacy-policy">Privacy Policy</a> for more details.
   
      You are responsible for keeping your account information safe and secure.
    </p>
  
    <p>
      All content on our website is the property of Broadium or our partners. You may not copy, distribute, or modify any content without written permission. Unauthorized use for business purposes may result in legal action.
    </p>
  
    <p>
      We aim to keep our website and services available at all times, but temporary disruptions may occur due to maintenance or technical issues. We are not liable for these interruptions. It is your responsibility to back up any important data.
   
      We reserve the right to suspend or terminate access to our services at our discretion.
    </p>
  
    <p>
      Broadium is not liable for indirect or incidental damages, including data loss or loss of profit. We are also not responsible for third-party content or websites linked to ours. Our liability is limited to the amount paid by you in the past month for our services.
   
      You agree to indemnify Broadium against any claims, losses, or damages resulting from your use of our website or services.
    </p>
  
    <p>
      Our website may include links to third-party websites for your convenience. We do not control these websites and are not responsible for their content or services. Any interactions with third-party websites are your responsibility.
    </p>
  
    <p>
      Contact us directly for any issues. Disputes will be resolved through arbitration in the location where Broadium operates. You waive your right to a jury trial and agree to resolve disputes via arbitration only.
    </p>
  
    <p>
      These Terms and Conditions are governed by the laws of Broadium’s operating location. Legal matters must be handled in local courts. Your continued use confirms your acceptance of these rules.
    </p>
  
    <p>
      Broadium may update these Terms and Conditions at any time. Check this page regularly. Continued use after updates means you agree to the new terms.
   
      These Terms and Conditions, along with our Privacy Policy and other policies, form the complete agreement between you and Broadium.
    </p>
  
    <p>
      We are here to help and ensure your experience with Broadium is positive. If you have any questions or need support, please <a href="https://broadium.us/contact">Contact Us</a> directly.
    </p>
    <p>Return to <a href="https://broadium.us/">Home</a>.</p>
  </section>
</div>

  )
}

export default TermsAndConditions