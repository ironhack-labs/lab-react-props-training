export const BoxColor = (props) => {
  const { r, g, b } = props;

  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };

  return (
    <div className="box" style={boxStyle}>
      rgb({r},{g},{b})
    </div>
  );
};
