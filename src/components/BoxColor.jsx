
import './BoxColor.css';

function BoxColor({ r, g, b }) {
 
  const backgroundColor = `rgb(${r}, ${g}, ${b})`;

  return (
    <div className="box-color" style={{ backgroundColor }}>
      <p>
        rgb({r}, {g}, {b})
      </p>
    </div>
  );
}

export default BoxColor;