
function IdCard(props){
    return (
        <h3>
  <p>Last Name:{props.personOne.lastName}</p>
  <p>First Name:{props.personOne.firstName}</p>
  <p>Gender:{props.personOne.gender}</p>
  <p>Height:{props.personOne.height}</p>
  <p>Birth:{props.personOne.birth}</p>
  <p><img src= {props.personOne.picture}></img></p>
        </h3>
        )
}


export default IdCard