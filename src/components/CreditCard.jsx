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
  const lastFour = number.slice(-4);
  const maskedNumber = `\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 ${lastFour}`;
  const month = String(expirationMonth).padStart(2, '0');
  const year = String(expirationYear).slice(-2);

  return (
    <div
      className="credit-card"
      style={{
        backgroundColor: bgColor,
        color,
      }}
    >
      <div className="credit-card__header">
        <span>{type}</span>
      </div>
      <div className="credit-card__number">{maskedNumber}</div>
      <div className="credit-card__footer">
        <div className="credit-card__expires">
          <span>Expires {month}/{year}</span>
          <span className="credit-card__bank">{bank}</span>
        </div>
        <div>{owner}</div>
      </div>
    </div>
  );
}

export default CreditCard;
