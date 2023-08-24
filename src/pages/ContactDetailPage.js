import React from "react";
import ContactDetail from "../components/ContactDetail";
import contactsData from "../data/contacts";

function ContactDetailPage({ match }) {
  const contactId = Number(match.params.id); // Конвертація у числовий тип
  const contact = contactsData[contactId]; // Отримання контакту за id

  return (
    <div>
      <h1>Contact Details</h1>
      {contact ? <ContactDetail contact={contact} /> : <p>Contact not found</p>}
    </div>
  );
}

export default ContactDetailPage;
