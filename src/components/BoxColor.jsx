function BoxColor({ r, g, b }) {

  const toHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex
  }

  const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`

  // // alternative function syntax =>
  // function BoxColor({ r, g, b }) {
  //   const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  // }

  const style = {
    backgroundColor: `rgb(${r},${g},${b})`,
    padding: '10px',
    marginTop: '10px',
    border: '1px solid black',
    borderRadius: 10
  }


  return (
    <div style={style}>
      <p>rgb({r},{g},{b})</p>
      <p>{hexColor}</p>
    </div>
  )
}

export default BoxColor