function Greetings(props) {
    return (
        <div className="Greetings">
            <p>
                {props.lan} {props.firstName}
            </p>
        </div>
    )
}

export default Greetings;