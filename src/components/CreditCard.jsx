import "../App.css"
import VisaImg from "../assets/images/visa.png"
import MasterCardImg from "../assets/images/master-card.svg"
function CreditCard (props){
 const {type,number,expirationMonth,expirationYear,bank,owner,bgColor,color} =props
    let imageCard = ""
    const lastDigits = number.slice(-4)
    if (type === "Visa"){
        imageCard = <img src={VisaImg} alt="Visa" width="60px"/>
    } else if(type === "Master Card"){
        imageCard = <img src={MasterCardImg} alt="Master Card" width="60px" />
    }

    const cardStyle = {
        backgroundColor:`${bgColor}`,
        color: `${color}`,
        height:"200px",
        width: "400px"
    }

    return (
        <div className="credit-card" style={cardStyle} >
            <div className="imgCard">
                {imageCard}
            </div>
            <div className="number">
                <h3>**** **** **** {lastDigits}</h3>
            </div>
            <div className="datos">
            <p>Expires {expirationMonth}/{expirationYear}    {bank}</p>
            <p>{owner}</p>
            </div>
            <div>
            <p>{owner}</p>
            </div>


        </div>
    )
}
export default CreditCard