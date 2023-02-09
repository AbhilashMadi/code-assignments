import "../css/printCard.css";
import print from "../assets/print.svg";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CardPrint = ({setFormData}) => {

    const resetForm = () => {
        setFormData({firstName:null,lastName: null, mobileNumber:null,emailAddress: null, homeNumber:null, street:null,
        mandal:null, district:null, state: null, pinCode: null, 
        memberShipType: null, memberShipFee:null});
    }

    const handleDownload = () => {
      resetForm();
      exportPDF();
    }

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
      <p>Succesfully added your card details</p>
      <button className="btn btn-primary" onClick={handleDownload}>
        Download Card
      </button>
    </div>
  );
};

export default CardPrint;
