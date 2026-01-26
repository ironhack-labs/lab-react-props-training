function BoxColor(props){
    const divStyle ={
        backgroundColor : `rgb(${props.r},${props.g},${props.b})`,
        height : "20vh",
        border:"2px solid black",
        marginBottom: "20px"
    }
return(<>
<div style={divStyle}></div></>)
}

export default BoxColor