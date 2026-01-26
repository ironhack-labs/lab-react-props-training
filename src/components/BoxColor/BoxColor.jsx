const BoxColor = (props) => {

    const r = props.r
    const g = props.g
    const b = props.b

    const divColor = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        padding: '20px',
        color: 'white',
        textAlign: 'center',
        fontSize: '1.5em'
    }

    return (
        <div style={divColor}>
            <p>rgb {"("}{r},{g},{b}{")"}</p>
        </div>
    )
}

export default BoxColor