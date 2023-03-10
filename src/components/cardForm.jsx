import React, { useState } from "react";
import "../css/cardForm.css";

const CardForm = ({ setFormData, formData, pull }) => {
  const [view, setView] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === "firstName" || name === "lastName") {
      e.target.value = value.replace(/[0-9\s]/g, "");
    }

    if (name === "mobileNumber") {
      e.target.value = value
        .toString()
        .replace(/[a-zA-Z]/, "")
        .replace(/\d{5}/g, "$& ");
    }

    if (name === "pinCode") {
      e.target.value = value
        .toString()
        .replace(/[a-zA-Z]/, "")
        .replace(/(\w{4})(?!$)/g, "$1")
        .trim()
        .slice(0, 10);
    }

    // if(name === "address") {
    //   e.target.value = value.replace(/\s+/g, ", ");
    // }

    setFormData({ ...formData, [name]: e.target.value });
  };

  const handleError = (target, message = "Error", type = "add") => {
    //error message
  };

  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setView((pre) => !pre);

    for (let i in formData) {
      if (!formData[i]) {
        handleError(i, "Can't be blanck");
      } else {
        handleError(i, "", "remove");
      }
    }

    // if Ok ----> post request
  };

  //PDF Export

  return (
    <form onSubmit={handleSubmit} className="card-form">
      <div className="full-name">
        <label className="first-name">
          First name
          <input
            type="text"
            name="firstName"
            className="card-input"
            placeholder="e.g. Abhilash"
            onChange={handleInput}
            maxLength={15}
          />
        </label>
        <p className="info info-hidden" aria-live="polite"></p>

        <label className="last-name">
          Last Name
          <input
            type="text"
            name="lastName"
            className="card-input"
            placeholder="e.g. Kumar"
            onChange={handleInput}
            maxLength={15}
          />
        </label>
        <p className="info info-hidden" aria-live="polite"></p>
      </div>

      <label className="mobile-number">
        Mobile Number
        <input
          type="text"
          name="mobileNumber"
          placeholder="e.g +91-6301730771"
          onChange={handleInput}
          className="card-input"
        />
      </label>
      <p className="info info-hidden" aria-live="polite"></p>

      <label className="email-address">
        Email Address
        <input
          type="email"
          name="emailAddress"
          placeholder="e.g. abhilash@gmail.com"
          className="card-input"
          onChange={handleInput}
        />
      </label>
      <p className="info info-hidden" aria-live="polite"></p>

      <label className="address">
        Address
        <input
          type="text"
          name="address"
          className="card-input"
          onChange={handleInput}
          placeholder="9-325/2, Teachers Street , Adilabad, Telangana"
        />
      </label>
      <p className="info info-hidden" aria-live="polite"></p>

      <label className="pin-code">
        Postal Code
        <input
          type="text"
          name="pinCode"
          onChange={handleInput}
          className="card-input"
          placeholder="e.g 464-454"
        />
      </label>
      <p className="info info-hidden" aria-live="polite"></p>

      <div className="membership-detail">
        <label className="membership-type">
          Membership Type
          <select
            name="memberShipType"
            onChange={handleInput}
            className="card-input-select">
            <option value="default" disabled>
              Choose One
            </option>
            <option value="Premium">Premium</option>
            <option value="PremiumAdvanced">Premium Advanced</option>
            <option value="Fellowship">Fellowship</option>
            <option value="FellowshipAdvanced">fellowship Advanced</option>
            <option value="mainMember">Main Member</option>
          </select>
        </label>
      </div>
      <label className="fee">
        Membership Fee
        <input
          type="number"
          name="fee"
          onChange={handleInput}
          className="card-input-number"
          placeholder="e.g 2000"
          step={1000}
          min={1000}
          max={10_000}
        />
      </label>

      <div className="form-buttons">
        <button className="btn btn-primary">Print Card</button>
        <button
          stype="submit"
          className="btn btn-primary btn-submit"
          onSubmit={pull(view)}>
          submit Form
        </button>
      </div>
    </form>
  );
};

export default CardForm;
