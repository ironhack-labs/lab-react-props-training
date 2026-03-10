function BoxColor({ r, g, b }) {
  const backgroundColor = `rgb(${r}, ${g}, ${b})`;
  const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

  return (
    <div style={{
      backgroundColor,
      width: '200px',
      height: '100px',
      border: '1px solid black',
      margin: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold'
    }}>
      <p>rgb({r}, {g}, {b})<br />{hex}</p>
    </div>
  );
}

export default BoxColor;