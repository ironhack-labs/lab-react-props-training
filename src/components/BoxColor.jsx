const BoxColor = ({ r, g, b }) => {
  const divStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
    color: "white",
    margin: "20px",
    padding: "10px",
    height: "80px",
    border: "4px solid black",
    textAlign: "center",
  };

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  return (
    <div>
      <h1 style={divStyle}>
        rgb({r},{g},{b}) <br />#{componentToHex(r)}
        {componentToHex(g)}
        {componentToHex(b)}
      </h1>
    </div>
  );
};

export default BoxColor;
