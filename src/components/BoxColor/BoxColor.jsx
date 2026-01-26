const BoxColor = (props) => {

    const r = props.r
    const g = props.g
    const b = props.b

    const styleObject = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
    }

    return (
        <p style={styleObject}>rgb{' '}{r}, {g}, {b}{' '}</p>
    )
}

export default BoxColor