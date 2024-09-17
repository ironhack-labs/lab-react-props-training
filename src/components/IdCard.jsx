
function IdCard(props) {

  // adding here props for IdCard
  const { firstName, lastName, gender, height, birth, picture } = props

  return (
    <div className="id-card">

      <div className="id-image">
        <img src={picture} />
      </div>

      <div className="id-info">
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height}</p>
        <p><strong>Birth:</strong> {birth.toDateString()}</p>   
      </div> 

    </div>
  )
}

export default IdCard