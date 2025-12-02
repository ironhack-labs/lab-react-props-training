function BoxColor({ r, g, b }) {
  const hex = "#"+r.toString(16).padStart(2,"0")+g.toString(16).padStart(2,"0")+b.toString(16).padStart(2,"0")
  return (
    <div className="container box-color" style={{backgroundColor: hex}}>
    {/* // <div className="container box-color" style={{backgroundColor: `rgb(${r},${g},${b})`}}> */}
      <p>rgb({r},{g},{b})</p>
      <p>{hex}</p>
    </div>
  )
}
export default BoxColor