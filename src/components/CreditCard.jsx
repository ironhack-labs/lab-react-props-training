function CreditCard(props) {
  const creditCard = props;

  const maskedNumber = "**** **** **** " + creditCard.number.slice(-4);

  return (
    <>
      <div className="credit-card">
        <nav className="card-type">{creditCard.type}</nav>
        <section className="card-number">{maskedNumber}</section>
        <footer className="card-footer">
          {creditCard.expirationMonth}/{creditCard.expirationYear}{" "}
          {creditCard.bank} {creditCard.owner}
        </footer>
      </div>
    </>
  );
}
export default CreditCard;
