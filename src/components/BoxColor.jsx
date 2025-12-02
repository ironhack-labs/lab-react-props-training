function BoxColor({ r, g, b }) {
    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        border: "1px solid black",
        heigth: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "10px",
    };

    const toHex = (value) => value.toString(16).padStart(2, "0");
    const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

    return (
        <div style={divStyle}>
            rgb({r}, {g}, {b}) {hexColor}
        </div>
    );
}
export default BoxColor;