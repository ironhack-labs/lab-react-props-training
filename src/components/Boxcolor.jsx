function BoxColor({ r, g, b }) {
  const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

  return (
    <div
      style={{
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: '150px',
        height: '150px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10px',
        borderRadius: '8px',
        color: (r + g + b) > 382 ? '#000' : '#fff',
        fontWeight: 'bold',
        fontSize: '14px'
      }}
    >
      {hex}
    </div>
  );
}

export default BoxColor;