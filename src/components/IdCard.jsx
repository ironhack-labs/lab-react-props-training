function IdCard(props){


    return(
        <div style={{ display: 'flex', width: '700px', padding: '5px', marginBottom: '10px', marginLeft: '10px', border: '1px solid black' }}>
            <img style={{width: 'auto',  height: 'auto', objectFit: 'contain' }} src={props.picture} />
            <div className="info-card">
                <p><strong>First name</strong>: {props.firstName}</p>
                <p><strong>Last name</strong>: {props.lastName}</p>
                <p><strong>Gender</strong>: {props.gender}</p>
                <p><strong>Height</strong>: {props.height}</p>
                <p><strong>Birth</strong>: {props.birth.toDateString()}</p>
            </div>
        </div>
    );
}

export default IdCard;