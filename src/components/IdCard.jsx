
function IdCard(props) {
    const mainDivStyle = {
        border: '1px solid white',
        width: '70vw',
        height: '130px',
        padding: '10px',
        display: 'flex',
        marginBottom: '20px'
    }
    const date = props.birth.toDateString()
    console.log(date)
    return (
        <div style={mainDivStyle}>
            <div>
                <img src={props.picture} alt="" />
            </div>
            <div className="div-card">
                <p>First Name: {props.firstName}</p>
                <p>Last Name: {props.lastName}</p>
                <p>Gender: {props.gender}</p>
                <p>Height: {props.height/100}m</p>
                <p>Birth: {date}</p>
            </div>
        </div>
  )
}

export default IdCard