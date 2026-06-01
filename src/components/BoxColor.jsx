function BoxColor({ r, g, b }) {
    return (
        <div
            style={{
                backgroundColor: `rgb(${r}, ${g}, ${b})`,
                border: "1px solid black",
                padding: "20px",
                margin: "10px"
            }}
        >
            rgb({r}, {g}, {b})
        </div>
    );
}

export default BoxColor;