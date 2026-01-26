
function rgbToHex(r, g, b) {
    
    function toHex(c) {
        const hex = c.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    }

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function BoxColor({className='', r = 0, g = 0, b = 0}) {
    const textColor = Math.round((r * 299 + g * 587 + b * 114) / 1000) > 125 ? 'black' : 'white';
    return(
        <div className={`${className} border border-black p-4 text-center`} style={{ 
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            color: textColor
            }}>
            <p className="m-1">rgb({r}, {g}, {b})</p>
            <p className="m-0">{rgbToHex(r, g, b)}</p>
        </div>
    );
}

export default BoxColor;