let CreditCard = (props) => {
  let divStyles = {
    width: "50vw",
    height: "30vh",
    backgroundColor: props.bgColor,
    color: props.color,
    display: "inline-block",
    margin: "10px",
    border: "none",
    borderRadius: "15px",
    position: "relative",
  };
  let slicedNumber = props.number.slice(props.number.length - 4);
  return (
    <div style={divStyles}>
      <p
        style={{
          position: "absolute",
          left: "320px",
          top: "0",
          fontWeight: "800",
        }}
      >
        {" "}
        {props.type}
      </p>
      <p
        style={{
          position: "absolute",
          top: "60px",
          left: "100px",
          fontSize: "30px",
        }}
      >
        <b>.... .... .... {slicedNumber}</b>
      </p>
      <p
        style={{
          position: "absolute",
          top: "150px",
          left: "10px",
          fontSize: "15px",
        }}
      >
        Expires:{" "}
        {props.expirationMonth < 10
          ? "0" + props.expirationMonth
          : props.expirationMonth}
        /{props.expirationYear}
      </p>
      <p
        style={{
          position: "absolute",
          top: "180px",
          left: "10px",
          fontSize: "15px",
        }}
      >
        {props.owner}
      </p>
    </div>
  );
};
export default CreditCard;
