
function BoxColor({r, g, b}){

    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px 0",
        padding: "40px"
    }

    return <div className="color-box" style={divStyle}>{divStyle.backgroundColor}</div>

}

export default BoxColor