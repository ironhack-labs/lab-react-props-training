function BoxColor (props) {
    const r = Math.min(255, Math.max(0, props.r));
    const g = Math.min(255, Math.max(0, props.g));
    const b = Math.min(255, Math.max(0, props.b));

    const boxStyle = {
        backgroundColor: `rgb( ${r}, ${g}, ${b} )`,
        padding: '20px',
        margin: '20px 0',
        color: 'white',
        textAlign: 'center',
        border: 'solid black 1px',
    };

    return (
        <div style={boxStyle}>
            <p>
                RGB: {r}, {g}, {b}
            </p>
        </div>
    )
};

export default BoxColor;