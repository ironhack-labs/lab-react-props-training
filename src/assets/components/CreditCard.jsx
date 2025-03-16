function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  let imgType;

  if (type === "Visa") {
    imgType = "/src/assets/images/visa.png";
  } else if (type === "Master Card") {
    imgType = "/src/assets/images/master-card.svg";
  }

  return (
    <div className="credit-card" style={{ backgroundColor: bgColor, color }}>
      <div className="card-type">
        <img src={imgType} />
      </div>
      <div className="card-number">{`•••• •••• ••••  ${number.slice(-4)}`}</div>
      <div className="card-daten">
        <p>
          Expires {String(expirationMonth).padStart(2, "0")}/
          {String(expirationYear).slice(-2)} <span>{bank}</span>
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
