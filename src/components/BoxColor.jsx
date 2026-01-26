
const BoxColor = (props) => {
    const {r, g, b} = props;
    const backgroundColorRGB = `rgb(${r}, ${g}, ${b})`;
    const backgroundColorHex = "#" + convertToHex(r) + convertToHex(g) + convertToHex(b);

    return (
        <div className="BoxColor" style={{ backgroundColor: backgroundColorRGB}}>
            <div>{backgroundColorRGB}</div>
            <div>{backgroundColorHex}</div>
        </div>
    )
}

function convertToHex(val) {
    const hex = parseInt(val).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

export default BoxColor;