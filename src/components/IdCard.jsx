function IdCard(props) {



  return (

<div key={props.lastName}>
  <h4>{props.lastName}</h4>
  <h4>{props.firstName}</h4>
  <h4>{props.gender}</h4>
  <h4>{props.height}</h4>
  <h4>{props.birth.toDateString()}</h4>
  <img src={props.picture}></img>
</div>


  )
}

export default IdCard