function BoxColor({ r, g, b }) {

  const hex = "#" +
              r.toString(16).padStart(2, "0") +
              g.toString(16).padStart(2, "0") +
              b.toString(16).padStart(2, "0")

  const style = {backgroundColor: `rgb(${r},${g},${b})`,
                padding: "10px",
                border: "1px solid black",
                textAlign: "center"}

  return (
    <div style={style}>
      <p>rgb({r},{g},{b})</p>
      <p>{hex}</p>
    </div>
  )
}

export default BoxColor