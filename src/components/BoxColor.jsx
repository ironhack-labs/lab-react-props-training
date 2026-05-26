
const BoxColor = ({ r, g, b }) => {
    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,   
        color: 'white',
        border: '1px solid black',
        padding: '10px',    
        margin: '10px',
        textAlign: 'center',
        fontSize: '1.5em'
    };
    // how to use CSS in React: https://reactjs.org/docs/dom-elements.html#style
    return (
        <div style={divStyle}>
            <p>RGB({r}, {g}, {b})</p>
        </div>
    );
};

export default BoxColor;