function BoxColor(props) {
  const color = `rgb(${props.r}, ${props.g}, ${props.b})`;

  return (
    <div
      style={{
        backgroundColor: color,
        
      }}
    >
      <p>
        rgb({props.r}, {props.g}, {props.b})
      </p>
    </div>
  );
}

export default BoxColor;