const BoxColor = (props) => {
    const { r, g, b } = props
    const backgroundColorRGB = `rgb(${r}, ${g}, ${b})`
    
  
    return (
      <div style={{ backgroundColor: backgroundColorRGB }}>
        <div>{backgroundColorRGB}</div>
      </div>
    )
  }
  
  export default BoxColor;