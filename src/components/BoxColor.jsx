const BoxColor = ({ r, g, b }) => {
  const red = { r };
  const boxStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
    width: "300px",
    height: "50px",
    textAlign: "center",
  };
  return (
    <>
      <div style={boxStyle}>
        rgb({r},{g},{b})<br />
      </div>
    </>
  );
};

export default BoxColor;
