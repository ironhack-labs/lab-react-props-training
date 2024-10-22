

function IdCard(props) {
    const { lastName, firstName, gender, height, birth, picture } = props;  
    
    return (
        <div>

        <p>lastName: {lastName} </p>   
        <p>firstName: {firstName} </p> 
        <p>gender: {gender} </p> 
        <p>height: {height} </p> 
        <p>birth: {birth} </p> 
        <p>picture: {picture} </p>    
            
        </div>
    )
}
export default IdCard;
