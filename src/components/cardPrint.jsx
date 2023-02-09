import "../css/printCard.css";
import print from "../assets/print.svg";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CardPrint = ({setFormData,formData}) => {

  //reset the form data to it's intail
    const resetForm = () => {
        setFormData({firstName:null,lastName: null, mobileNumber:null,emailAddress: null, homeNumber:null, street:null,
        mandal:null, district:null, state: null, pinCode: null, 
        memberShipType: null, memberShipFee:null});
    }

    const handleDownload = () => {
      resetForm();
      exportPDF();
    }

    //Function for rendering and extracting the PDF with help of jsPDF, htmm2Canvas
    const exportPDF = () => {
      const input = document.getElementById("Card");
      html2canvas(input, {
        logging: true,
        letterRendering: 1,
        useCORS: true,
      }).then((canvas) => {
        const imgWidth = 100;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const imgData = canvas.toDataURL("img/png");
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(imgData, "PNG", 55, 55, imgWidth, imgHeight);
        pdf.save("membership card.pdf");
      });
    };

  return (
    <div className="printCard">
      <img src={print} alt="print-machine-svg" />
      <p>Thank you!</p>
      <p>{formData?.fee ? "Succesfully added your card details" : "Please fill the Details to Download the Card"}</p>
      {
        formData.fee ? (
          <button className="btn btn-primary" onClick={handleDownload}>
        Download Card
      </button>
        ) : (null)
      }
    </div>
  );
};

export default CardPrint;
