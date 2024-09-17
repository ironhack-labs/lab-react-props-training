
function IdCard(props) {

  // adding here props for IdCard
  const { firstName, lastName, gender, height, birth, picture } = props

  return (
    <div className="id-card">

      <div className="id-image">
        <img src={picture} />
      </div>

      <div className="id-info">
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth.toDateString()}</p>   
      </div> 
      
    </div>
  )
}

export default IdCard