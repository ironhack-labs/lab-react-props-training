export const BoxColor = ({ r, g, b }) => {
  const divStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
    height: "100px",
    margin: "20px",
    padding: "20px",
  };

  const toHex = (color) => color.toString(16).padStart(2, "0");
  const hexValue = `#${toHex(Number(r))}${toHex(Number(g))}${toHex(Number(b))}`;

  return (
    <div style={divStyle}>
      <p>
        rgb({r},{g},{b})
      </p>
      <p>{hexValue}</p>
    </div>
  );
};
