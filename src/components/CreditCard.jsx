function CreditCard(props) {
  return (
    <div
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        width: 350,
		height: 200,
		borderRadius: 15,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",


      }}
    >
    
      <p style={{ textAlign: "right", margin: 0, fontWeight: "bold" }}>{props.type}</p>
      <p style={{ fontSize: "30px", margin: 0 }}>
  •••• •••• •••• {props.number.slice(-4)}
</p>
<div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
<div style={{ display: "flex", flexDirection: "row", gap: 30 }}>
  <p style={{ margin: 0 }}>Expires: {props.expirationMonth}/{props.expirationYear}</p>
  <p style={{ margin: 0 }}>{props.bank}</p>
</div>



<p style={{ margin: 0 }}>{props.owner}</p>
         </div></div>
  );
}

export default CreditCard;