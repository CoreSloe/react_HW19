import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "./Contract.css";

const Contract = ({ firstName, lastName, phone, gender }) => {
  const icon = gender === "male" ? "Ч" : "Ж";

  return (
    <div className="contract">
      <div className="contact-icons">
        <FaEnvelope className="icon message-icon" />
        <p className="contact-text">
          Name: {firstName} {lastName}
        </p>
      </div>
      <div className="contact-info">
        <p className="phone-number">
          <FaPhone className="icon phone-icon" />
          Phone: {phone}
        </p>
        <p>Gender: {icon}</p>
      </div>
    </div>
  );
};

export default Contract;
