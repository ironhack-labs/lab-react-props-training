
function IdCard(props) {
  return (
    <div>
    <h5>lastName:  <span>{props.lastName}</span></h5>
    <h5>firstName: <span>{props.firstName}</span> </h5>
    <h5>gender:  <span>{props.gender}</span> </h5>
    <h5>height: <span>{props.height}</span></h5>
    <h5>birth: <span>{props.birth.toDateString()}</span> </h5>
<img src={props.picture}alt="" />
  </div>
  )
}
export default IdCard
