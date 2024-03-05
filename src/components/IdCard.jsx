const IdCard = (props) => {
  return (
    <section id="cardSection">
      <img src={props.card.picture} alt="" />
      <div id="cardDiv">
        <p>
          <b>First Name:</b> {props.card.firstName}
        </p>
        <p>
          <b>Last Name:</b> {props.card.lastName}
        </p>
        <p>
          <b>Gender:</b> {props.card.gender}
        </p>
        <p>
          <b>Height:</b> {props.card.height}
        </p>
        <p>
          <b>Birth:</b>{" "}
          {props.card.birth.toLocaleDateString("de-de", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
    </section>
  );
};

export default IdCard;
