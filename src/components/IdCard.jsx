function IdCard(props) {

    const formattedBirth = props.birth ? props.birth.toDateString() : "";

  return (
    <div className='id-card' style={{
        display:"flex",
        border:"1px solid black",
        padding:"10px",
        margin:"10px 10px 10px 0",
        fontFamily:"sans-serif",
        gap:"15px",
        alignItems:"center"
    }}>
        <img src={props.picture} alt={`${props.firstName} ${props.lastName}`}/>

        <div>
            <p style={{margin:"20px 0"}}><strong>First name:</strong>{props.firstName}</p>
             <p style={{margin:"20px 0"}}><strong>Last name:</strong>{props.lastName}</p>
              <p style={{margin:"20px 0"}}><strong>Gender:</strong>{props.gender}</p>
               <p style={{margin:"20px 0"}}><strong>Height:</strong>{props.height / 100}m</p>
                <p style={{margin:"20px 0"}}><strong>Birth:</strong>{formattedBirth}</p>
        </div>
        </div>
  )
}

export default IdCard;