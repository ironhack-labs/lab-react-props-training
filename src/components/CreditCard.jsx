import styles from "./CreditCard.module.css";
export function CreditCard(props) {
  const colors = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
  };
  const lastDigits = props.number.toString().slice(-4);
  return (
    <div className={styles.card} style={colors}>
      <img src={props.img} alt="Type Card Image" />
      <p id={styles.numbers}>.... .... .... {lastDigits}</p>
      <div className={styles.bankDetails}>
        <p>
          Expires {props.expirationMonth}/{props.expirationYear}
        </p>
        <p>{props.bank}</p>
        <p id={styles.owner}>{props.owner}</p>
      </div>
    </div>
  );
}
