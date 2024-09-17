function BoxColor(props) {
  let r = props.r
  let g = props.g
  let b = props.b
  const componentToHex = (c) => {
    const hex = c.toString(16)
    return hex.length == 1 ? '0' + hex : hex
  }

  const rgbToHex = (r, g, b) => {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
  }
  return (
    <div
      className="container"
      style={{
        backgroundColor: `rgb(${r}, ${g}, ${b}) `,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>
        rgb({r},{g},{b})
      </h1>
    </div>
  )
}

export default BoxColor
