function IdCard (props){
  return (
    <div>
      <h3>{props.person.firstName}</h3>
      <h3>{props.person.lastName}</h3>
      <h3>{props.person.gender}</h3> 
      <h3>{props.person.height}</h3> 
      <h3>{props.person.birth}</h3> 
      <h3>{props.person.picture}</h3>
    </div>
  )
}

export default IdCard 