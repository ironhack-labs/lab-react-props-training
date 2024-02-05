
function IdCard (props) {
return (
    <p>
    First Name: {`${props.idCard.firstName} `} <br />
    Last Name: {`${props.idCard.lastName} `} <br />
    Gender: {`${props.idCard.gender} `} <br />
    height: {`${props.idCard.height} `} <br />
    birth: {`${props.idCard.birth} `} <br />
    picture: <img src={`${props.idCard.picture}`} alt="picture" />

    </p>
    )
}

export default IdCard