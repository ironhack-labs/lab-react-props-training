function IdCard(props) {
  return (
    <>
      <section className="id">
        <div className="image">
          <img src={props.picture} />
        </div>
        <div className="info">
          <h1>
            First name: <span>{props.firstName}</span>
          </h1>
          <h1>

            Last name: <span>{props.lastName}</span>
          </h1>
          <h1>

            gender: <span>{props.gender}</span>
          </h1>
          <h1>

            height: <span>{props.height} </span>
          </h1>
          <h1>

            birth: <span>{props.birth.toDateString()}</span>
          </h1>
        </div>
      </section>
    </>
  );
}
export default IdCard;
