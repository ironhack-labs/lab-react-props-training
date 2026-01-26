function BoxColor(props) {

  let backgroundColor = `rgb(${props.r}, ${props.g}, ${props.b})`;

  return (
    <div className="box" style={{backgroundColor: backgroundColor}}>
    </div>
  )
}

export default BoxColor