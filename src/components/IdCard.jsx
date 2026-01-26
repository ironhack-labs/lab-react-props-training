function IdCard (props) {
        return (
            <div className="idcard">
                
                <img src={props.picture}/>
                
                <div>
                    <p><strong>Last Name: </strong>{props.lastName}</p>
                    <p><strong>Firs Name: </strong>{props.firstName}</p>
                    <p><strong>Gender: </strong>{props.gender}</p>
                    <p><strong>Height: </strong>{props.height} m</p>
                    <p><strong>Birth: </strong>{new Date(props.birth).toDateString()}</p>
                </div>
                
            </div>
        )
}

export default IdCard;







