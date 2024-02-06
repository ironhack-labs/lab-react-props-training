import "./BoxColor.css"

function BoxColor ({r, g, b}) {
  //let newColor = {r, g, b}
  // const styles = {backgroundColor : } 
   return (
    <div className="box" style = {{backgroundColor: `rgb(${r},${g},${b}) ` }}>
       <p>{r} {g} {b}</p> 
    </div>
   )
}

export default BoxColor