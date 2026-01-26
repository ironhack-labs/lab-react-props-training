const BoxColor = (props) => {
    const toHex = (value) => {
      return value.toString(16).padStart(2, "0").toUpperCase();
    };
  
    const hexColor = `#${toHex(props.r)}${toHex(props.g)}${toHex(props.b)}`;
  
    return (
      <div
        className="card"
        style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }}
      >
        <h2>
          rgb({props.r}, {props.g}, {props.b})
        </h2>
        <h2>{hexColor}</h2>
      </div>
    );
  };
  
  export default BoxColor;
  