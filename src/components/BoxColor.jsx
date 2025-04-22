function BoxColor (props) {

    const divStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
    }

    return (
        <div style = {divStyle} className="box"></div>
    )
}

export default BoxColor