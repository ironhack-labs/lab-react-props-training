function BoxColor(props) {
    const { r, g, b } = props;
    const style = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: "200px",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    return (
        <div style={style}>
            {`RGB: ${r}, ${g}, ${b}`}
        </div>
    );
}

export default BoxColor;