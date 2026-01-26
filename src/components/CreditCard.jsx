import"../css/creditcard.css"
import visaLogo from "../assets/images/visa.png"
import mastercardLogo from "../assets/images/master-card.svg"

function CreditCard(props) {

    const number = props.number
    let censorNumber = ""

    for (let i=12; i<16; i++){
        censorNumber += number[i]
    }
    console.log(censorNumber);

    const formatedNumber = `•••• •••• •••• ${censorNumber}`

    // Card Type
    let logo
    switch (props.type){
        case "Visa":
            logo = visaLogo
            break
        case "Master Card":
            logo = mastercardLogo
            break
    }

  return (
    <div className="creditcard" style={{backgroundColor: props.bgColor, color:props.color}}>
      <div className="type"><img src={logo} alt="Bank Typ Logo" /></div>
      <div className="creditnumber">{formatedNumber}</div>
      <div className="details">
        <div className="details__bankdetails">
          <div className="details__bankdetails__experation">
            Expires {props.expirationMonth}/{props.expirationYear}
          </div>
          <div className="details__bankdetails__bankname">{props.bank}</div>
        </div>
        <div className="details__owner">{props.owner}</div>
      </div>
    </div>
  );
}

export default CreditCard;
