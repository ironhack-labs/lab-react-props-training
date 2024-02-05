const BoxColor = (props) => {

    const r = props.r
    const g = props.g
    const b = props.b

    const styleObject = {
        backgroundColor: `rgb( ${r}, ${g}, ${b})`,
        color: 'white'
    }

    return (
        <div className="Rectangle" style={styleObject} >
            <p>rgb {'('} {r}, {g}, {b} {')'}</p>
        </div>

    )

}
export default BoxColor