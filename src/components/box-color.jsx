function BoxColor (props) {
    let divStyle = {
        color: "white",
        backgroundColor: `rgb(${props.r} ${props.g} ${props.b})`
        }
    return <div style={divStyle} className="color"> rgb({props.r}, {props.g}, {props.b})</div>
}

export default BoxColor