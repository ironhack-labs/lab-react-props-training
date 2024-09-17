
function BoxColor(props) {
    const {r, g, b} = props
  return (
    <div class = "text-border" style={{backgroundColor: `rgb(${r} , ${g}, ${b})`, textAlign: 'center', fontSize:'30px', color: 'white', height:'100px'}}>
    rgb ({r}, {g}, {b})</div>
  )
}

export default BoxColor
