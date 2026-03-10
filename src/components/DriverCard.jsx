import Rating from "./Rating"

function DriverCard({name, rating, img, car}) {

    const style = {borderRadius:"50%", 
                   width:"200px", 
                   height:"200px",
                   objectFit: "cover",
                   }

    return(
        <div className="driver-card-container">
            <div style={{display:"flex", alignItems:"center"}}>
                <img src={img} alt="" style={style}/>
                <div style={{color:"white", marginLeft:"20px"}}>
                    <h1>{name}</h1>
                    <Rating>{rating}</Rating>
                    <p style={{fontSize:"1.4rem"}}>{car.model} - {car.licensePlate}</p>
                </div>
            </div>

        </div>
    )
}

export default DriverCard