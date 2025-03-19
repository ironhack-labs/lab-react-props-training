function Random(props){

    return(
        <div style={{display: "flex", alignContent:"center", padding: "10px", borderStyle: "solid", borderWidth: "3px" , marginBottom: "5px", fontSize: "2rem"}}>
        <p>{Math.floor(Math.random()* (props.max - props.min +1) + props.min)}</p>
        </div>
    )
}

export default Random