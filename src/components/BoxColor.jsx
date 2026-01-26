import './BoxColor.css';

function BoxColor({ r, g, b }) {
  const rgbStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };

  return (
    <div className="box-color" style={rgbStyle}>
      rgb({r},{g},{b})
    </div>
  );
}

export default BoxColor;
