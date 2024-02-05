function IdCard(props) {
    const date = props.birth

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return(
        <div className="box">
            <img src={props.picture}/>
            <div>
            <p><b>First name:</b> {props.firstName}</p>
            <p><b>Last name:</b> {props.lastName}</p>
            <p><b>Gender:</b> {props.gender}</p>
            <p><b>Height:</b> {props.height}</p>
            <p><b>Birthday:</b> {`${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`}</p>
            </div>
        </div>
    );
}

export default IdCard;