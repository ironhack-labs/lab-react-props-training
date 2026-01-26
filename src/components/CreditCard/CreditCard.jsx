import "./CreditCard.css";

function CreditCard(props) {
  //   let secret = props.number.slice(-4);
  // let src = "";
  // props.type === "visa"
  //   ? (src = "../../assets/images/master-card.svg")
  //   : (src = "../../assets/images/visa.png");
  let divStyle = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
  };
  let expiMonth = "";
  props.expirationMonth < 10
    ? (expiMonth = `0${props.expirationMonth}`)
    : (expiMonth = props.expirationMonth);
  return (
    <div style={divStyle} className="CreditCard">
      <p>
        {/* {props.type} */}
        {props.type === "Visa" ? (
          <img className="visa" src="../../public/visa.png" alt="" />
        ) : (
          <img className="master" src="../../public/master-card.svg" alt="" />
        )}
      </p>
      <h1>... ... ... {props.number.slice(-4)}</h1>
      <div className="expi">
        <p>
          Expires {expiMonth}/{props.expirationYear}
        </p>
        <p>{props.bank}</p>
      </div>
      <p>{props.owner}</p>
    </div>
  );
}

export default CreditCard;
