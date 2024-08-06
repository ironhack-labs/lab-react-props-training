export function BoxColor ({r, g, b}) {
    const boxStyle = {
        color: "white",
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        margin: "2vh",
        border: "1px solid black",
        padding: "1vh",
        textAlign: "center",
    }
    return (
        <div className="box=color" style={boxStyle}>
            rgb ({r},{g},{b})
        </div>
    )
}