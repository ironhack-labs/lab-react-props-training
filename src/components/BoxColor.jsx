

function BoxColor(props) {
    const { r, g, b } = props;
    const divStyle = {
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
      border: '1px solid black',
    };
    
    return (
        <div style={divStyle}>
          rgb({r}, {g}, {b})
        </div>
      );
    }
    
export default BoxColor;
