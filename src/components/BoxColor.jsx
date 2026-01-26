import "../css/boxcolor.css"

function BoxColor(props){
    
    const rgbValue = `rgb(${props.r},${props.g},${props.b})`

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
      
      function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }
      
      const hexValue = rgbToHex(props.r, props.g, props.b)
    // const randomStyle = {
    //     backgroundColor: `{randomNumber}`
    // }

    return (
        <div className="boxcolor" style={{backgroundColor: rgbValue}}>
            <p>{rgbValue} </p>
            <p>{hexValue}</p>
        </div>
    )

}

export default BoxColor