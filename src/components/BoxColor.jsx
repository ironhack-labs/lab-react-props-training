const BoxColor = ({r, g, b}) => {
    const boxColor ={backgroundColor : `rgb(${r}${g}${b})`} 
  return (
    <div className="boxColor" style={boxColor}>rgb({r},{g},{b})</div>
  )
}

export default BoxColor