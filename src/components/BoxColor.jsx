import "../App.css";

function BoxColor({ r, g, b }) {

  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`
  };

  return (
    <div className="box-color" style={boxStyle}>
      rgb({r}, {g}, {b})
    </div>
  );
}

export default BoxColor;