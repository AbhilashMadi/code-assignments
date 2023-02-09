import React, { useState} from 'react';
import "./css/main.css";

/*component imports*/
import CardPrint from './components/cardPrint';
import MemebershipCard from './components/memebershipCard';
import CardForm from './components/cardForm';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function App() {
  const [formData, setFormData] = useState({firstName: null, lastName: null, mobileNumber:null, emailAddress:null, address:null, pinCode:null, memberShipType:null,fee:null})

  const [show, setShow] = useState(false);
  
  const pull = (view) => {
    setShow(view);
  }

  const exportPDF = () => {
    const input = document.getElementById("Card");
    html2canvas(input,{logging:true,letterRendering: 1, useCORS: true}).then(canvas => {
      const imgWidth = 100;
      const imgHeight = canvas.height*imgWidth/canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p","mm","a4");
      pdf.addImage(imgData, "PNG",55,55, imgWidth,imgHeight );
      pdf.save("membership card.pdf");
    })
  }

  return (
    <React.Fragment>
      <section id="Card">
        <MemebershipCard formData={formData} />
      </section>
      <main className="cardOverflow">
        <div>
          {show ? (
            <CardPrint setFormData={setFormData} printIt={exportPDF} />
          ) : (
            <CardForm
              setFormData={setFormData}
              formData={formData}
              pull={pull}
              exportPDF = {exportPDF}
            />
          )}
        </div>
        <button onClick={exportPDF}>Download</button>
      </main>
    </React.Fragment>
  );
}
