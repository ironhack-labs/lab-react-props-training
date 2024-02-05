function BoxColor(props) {
    const rgb = `rgb(${props.r}, ${props.g}, ${props.b})`


    return (
        <div className="BoxColor" style={{backgroundColor: rgb}}>
            {rgb}
        </div>
    )
}

export default BoxColor