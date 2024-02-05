function IdCard(props) {
    console.log(props)
    return ( 
        <div id="id-card">
            <img src={props.picture} alt="picture" />
            <div id="info">
                <p><b>First name:</b> {props.firstName}<br/>
                <b>Last name:</b> {props.lastName}<br/>
                <b>Gender:</b> {props.gender}<br/>
                <b>Height:</b> {props.height}<br/>
                <b>Birth:</b> {props.birth.toString().slice(0, 15)}</p>
            </div>
        </div>
    )
}

export default IdCard;