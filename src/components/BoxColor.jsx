export const BoxColor = (props) => {
  const { r, g, b } = props;
  // Hexadecimal color code
  const hex = `hexadecimal - #${r.toString(16)}${g.toString(16)}${b.toString(
    16
  )}`;
  const binary = `binary - ${r.toString(2)}${g.toString(2)}${b.toString(2)}`;

  const divStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
  };

  return (
    <div className="box-color" style={divStyle}>
      <p>
        rgb({r},{g},{b}) <p>{hex}</p>
        <p>{binary}</p>
      </p>
    </div>
  );
};
