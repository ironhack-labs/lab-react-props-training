const BoxColor = ({ r, g, b }) => {
    const hexColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    const boxStyle = {
      backgroundColor: hexColor,
      width: '200px',
      height: '100px',
      border: '1px solid black',
      margin: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    };
  
    return <div style={boxStyle}>
      <p>{`rgb(${r}, ${g}, ${b})`}</p>
    </div>;
  };
  
  export default BoxColor;