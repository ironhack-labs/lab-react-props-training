function CreditCard({
  type,
  number,
  exporationMonth,
  exporationYear,
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
    <div className="credit-card">
      <div className="card-type">
        <img src={imgType} />
      </div>
    </div>
  );
}

export default CreditCard;
