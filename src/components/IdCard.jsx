function IdCard(props) {
    const styles = {backgroundColor : "green", display: "flex"}
    return (
       
        <div style={styles}>
            <div>
                <img src={props.picture} alt="" />
            </div>
            <div>
                <p>First Name: {props.firstName}</p>
                <p>Last name: {props.lastName}</p>
            </div>
        </div>
    )
}

export default IdCard