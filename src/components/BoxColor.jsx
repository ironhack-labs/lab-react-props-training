function BoxColor (props) {
    const styling = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        color: 'white',
    }
    
    return (
        <div className='box' style={styling}> rgb({props.r}, {props.g}, {props.b}) </div>
    )
    
    
}

export default BoxColor;