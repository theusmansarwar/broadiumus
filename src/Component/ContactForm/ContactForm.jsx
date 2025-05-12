import React, { useState } from "react";
import "./Contact.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
const ContactForm = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    business: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  const handleSubmit = async () => {
    const payload = {
      name: `${formData.firstname}${formData.lastname}`,
      phone: formData.phone,
      email: formData.email,
      business: formData.business,
      subject: formData.service,
      query: formData.message,
    };
    try {
      const res = await axios.post("https://zemalt.com/api/CreateLeads", payload);
      if (res.status == 201) {
        setStatus("success");
        toast.success(res?.data?.message);
        setErrors({});
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          business: "",
          service: "",
          message: "",
        });
      }
    } catch (err) {
      if (err.response?.status == 400) {
        const fieldErrors = {};
        err.response.data.missingFields.forEach((field) => {
          fieldErrors[field.name] = field.message;
        });
        setErrors(fieldErrors);
      } else {
        setStatus("error");
      }
    }
  };
  return (
    <div className="contact-container">
       <ToastContainer position="top-right" autoClose={3000} pauseOnHover={false} />
      <div className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstname" className="required-label">
            
              First Name
            </label>
            {errors.name && <p className="error-msg">{errors.name}</p>}
            <input id="firstname" type="text" value={formData.firstname} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="lastname" className="required-label">
            
              Last Name
            </label>
            {errors.name && <p className="error-msg">{errors.name}</p>}
            <input id="lastname" type="text" value={formData.lastname} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email" className="required-label">
       
              E-Mail
            </label>
            {errors.email && <p className="error-msg">{errors.email}</p>}
            <input id="email" type="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="required-label ">
              Contact Number
            </label>
            
            {errors.phone && <p className="error-msg">{errors.phone}</p>}
            <input id="phone" type="number" value={formData.phone} onChange={handleChange}/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="business" className="required-label">
              Business Name
            </label>
            {errors.business && <p className="error-msg">{errors.business}</p>}
            <input id="business" type="text" value={formData.business} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="service" className="required-label">
              Service Interested in
            </label>
            {errors.service && <p className="error-msg">{errors.service}</p>}
            <select id="service" value={formData.service} onChange={handleChange} required>
              <option value="" hidden></option>
              <option value="web-development">Web Development</option>
              <option value="mobile-app">Mobile App Development</option>
              <option value="seo">SEO Optimization</option>
              <option value="graphic-design">Graphic Design</option>
            </select>
          </div>
        </div>
        <div className="textarea-container">
          <label htmlFor="textarea" className="text-area-label required-label">
            Message
          </label>
          
          {errors.query && <p className="error-msg">{errors.query}</p>}
          <textarea id="message" value={formData.message} onChange={handleChange}></textarea>
        </div>
        <button className="send-btn" onClick={handleSubmit}>Send Message</button>
      </div>
    </div>
  );
};
export default ContactForm;