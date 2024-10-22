
function BoxColor(props) {
    const { r, g, b } = props;

    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        color: 'white',
        padding: '20px',
        margin: '10px',
        textAlign: 'center',
        border: '1px solid #000',
        borderRadius: '8px'
    };

    return (
        <div style={divStyle}>
            <p>rgb({r}, {g}, {b})</p>
        </div>
    );
};

export default BoxColor;