function BoxColor(props) {

    const boxStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        justifyContent: "center"
    }

    return(
        <div className="card" style={boxStyle}>
            <p>rgb({props.r}, {props.g}, {props.b})</p>
        </div>
    );
}

export default BoxColor;