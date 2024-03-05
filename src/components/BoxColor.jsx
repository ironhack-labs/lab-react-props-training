const BoxColor = ({ r, g, b }) => {
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width:'400px',
    padding: '50px',
    margin: '50px',
    textAlign: 'center',
    border: '3px black solid'
  };
  const convertToHex = (r , g , b) => {
    return val.toString(16).length === 1 ? '0' + hex : hex;
  }
  return (
    <>
      <div style={divStyle}>rgb({r},{g},{b}), {convertToHex}</div>
    </>
  );
};

export default BoxColor;
