function BoxColor(props) {

  const rbgColor = `rgb(${props.r}, ${props.g}, ${props.b})`
    
    return(
<div style= {{
backgroundColor: rbgColor,
width: "100%",
height: "100%",
border: "1px solid black"
}}
>
    rgb({props.r}, {props.g}, {props.b})
</div>
    )
}

export default BoxColor