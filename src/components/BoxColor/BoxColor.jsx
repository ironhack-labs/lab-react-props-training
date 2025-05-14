function BoxColor(props) {
    const {r, g, b} = props;

    const rgbColor = `rgb(${r},${g},${b})`;
    
    const boxColorStyle = {
        backgroundColor: rgbColor,
        color: "black",
        padding: "20px",
        border: "1px solid black",
        marginBottom: "12px",
        textAlign: "center"
    }

    return (
        <div style={boxColorStyle}>
            {rgbColor}
        </div>
    )
}

export default BoxColor;