function BoxColor (r, g, b) {

    const boxStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
      };

    return (
    <div style={boxStyle} className="BoxColor">
      <p>{`rgb(${r}, ${g}, ${b})`}</p>
    </div>
  );
}


export default BoxColor; 