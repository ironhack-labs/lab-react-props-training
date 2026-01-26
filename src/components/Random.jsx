function Random({min, max}) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min
  return (
    <div className="card">
        <p>Random value between{min} and {max} ={`>`} {num}</p>
    </div>
  )
}
export default Random