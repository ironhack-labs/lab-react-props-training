function BoxColor(props) {
  const { r, g, b } = props;

  const style = {
    width: '200px',
    height: '100px',
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    textAlign: 'center',
    lineHeight: '100px',
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div className="box-color" style={style}>
      rgb({r}, {g}, {b})
    </div>
  );
}

export default BoxColor;
