import React from 'react';
import "../css/cardStyles.css"
import logo from "../assets/logo.png"

const MemebershipCard = ({formData}) => {
    
    const prifileImg =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMTGREwYgEWrBDaZV5I9_AVLAqRPMqmgzMhQ&usqp=CAU";

      formData = null;

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
          <li>Full Name:</li>
          <li>Mobile No:</li>
          <li>E-mail:</li>
          <li>
            Address:
            <address>
                "Ho no, Street, Mandal, <br /> District, State"
            </address>
          </li>
          <li>Pin Code:</li>
          <li>Membership Type:</li>
          <li>Membership Fee:</li>
        </ul>
      </div>
    </aside>
  );
}

export default MemebershipCard