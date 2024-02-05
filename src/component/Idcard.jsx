function IdCard(props){
    return (
        <h3 class = "containor" >
            <img src = {props.person.picture}/>
            LastName: {props.person.lastName}, <br/>
            FirstName: {props.person.firstName}, <br/>
            Gender: {props.person.gender}, <br/>
            Height: {props.person.height}, <br/>
            Birth: {props.person.birth} <br/>
            
        </h3>
    )
}

export default IdCard ;