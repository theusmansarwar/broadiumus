import React, { useState } from "react";
import "./Contact.css";
import { toast, ToastContainer } from "react-toastify";
import { createLead } from "../../DAL/Create";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const serviceOptions = [
  "CALL SUPPORT",
  "CHAT SUPPORT",
  "EMAIL SUPPORT",
  "OMNI-CHANNEL SUPPORT",
  "B2B SALES SUPPORT",
  "KYC SUPPORT",
  "BACK OFFICE SUPPORT",
  "TECHNICAL SUPPORT",
  "BUSINESS PROCESS OUTSOURCING",
  "OTHERS",
];

const ContactForm = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    business: "",
    service: [],
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
   const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedServices = checked
        ? [...prev.service, value]
        : prev.service.filter((s) => s !== value);
      return { ...prev, service: updatedServices };
    });
  };

  const handleSubmit = async () => {
    const payload = {
      name: `${formData.firstname}${formData.lastname}`,
      phone: formData.phone,
      email: formData.email,
      business: formData.business,
      service: formData.service.join(", "),
      query: formData.message,
    };
    try {
      const res = await createLead(payload);
      if (res.status === 201) {
        setStatus("success");
        toast.success(res?.message || "Form submitted successfully");
        setErrors({});
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          business: "",
          service: [],
          message: "",
        });
      }
      if (res?.status == 400) {
        const fieldErrors = {};
        res.missingFields.forEach((field) => {
          fieldErrors[field.name] = field.message;
        });
        setErrors(fieldErrors);
      }
    } catch (err) {
      if (err?.status == 400) {
        const fieldErrors = {};
        err.missingFields.forEach((field) => {
          fieldErrors[field.name] = field.message;
        });
        setErrors(fieldErrors);
        toast.error();
      } else {
        setStatus("error");
      }
    }
  };

  return (
    <div className="contact-container">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        pauseOnHover={false}
      />
      <div className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstname" className="required-label">
              First Name
            </label>
            {errors.name && <p className="error-msg">{errors.name}</p>}
            <input
              id="firstname"
              type="text"
              value={formData.firstname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname" className="required-label">
              Last Name
            </label>
            {errors.name && <p className="error-msg">{errors.name}</p>}
            <input
              id="lastname"
              type="text"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email" className="required-label">
              E-Mail
            </label>
            {errors.email && <p className="error-msg">{errors.email}</p>}
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="required-label">
              Contact Number
            </label>
            {errors.phone && <p className="error-msg">{errors.phone}</p>}
            <PhoneInput
              id="phone"
              type="number"
              value={formData.phone}
              onChange={handlePhoneChange}
              countryCodeEditable={false}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group full-width">
            <label htmlFor="business" className="required-label">
              Business Name
            </label>
            {errors.business && <p className="error-msg">{errors.business}</p>}
            <input
              id="business"
              type="text"
              value={formData.business}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="checkbox-container">
          <p className="service-label required-label">Services Interested In</p>
          {errors.service && <p className="error-msg">{errors.service}</p>}
          <div className="checkbox-grid">
            {serviceOptions.map((service) => (
              <div className="checkbox-item" key={service}>
                <input
                  type="checkbox"
                  id={service}
                  value={service}
                  checked={formData.service.includes(service)}
                  onChange={handleServiceChange}
                />
                <label htmlFor={service}>{service}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="textarea-container">
          <label htmlFor="message" className="text-area-label required-label">
            Message
          </label>
          {errors.query && <p className="error-msg">{errors.query}</p>}
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Ex: I need a customer support team. The average flow ticket of my business is 1200 customer tickets per month... "
          ></textarea>
        </div>

        <button className="send-btn" onClick={handleSubmit}>
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
