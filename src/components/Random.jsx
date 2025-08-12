function Random({min, max}) {
  let randomNumber = Math.floor(Math.random()*(max-min -1)+min+1)
  
    return (
    <div className="row">
    <h3>{`Random value between ${min} and ${max} => ${randomNumber}`}</h3>
    </div>
  )
}
export default Random