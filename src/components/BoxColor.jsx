function BoxColor(props){
let r=props.r
let g =props.g
let b=props.b



    return(

<div style={{

backgroundColor:`rgb(${r},${g},${b})`,
padding:"20px",
textAlign:"center",
border:"1px solid black"


}}>


rgb({r},{g},{b})

</div>

    )
}

export default BoxColor