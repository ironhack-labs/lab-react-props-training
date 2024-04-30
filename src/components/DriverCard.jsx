import Rating from "./Rating"


function DriverCard(props) {
  return (
    <div className="container" style={{backgroundColor:"rgb(60, 67, 177)",borderRadius:"10px",justifyContent:"stretch",alignItems:"center",paddingLeft:"150px",color:"white"}}>
        <img src={props.img} style={{height:"100px",width:"100px",borderRadius:"50px"}}/>
        <div>
            <p>{props.name}</p>
            <Rating>{props.rating}</Rating>
            <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>

    </div>
  )
}

export default DriverCard