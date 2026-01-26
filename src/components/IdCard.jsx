export default function IdCard(props){
    return(
        <div className="idCard">
            <img src={props.picture} alt=""/>
            <div>
                <p>LasName:{props.lastName}</p>
                <p>firstName:{props.firstName}</p>
                <p>gender:{props.gender}</p>
                <p>height:{props.height}</p>
                <p>birth:{props.birth.toDateString()}</p> 
            </div>
            
            
        </div>
    )
}