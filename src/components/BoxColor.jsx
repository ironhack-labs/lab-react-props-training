function BoxColor(props){
    const divStyle = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`
    }

    const toHexString = (str) => str.toString(16).padStart(2,0)

    const hexStringR = toHexString(props.r)
    const hexStringG = toHexString(props.g)
    const hexStringB = toHexString(props.b)

    return (
        <div style={divStyle}> 
            {`#${hexStringR}${hexStringG}${hexStringB}`}
        </div>
    )
}

export default BoxColor