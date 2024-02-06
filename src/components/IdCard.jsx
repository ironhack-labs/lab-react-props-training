/*Create and render an IdCard component with 6 props:

lastName: A string
firstName: A string
gender: A string, 'male' or 'female'
height: A number
birth: A date
picture: A string*/

function IdCard(props) {
    const styles = {border : "1px solid black", display : "flex"}
    return (
        <div style={styles}>
            <div>
                <img src={props.picture} width={250} height={250} alt="" />
            </div>
            <div >
            <p> First name: {props.firstName}</p>
            <p> Last name: {props.lastName}</p>
            <p> Gender: {props.gender}</p>
            <p> Height: {props.height}cms</p>
            <p> Birth: {props.birth.toDateString()}</p>
            </div>
         </div>
        
    )
}

export default IdCard