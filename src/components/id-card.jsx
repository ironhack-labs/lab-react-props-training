import "./id-card.css"

function IdCard({ firstName, lastName, gender, height, birth, picture}) {
  return (
    <><article className="box">
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <div className="data">
        <p><strong>First name:</strong> <span>{firstName}</span></p>
        <p><strong>Last name:</strong><span>{lastName}</span></p>
        <p><strong>Gender:</strong><span>{gender}</span></p>
        <p><strong>Height:</strong><span>{height}</span></p>
        <p><strong>Birth:</strong><span>{birth.toDateString()}</span></p>
      </div>
    </article></>
  )
}

export default IdCard