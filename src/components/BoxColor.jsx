const BoxColor = ({ r, g, b }) => {
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    height: "100px",
    border: "1px solid black",
    margin: "10px",
  };
  return <div style={divStyle}>BoxColor</div>;
};

export default BoxColor;
