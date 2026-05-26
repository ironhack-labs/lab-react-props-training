export function IdCard(props) {
    const day = props.birth.getDate();
    const month = props.birth.getMonth();
    const year = props.birth.getYear();

    return (
        <section className="id-card container">
        <div className="image-container">
            <img src={props.picture} />
        </div>
        <div className="info-container">
            <h2>First name: {props.firstName}</h2>
            <h2>Last name: {props.lastName}</h2>
            <h2>Gender: {props.gender}</h2>
            <h2>Height: {props.height}</h2>
            <h2>Birth: {`${day}/${month}/${year}`}</h2>
        </div>
        </section>
    )
}