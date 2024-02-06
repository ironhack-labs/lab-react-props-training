import "./BoxColor.css"

function BoxColor ({r , g , b}) {
   let styles = {backgroundColor:`rgb(${r},${g},${b})`}
   return (
      <div className="box" style={styles}>
         <p>rgb({r} {g} {b})</p>
      </div>
   )
}

export default BoxColor