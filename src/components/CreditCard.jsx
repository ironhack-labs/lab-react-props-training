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
 
 
  const lastDigits = number.slice(-4);
  const maskedNumber = `•••• •••• •••• ${lastDigits}`;

  
  const formattedMonth = expirationMonth.toString().padStart(2, "0");
  const formattedYear = expirationYear.toString().slice(-2);

 
  const logo =
    type === "Visa" ? "Visa" : type === "Master Card" ? "Master Card" : "";

  const styles = {
   card: {
      width: "300px",
      height: "170px",
      borderRadius: "10px",
      padding: "20px",
      backgroundColor: bgColor,
      color: color,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      margin: "10px",
    },
    topRow: {
      display: "flex",
      justifyContent: "flex-end",
      fontWeight: "bold",
    },
    number: {
      fontSize: "20px",
      letterSpacing: "2px",
    },
    bottomRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.topRow}>{logo}</div>

      <div style={styles.number}>{maskedNumber}</div>

      <div style={styles.bottomRow}>
        <div>
          Expires {formattedMonth}/{formattedYear}
          <br />
          {bank}
        </div>
        <div>{owner}</div>
      </div>
    </div>
  );
}

export default CreditCard
