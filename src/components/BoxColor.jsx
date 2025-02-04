function BoxColor (props) {
    let sectionStyle = {
        "backgroundColor": `rgb(${props.r}, ${props.g}, ${props.b})`,
        "border": "1px solid black",
        "textAlign": "center",
        "margin": "5px",
        "height": "50px"
        

    }
    return (
        <section style={sectionStyle}>
            rgb({props.r}, {props.g}, {props.b})
            </section>
    )

}

export default BoxColor