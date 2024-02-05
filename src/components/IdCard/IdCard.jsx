// ? styles
import "./IdCard.css";

export default function IdCard({
  lastName,
  firstName,
  gender,
  height,
  birth,
  picture,
}) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayOfWeek = daysOfWeek[birth.getDay()];
  const month = months[birth.getMonth()];
  const day = birth.getDate();
  const year = birth.getFullYear();

  // Форматируем дату в нужный вид
  const formattedDate = `${dayOfWeek} ${month} ${day} ${year}`;

  return (
    <article className="id-card">
      <img
        className="id-card__image"
        src={picture}
        alt={`image of ${lastName}`}
      />
      <div>
        {/* // ? firstName */}
        <p className="id-card__text">
          First Name:{" "}
          <span className="id-card__text_type_value">{firstName}</span>
        </p>
        {/* // ? lastName */}
        <p className="id-card__text">
          Last Name:{" "}
          <span className="id-card__text_type_value">{lastName}</span>
        </p>
        {/* // ? Gender */}
        <p className="id-card__text">
          Gender: <span className="id-card__text_type_value">{gender}</span>
        </p>
        {/* // ? Height */}
        <p className="id-card__text">
          Height:{" "}
          <span className="id-card__text_type_value">{height / 100} m</span>
        </p>
        {/* // ? birth */}
        <p className="id-card__text">
          Birth:{" "}
          <span className="id-card__text_type_value">{formattedDate}</span>
        </p>
      </div>
    </article>
  );
}
