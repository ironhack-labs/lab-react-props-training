function IdCard(props){
    return(

        <div>
            <h3>Last name: {props.lastName}</h3>
            <h3>First name: {props.firstName}</h3>
            <h3>Gender: {props.gender}</h3>
            <h3>Height: {props.height}</h3>
            <h3>Birth: {props.birth.toDateString()}</h3>
            <img src={props.picture} alt="Picture" />
            
        </div>
    )
}
export default IdCard

