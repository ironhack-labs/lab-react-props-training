const BoxColor = ({ r, g, b }) => {
  // Generate the color string in 'rgb(r, g, b)' format
  const boxColor = `rgb(${r}, ${g}, ${b})`;

  return (
    <div
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: boxColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      <p>{boxColor}</p>
    </div>
  );
};

export default BoxColor;
