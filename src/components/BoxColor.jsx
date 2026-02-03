function BoxColor(props) {
    const boxStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        border: '1px solid black',
        padding: '20px',
        margin: '10px',
        textAlign: 'center'
    };
    return (
        <div style={boxStyle}>
         <p>rgb({props.r}, {props.g}, {props.b})</p>   
        </div>
    );
}


export default BoxColor;