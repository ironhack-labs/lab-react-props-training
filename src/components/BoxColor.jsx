function BoxColor(props) {
  const backgroundColor = `rgb(${props.r}, ${props.g}, ${props.b})`;

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: backgroundColor,
        color: props.r + props.g + props.b > 382 ? "black" : "white",
        height: "50px"
      }}
    >
      {backgroundColor}
    </div>
  );
}

export default BoxColor;
