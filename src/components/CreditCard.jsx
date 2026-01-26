import visa from "../assets/images/visa.png"
import master from "../assets/images/master-card.svg"
import "./CreditCard.css"

function CreditCard(props) {

    let styleCard = {
        backgroundColor: `${props.bgColor}`,
    }
  return (
    <div style={styleCard} className="tarjeta">
        <img src= {props.type === "Visa" ? visa : master} alt="" />
        <div className="numerito" style={{color : props.type === "Visa" ? "white" : "black"}}>
          <p className="puntos">.... .... ....</p>
          <p>{props.number.slice(12)}</p>
        </div>
        <div style={{color : props.type === "Visa" ? "white" : "black"}}>
          <div className="expires">
            <p>Expires {props.expirationMonth}/{props.expirationYear%100}</p>
            <p>{props.bank}</p>
          </div>
          <p className="owner">{props.owner}</p>
        </div>
    </div>
  )
}

export default CreditCard