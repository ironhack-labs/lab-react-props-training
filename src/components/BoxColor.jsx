function BoxColor({r,g,b, textColor}) {
  return (
    <div style={{width:"600px", textAlign:"center", color: textColor, border:"1px solid black", padding: "8px", margin: "5px", backgroundColor: `rgb(${r}, ${g}, ${b})`}}>{`rgb(${r}, ${g}, ${b})`}</div>
  )
}
export default BoxColor