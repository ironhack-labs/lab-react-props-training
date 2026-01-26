function BoxColor(props) {
  return (
    <div
      className="rgbBox"
      style={{
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        padding: "20px",
        margin: "10px ",        
        border: "1px solid black",
        color: "black",
        textAlign: "center",       
  
      }}
    >
      <p>
        rgb({props.r}, {props.g}, {props.b})
      </p>
    </div>
  );
}
 export default BoxColor