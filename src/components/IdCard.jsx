const IdCard = (props) => {
    const {lastName, firstName, gender, height, birth, picture} = props

    const heightAsNumber = parseFloat(height)
    
    const formattedDate = (date) => {
    const dateSettings = {weekday:'short', month: 'short', day: 'numeric', year:'numeric'}
    return new Date(date).toLocaleDateString('en-Us', dateSettings)
    }
    

    return (
        
        <div className="id-card ">
            <div className="iamgen">
            <img src={picture} alt="picture"/>
            </div>
        <div className="cardDetails">
        <p>{`First Name: ${firstName}`}</p>
        <p>{`Last Name: ${lastName}`}</p>
        <p>{`Gender : ${gender}`}</p>
        <p>{`Height: ${heightAsNumber} m`}</p>
        <p>{`irth: ${formattedDate(birth)}`}</p>
        </div>

        </div>
        
    )
    }

    export default IdCard