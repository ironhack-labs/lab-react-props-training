function BoxColor(props) {
  return (
    <div style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }} className="box-color">
      <p style={{ color: props.r < 200 && props.g < 150 ? `rgb(238, 238, 228)` : `rgb(33, 19, 13)` }}>
        rgb({props.r}, {props.g}, {props.b})
      </p>
      <p style={{ color: props.r < 200 && props.g < 150 ? `rgb(238, 238, 228)` : `rgb(33, 19, 13)` }}>
        #{props.r.toString(16).length === 1 ? '0' + props.r.toString(16) : props.r.toString(16)}
        {props.g.toString(16).length === 1 ? '0' + props.g.toString(16) : props.g.toString(16)}
        {props.b.toString(16).length === 1 ? '0' + props.b.toString(16) : props.b.toString(16)}
      </p>
    </div>
  );
}

export default BoxColor;
