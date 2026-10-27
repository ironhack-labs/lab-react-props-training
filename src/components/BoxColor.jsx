function BoxColor(props) {

let color = `rgb(${props.r}, ${props.g}, ${props.b})`;

return (
  <div
    style={{
      backgroundColor: color,
      height: 100,
      width: 300,
    }}
  >
   
  </div>
);
}
export default BoxColor;
