
function BoxColor( {r, g, b} ) {
    return (
        <div 
        className="border border-black border-2 mb-2 p-4 text-center w-75"
        style={{backgroundColor: rgbToHex(r, g, b)}}>
            <div style={{color: getContrastingTextColor(r, g, b)}}>{`rgb(${r},${g},${b})`}</div>
            <div style={{color: getContrastingTextColor(r, g, b)}}>{rgbToHex(r, g, b)}</div>
        </div>
    );
}

function rgbToHex(r, g, b) {
    return "#" + 
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0");
}

function getContrastingTextColor(r, g, b) {
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b);

    return luminance > 186 ? "#000000" : "#FFFFFF";
}

export default BoxColor;