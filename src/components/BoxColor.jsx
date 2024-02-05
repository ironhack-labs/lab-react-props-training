function BoxColor(props) {
    return (
        <div  >
            <p style={{width: "300px", 
            height: "100px", 
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            background: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
                rgb ({props.r}, {props.g}, {props.b})
            </p>
        </div>
    )
}

export default BoxColor;
// como hacer un rectangulo con css?