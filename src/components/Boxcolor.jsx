function Boxcolor(props) {
    const {r, g, b} = props;
    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }
    return (
        <div style={divStyle}></div>
    )
}

export default Boxcolor