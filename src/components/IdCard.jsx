function IdCard({idCard}){
    return (
      <div className="id-card">
      <img src={idCard.picture} alt="Id Card"/>
      <div className="id-card-details">
        <p><strong>First name:</strong> {idCard.firstName}</p>
        <p><strong>Last name:</strong> {idCard.lastName}</p> 
        <p><strong>Gender:</strong> {idCard.gender}</p> 
        <p><strong>Height:</strong> {idCard.height}</p> 
        <p><strong>Birth:</strong> {idCard.birth.toLocaleDateString()}</p>
      </div>
    </div>
    )
}

export default IdCard

{/*<
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/> */}