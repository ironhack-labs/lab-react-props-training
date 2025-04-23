function IdCard(props) {
    return (
    <div className="id-card border p-4 rounded-xl shadow-lg flex gap-4 items-center max-w-md mb-4">
            <p>{props.lastName}</p>
            <p>{props.firstName}</p>
            <p>{props.gender}</p>
            <p>{props.height}</p>
            <p>{props.birth.toDateString()}</p>
            <img src={props.picture}></img>
    </div>
    );
}

  export default IdCard;