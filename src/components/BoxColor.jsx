function BoxColor(props) {

    return (
        <div style = {{
            backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
            margin: "5px",
            padding: "50px",
            border: "3px solid #000000ff",
            width: "35%",
            fontSize: "60px",
            color: "white",
            textAlign: "center"
        }}>
            <p>rgb: {props.r} {props.g} {props.b} </p>
        </div>
    )

}

export default BoxColor