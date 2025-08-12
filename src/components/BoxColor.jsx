function BoxColor({r,g,b, color}) {
    let colorRgb = `rgb(${r},${g},${b})`
  return (
    <div className="card color-card" style={{backgroundColor:colorRgb, color:color}}>
        {colorRgb}
        <br />
        {rgbToHex(r,g,b)}
    </div>
  )
}
export default BoxColor

function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map(x => x.toString(16).padStart(2, "0"))
      .join("")
  );
}