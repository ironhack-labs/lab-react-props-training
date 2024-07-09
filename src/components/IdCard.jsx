function IdCard(props) {
  return (
    <div style={{ border: '1px solid', padding: '1px', margin: '3px'}}>
    <h4>First Name</h4>
      <span>{props.lastName}</span>
      <h4>Last Name</h4>
      <span>{props.firstName}</span>
      <h4>Gender</h4>
      <span>{props.gender}</span>
      <h4>Height</h4>
      <span>{props.height}</span>
      <h4>Date</h4>
      <span>{props.birth.toDateString()}</span>
      <img src= {props.picture}></img>

    </div>
  )
}

export default IdCard
