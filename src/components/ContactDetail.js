import React from "react";
import { useParams } from "react-router-dom";
import { FaUser } from "react-icons/fa"; // Імпорт іконки
import contactsData from "../data/contacts";
import "./ContactDetail.css"; // Підключіть ваші стилі тут

function ContactDetail() {
  const { id } = useParams();
  const contact = contactsData.find((contact) => contact.id === id);

  if (!contact) {
    return <div className="contact-detail">Contact not found</div>;
  }

  return (
    <div className="contact-detail">
      <div className="avatar">
        <FaUser size={60} />
      </div>
      <h2>Contact Details</h2>
      <p>
        Name: {contact.firstName} {contact.lastName}
      </p>
      <p>Phone: {contact.phone}</p>
      <p>Gender: {contact.gender}</p>
    </div>
  );
}

export default ContactDetail;
