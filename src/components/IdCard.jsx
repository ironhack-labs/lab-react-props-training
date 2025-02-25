function IdCard (props) {

    return (
        <div style={{display: "flex", alignContent:"center", padding: "10px", borderStyle: "solid", borderWidth: "3px" , marginBottom: "5px"}}>
            <div>
                 <img src={props.picture} alt="foto" />
            </div>
            <div style={{marginLeft: "5px"}}>
                <p>First Name: {props.firstName}</p>
                <p>Last Name: {props.lastName}</p>
                <p>Gender: {props.gender}</p>
                <p>Height: {props.height}</p>
                <p>Birth: {props.birth.toDateString()}</p>
            </div>
           
        </div>
    )


}

export default IdCard
