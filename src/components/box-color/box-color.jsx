
function rgbToHex(r, g, b) {
    return '#' + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase();
  }


function BoxColor ({r = 0, g = 0, b = 0, className=''}) {

    const textColor = Math.round(0.2126 * r + 0.7152 * g + 0.0722 * b) > 128 ? 'black' : 'white';

    return (
        <div className={`border border-black p-4 text-center ${className}`} style={{backgroundColor: `rgb(${r}, ${g}, ${b})`, color:`${textColor}`}}>
            <p className="mb-1">rgb({r}, {g}, {b})</p>
            <p className="mb-0">{rgbToHex(r, g, b)}</p>
        </div>
    );

}

export default BoxColor;