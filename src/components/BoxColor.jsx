function BoxColor (props) {
    
    const styleDiv = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        color: 'white'
    }

    return (
        <div className="box-color" style={styleDiv}>
           <p>rgb({props.r}, {props.g}, {props.b})</p>
           <p>hexcolor</p>
        </div>
    )
}

export default BoxColor;