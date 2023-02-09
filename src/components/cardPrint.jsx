import "../css/printCard.css";
import print from "../assets/print.svg";

const CardPrint = ({setFormData}) => {

    const resetForm = () => {
        setFormData({firstName:null,lastName: null, mobileNumber:null,emailAddress: null, homeNumber:null, street:null,
        mandal:null, district:null, state: null, pinCode: null, 
        memberShipType: null, memberShipFee:null});
    }

    const handleDownload = () => {
      resetForm();
    }

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
