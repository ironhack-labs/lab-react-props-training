function BoxColor(props) {


  const rgbCodes = `rgb( ${props.r},${props.g}, ${props.b})`;
  
  let hexText = rgbToHex(props.r,props.g,props.b);

  const divStyle = {
    borderStyle:'solid',
    borderColor:'black',
    backgroundColor: rgbCodes,
    color: pickTextColorBasedOnBgColorSimple(hexText, '#FFFFFF', '#000000'),
    textAlign : 'center',
    padding:'10px', 
    margin:'10px'
  };
  
  return (
     
      <div style={divStyle}> 
        <p>{rgbCodes}</p>
        <p>{hexText}</p>
      </div>
    
  );
}


function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}



function pickTextColorBasedOnBgColorSimple(bgColor, lightColor, darkColor) {
  var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
  var r = parseInt(color.substring(0, 2), 16); // hexToR
  var g = parseInt(color.substring(2, 4), 16); // hexToG
  var b = parseInt(color.substring(4, 6), 16); // hexToB
  return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
    darkColor : lightColor;
}
export default BoxColor;
