import React from 'react';
import "../css/cardStyles.css"
import logo from "../assets/logo.png"

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
    
    const prifileImg =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMTGREwYgEWrBDaZV5I9_AVLAqRPMqmgzMhQ&usqp=CAU";

      console.log(formData.firstName);

  return (
    <aside className="card-deco">
      <h1 className="heading-one">Fellowship Card</h1>
      <div className="card-front">
        <img src={logo} alt="logo" draggable="false" />
        <p className="card-name">REACT FACEBOOK</p>
        <hr />
        <p className="card-address">Head Office Address: Exmaple Address</p>
        <p className="card-contact">Toll Free: +91-XXXXXXXXXX</p>
        <p></p>
      </div>

      <div className="card-back">
        <img src={prifileImg} alt="user profile" draggable="false" />
        <ul>
          <li>
            Full Name: {firstName && lastName ? firstName + " " + lastName : ""}
          </li>
          <li>Mobile No: {mobileNumber ? "+91-" + mobileNumber : ""}</li>
          <li>E-mail: {emailAddress ? emailAddress : ""}</li>
          <li>
            Address:
            <address>{address ? address : ""}</address>
          </li>
          <li>Pin Code: {pinCode ? pinCode : "000 000"}</li>
          <li>Membership Type: {memberShipType ? memberShipType : ""}</li>
          <li>Membership Fee: {fee ? fee : "0000"}</li>
        </ul>
      </div>
    </aside>
  );
}

export default MemebershipCard