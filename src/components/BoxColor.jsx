const BoxColor = (props) => {
  const { r, g, b } = props;
  const backgroundColor = `rgb(${r}, ${g}, ${b})`;
  const hex =
    "#" +
    [r, g, b]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase();

  return (
    <div style={{ backgroundColor, width: "500px", height: "100px" }}>
      {backgroundColor} {hex}
    </div>
  );
};
export default BoxColor;
