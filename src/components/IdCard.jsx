import "./IdCard.css"

function IdCard ({lastName, firstName, gender, height, birth, picture}){
  return (
  <div className="idCard">
    <img src={picture}></img>
    <div>
      <div>
        <strong>First Name: </strong> {firstName}
      </div>
      <div>
        <strong>Last Name: </strong> {lastName}
      </div>
      <div>
        <strong>Gender: </strong> {gender}
      </div>
      <div>
        <strong>Height: </strong> {height}
      </div>
      <div>
        <strong>Birth: </strong> {birth.toDateString()}
      </div>
    </div>
  </div>
  )
}

export default IdCard