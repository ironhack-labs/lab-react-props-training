const BoxColor = ({ r, g, b }) => {
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width:'400px',
    padding: '50px',
    margin: '50px',
    textAlign: 'center',
    border: '3px black solid'
  };

  return (
    <>
      <div style={divStyle}>rgb({r},{g},{b})</div>
    </>
  );
};

export default BoxColor;
