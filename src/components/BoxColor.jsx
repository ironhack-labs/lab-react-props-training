function BoxColor({ r, g, b }) {
    const hexColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  
    return (
      <div
        style={{
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
          padding: '20px',
          margin: '10px 0',
          color: 'white',
          textAlign: 'center',
          border: '1px solid black',
        }}
      >
        <p>rgb({r}, {g}, {b})</p>
        <p>{hexColor}</p>
      </div>
    );
  }
  
  export default BoxColor;
  