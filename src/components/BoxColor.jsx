function BoxColor(props) {

    return (
        <div style={{backgroundColor: `rgb(${props.r},${props.g},${props.b})`, display: "flex", alignContent:"center", padding: "10px", borderStyle: "solid", borderWidth: "3px" , marginBottom: "5px", fontSize: "2rem"}}>
            <p>RGB({props.r},{props.g},{props.b})</p>
        </div>
    )
}


export default BoxColor
