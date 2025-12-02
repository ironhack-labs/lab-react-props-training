function Random(props) {
    
    return (
        <div className="Random" style={{ border: "3px solid #000000ff", padding: "1px", margin: "6px", width: "35%" }}>

            <p style={{ fontFamily: "Verdana", fontSize: "24px", margin: "6px" }}>Random value between {props.min} and {props.max} = {Math.floor(Math.random() * (props.max - props.min + 1) + props.min)}</p>

        </div>


    )
}

export default Random
