function BoxColors({r,g,b}) {
    return (
    <>

    <div className="row" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
        <h3>{`rgb(${r},${g},${b})`}</h3>


    </div>
  
  </>
  )
}
export default BoxColors