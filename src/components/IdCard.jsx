 function IdCard(props){
            return <div className="id-card">
            <img src={props.picture}/>
            <div className = "info">
                <p><b>First name:</b> {props.firstName}</p>
                <p><b>Last name:</b> {props.lastName}</p>
                <p><b>Gender:</b> {props.gender}</p>
                <p><b>Height:</b> {props.height} cm</p>
                <p><b>Birth:</b>{""}
                {props.birth.toLocaleDateString("en-US", {
                    weekDay: 'short',
                    month : 'short',
                    day: 'numeric',
                    year: 'numeric',
                })}
                </p>
                </div>
                </div>
            }
            export default IdCard;