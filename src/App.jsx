import React, { useState} from 'react';
import "./css/main.css";

/*component imports*/
import CardPrint from './components/cardPrint';
import MemebershipCard from './components/memebershipCard';
import CardForm from './components/cardForm';

export default function App() {
  const [formData, setFormData] = useState({firstName: null, lastName: null, mobileNumber:null, emailAddress:null, address:null, pinCode:null, memberShipType:null,fee:null})

  const [show, setShow] = useState(false);
  
  const pull = (view) => {
    setShow(view);
  }

  return (
    <React.Fragment>
      <section id="Card">
        <MemebershipCard formData={formData} />
      </section>
      <main className="cardOverflow">
        <div>
          {show ? (
            <CardPrint setFormData={setFormData}/>
          ) : (
            <CardForm
              setFormData={setFormData}
              formData={formData}
              pull={pull}
            />
          )}
        </div>
        {/* <button onClick={exportPDF}>Download</button> */}
      </main>
    </React.Fragment>
  );
}
