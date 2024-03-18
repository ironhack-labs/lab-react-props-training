import "./IdCard.css";

const IdCard = (props) => {
  return (
    <div className="IdCard">
      <div>
        <img src={props.picture} alt="ID picture" />
      </div>
      <div>
        <p>
          <span className="IdKey">First name: </span>
          {props.firstName}
        </p>
        <p>
          <span className="IdKey">Last name: </span>
          {props.lastName}
        </p>
        <p>
          <span className="IdKey">Height: </span>
          {props.height.toString()[0]}m{props.height.toString().slice(1)}
        </p>
        <p>
          <span className="IdKey">Birth: </span>
          {props.birth.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
