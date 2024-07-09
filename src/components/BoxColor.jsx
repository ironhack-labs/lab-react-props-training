function BoxColor(props) {
    const rgbColor = `rgb(${props.r},${props.g},${props.b})`
    const style = {
    backgroundColor: rgbColor
}

  return (
    <div style={style}>{props.children}</div>
  )
}

export default BoxColor