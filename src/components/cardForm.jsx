import React from "react";
import "../css/cardForm.css";

const CardForm = ({ setFormData, formData }) => {
  const handleInput = (e) => {};

  const handleSubmit = () => {};

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
            <option value="default" disabled selected>Choose One</option>
            <option value="premium">Premium</option>
            <option value="premiumAdvanced">Premium Advanced</option>
            <option value="fellowship">Fellowship</option>
            <option value="fellowshipAdvanced">fellowship Advanced</option>
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
        <button className=" btn btn-primary" >upload profile</button>
        <button stype="submit" className="btn btn-primary">
          submit Form
        </button>
      </div>
    </form>
  );
};

export default CardForm;
