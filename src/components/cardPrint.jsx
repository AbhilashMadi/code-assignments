import "../css/printCard.css";
import print from "../assets/print.svg";
// import success from "../assets/success.svg";

const CardPrint = ({setFormData}) => {

    const resetForm = () => {
        setFormData({firstName:null,lastName: null, mobileNumber:null,emailAddress: null, homeNumber:null, street:null,
        mandal:null, district:null, state: null, pinCode: null, 
        memberShipType: null, memberShipFee:null});
    }

  return (
    <div className="printCard">
        <img src={print} alt="print-machine-svg" />
        <p>Thank you!</p>
        <p>Succesfully added your card details</p>
        <button className="btn-primary" on-onClick={resetForm}>
            Download Card
        </button>
    </div>
  )
};

export default CardPrint;
