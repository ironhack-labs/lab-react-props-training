function BoxColor({ r, g, b }) {
  const rgbToHex = (r, g, b) =>
    '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

  const hex = rgbToHex(r, g, b);
  const textColor = (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000' : '#fff';

  return (
    <div
      className="box-color"
      style={{
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        color: textColor,
        padding: '12px',
        borderRadius: '8px',
        border: '1px solid #000',
        marginBottom: '12px',
        textAlign: 'center',
      }}
    >
      <p>{`rgb(${r}, ${g}, ${b})`}</p>
      <p>{hex}</p>
    </div>
  );
}

export default BoxColor;
