
function BoxColor (props) {
    return (
        <div style = {{height: 200, width: 500, backgroundColor: `rgb(${props.r},${props.g},${props.b})`, border: "2px solid black"}}>
            rgb({props.r},{props.g},{props.b})<br></br>
        </div>
    )
}

export default BoxColor