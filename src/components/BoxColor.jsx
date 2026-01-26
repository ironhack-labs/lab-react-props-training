

function BoxColor(props) {

    const bgColor = `rgb(${props.r}, ${props.g}, ${props.b})`;


    const boxStyle = {
        backgroundColor: bgColor,
        border: "1px solid black",
        padding: "20px",
        margin: "10px 0",
        textAlign: "center",
        color: "black",
    };

    return (
        <div style={boxStyle}>
            {bgColor}
        </div>
    );
}       

export default BoxColor;