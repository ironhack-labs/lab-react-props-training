function BoxColor({ r, g, b }) {
const divStyle ={
    bachgroundColor: `rgb(${r}, ${g}, ${b})`,
    color: 'black',
    padding: '20px',
    margin: '10px 0',
    border: '1px solid #ccc'
};

    return (
    <div style={divStyle}>
        rgb({r}, {g}, {b})
    </div>
    );
}
    

export default BoxColor;