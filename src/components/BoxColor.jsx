function BoxColor(props) {
  const r = props.r
  const g = props.g
  const b = props.b

  const divStyle = { backgroundColor: `rgb(${r}, ${g}, ${b})` };

  function componentToHex(c) {
    const hex = c.toString(16)
    return hex.length === 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b){
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

    return (
    <div id="colors" style={divStyle}>
      <h1 class="red">{`rgb(${r}, ${g}, ${b})`}</h1>
      <h1 class="green">{`Hexadecimal ${rgbToHex(r, g, b)}`}</h1>
    </div>
  )
}

export default BoxColor