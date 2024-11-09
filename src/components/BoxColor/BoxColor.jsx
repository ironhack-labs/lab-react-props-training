import "./BoxColor.css"

function rgbToHex(r, g, b) {
    return '#' + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase();
  }


function getContrastColor(r, g, b) {
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luminance > 128 ? 'black' : 'white';
}


function BoxColor ({r, g, b}) {

    const boxStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
    }

    const hexColor = rgbToHex(r, g, b);

    const textColor = getContrastColor(r, g, b);

    return (
        <div className="box" style={boxStyle}>
            <p className={textColor}>rgb({r}, {g}, {b})<br />{hexColor}</p>
        </div>
    );

}

export default BoxColor;