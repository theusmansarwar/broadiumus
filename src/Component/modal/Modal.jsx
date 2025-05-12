import React from "react";
import { IoMdClose } from "react-icons/io";
import "./Modal.css";
import { useNavigate } from "react-router-dom";
const Modal = ({ data, onClose }) => {
  const navigate = useNavigate();
  if (!data) return null;
  const handleOverlayClick = () => {
    onClose();
  };
  const handleContentClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="modal-card-overlay" onClick={handleOverlayClick}>
      <div className="modal-card" onClick={handleContentClick}>
        <div className="modal-card-top">
          <h2>{data.title}</h2>
          <IoMdClose className="modal-card-close" onClick={onClose} />
        </div>
        <div className="modal-card-content">
          <p>{data.modaldescription}</p>
          <p>
            <span className="click-btn" onClick={()=>navigate('/contact')}>Click here</span> to contact sales for a proposal.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Modal;