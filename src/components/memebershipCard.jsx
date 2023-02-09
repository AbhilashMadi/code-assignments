import React, { useEffect, useState } from "react";
import "../css/cardStyles.css";
import logo from "../assets/logo.png";

//helpers
import getId from "./helpers/generateId";

const MemebershipCard = ({formData}) => {
  const {
    firstName,
    lastName,
    mobileNumber,
    emailAddress,
    address,
    pinCode,
    memberShipType,
    fee,
  } = formData;

  const [file, setFile] = useState(null);
  const imgSrc = file
    ? URL.createObjectURL(file)
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMTGREwYgEWrBDaZV5I9_AVLAqRPMqmgzMhQ&usqp=CAU";

  const [userId, setUserId] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(imgSrc);
    };
  }, [imgSrc]);

  const uniqueId = () => {
    setUserId(getId().toString());
  };

  return (
    <aside>
    <div className="card-deco" size="A4">
        <h1 className="heading-one">Fellowship Card</h1>
        <div className="card-front">
          <img src={logo} alt="logo" draggable="false" />
          <p className="card-name">REACT FACEBOOK</p>
          <hr />
          <p className="card-address">Head Office Address: Exmaple Address</p>
          <p className="card-contact">Toll Free: +91-XXXXXXXXXX</p>
          <p></p>
        </div>

        <input
          type="file"
          id="profile"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        <div className="card-back">
          <label htmlFor="profile">
            <img
              src={imgSrc}
              alt="user profile"
              draggable="false"
              onClick={uniqueId}
            />
          </label>
          <p className="user-id">ID:{userId ? userId : "000000"}</p>
          <ul>
            <li>
              Full Name:{" "}
              <span>
                {firstName && lastName
                  ? firstName + " " + lastName
                  : "Steve Jobs"}
              </span>
            </li>
            <li>
              Mobile No:{" "}
              <span>+91-{mobileNumber ? mobileNumber : "XXXXXXXXXX"}</span>
            </li>
            <li>
              E-mail:{" "}
              <span>{emailAddress ? emailAddress : "e.g user@gmail.com"}</span>
            </li>
            <li>
              Address:
              <address>
                {address ? address : "Ho No, Street, City, State"}
              </address>
            </li>
            <li>
              Pin Code: <span>{pinCode ? pinCode : "000 000"}</span>
            </li>
            <li>
              Membership Type:{" "}
              <span>{memberShipType ? memberShipType : "Fewllowship"}</span>
            </li>
            <li>
              Membership Fee:<span>₹{fee ? fee : "0000"}</span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default MemebershipCard;
