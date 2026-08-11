function BoxColor({ r, g, b }) {
  const styles = { backgroundColor: `rgb(${r}, ${g}, ${b})` };

  return (
    <div className="box-color" style={styles}>
      <h4>rgb({r}, {g}, {b})</h4>
    </div>
  );
}

export default BoxColor;