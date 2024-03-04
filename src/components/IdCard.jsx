
export const IdCard = (props) => {
  
    const { lastName, firstName, gender,picture ,height, birth} = props;

    return (
    <>
      <div className="card">
            <div className="image">
                <img src={picture} alt="" />
            </div>
            <div className="infoContact">
                <p><b>First name:</b>{firstName}</p>
                <p><b>Last name:</b> {lastName}</p>
                <p><b>Gender:</b> {gender}</p>
                <p><b>Height:</b> {height}</p>
                <p><b>Birth:</b> {birth.toDateString( )}</p>
                
            </div>
      </div>
    </>
  )
}

