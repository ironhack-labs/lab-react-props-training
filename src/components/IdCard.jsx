function IdCard(props) {

    return (
        <div className='IdCard'>
            <img className='IdCard-Picture' src={props.picture} alt="" />
            <div className='IdCard-info'>
                <strong>first name :</strong> {props.firstName} 
                <br />
                <strong>Last name:</strong> {props.lastName}
                <br />
                <strong>Gender:</strong> {props.gender}
                <br />
                <strong>height:</strong> {props.height}
                <br />
                <strong>birth: </strong>{props.birth}
            </div>
        </div>

    );
}

export default IdCard