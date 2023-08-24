import React, { Component } from "react";
import { Link } from "react-router-dom";
import Contract from "./Contract";
import "./Contracts.css";
import contactsData from "../data/contacts";

class Contracts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contactsData,
      search: "",
      showMale: true,
      showFemale: true,
      showUndefinedGender: true,
    };
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    this.setState({ [name]: checked });
  };

  render() {
    const filteredContacts = this.state.contacts.filter((contact) => {
      const fullName = `${contact.firstName} ${contact.lastName}`;
      return (
        ((this.state.showMale && contact.gender === "male") ||
          (this.state.showFemale && contact.gender === "female") ||
          (this.state.showUndefinedGender && !contact.gender)) &&
        (fullName.toLowerCase().includes(this.state.search.toLowerCase()) ||
          contact.phone.includes(this.state.search))
      );
    });

    return (
      <div>
        <h1>Contacts</h1>
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search by name, last name, or phone"
            value={this.state.search}
            onChange={this.handleSearchChange}
          />
        </div>
        <div className="filter-bar">
          <label>
            <input
              type="checkbox"
              name="showMale"
              checked={this.state.showMale}
              onChange={this.handleCheckboxChange}
            />
            Show Male
          </label>
          <label>
            <input
              type="checkbox"
              name="showFemale"
              checked={this.state.showFemale}
              onChange={this.handleCheckboxChange}
            />
            Show Female
          </label>
          <label>
            <input
              type="checkbox"
              name="showUndefinedGender"
              checked={this.state.showUndefinedGender}
              onChange={this.handleCheckboxChange}
            />
            Show Undefined Gender
          </label>
        </div>
        <div className="contracts-list">
          {filteredContacts.map((contact) => (
            <Link key={contact.id} to={`/contacts/${contact.id}`}>
              <Contract
                firstName={contact.firstName}
                lastName={contact.lastName}
                phone={contact.phone}
                gender={contact.gender}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Contracts;
