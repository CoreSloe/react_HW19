import React from "react";
import Contracts from "../components/Contracts";
import contactsData from "../data/contacts";

function Page3() {
  return (
    <div>
      <Contracts />
      <div>
        {contactsData.map((contact, index) => (
          <div key={index}></div>
        ))}
      </div>
    </div>
  );
}

export default Page3;
