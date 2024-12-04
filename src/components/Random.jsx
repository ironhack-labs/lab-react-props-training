function Random (props) {
    const randomNum = Math.floor(Math.random() * (props.max - props.min) + props.min)
    return (
        <div style={{border: "1px solid gray", padding: "10px", margin: "10px", borderRadius: "5px", width: "20%", background: "lightgray"}}>
            <p>numero entre {props.min} y {props.max} es {randomNum} </p>
        </div>
    )

}

export default Random