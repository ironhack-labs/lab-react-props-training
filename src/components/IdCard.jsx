import React from "react";

const cards = [
  {
    lastName: "Doe",
    firstName: "John",
    gender: "male",
    height: 178,
    birth: new Date("1992-07-14"),
    picture: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    lastName: "Delores ",
    firstName: "Obrien",
    gender: "female",
    height: 172,
    birth: new Date("1988-05-11"),
    picture: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];
function IdCard() {
  return (
    <div>
      {cards.map((card) => (
        <div>
          <p>First Name: {card.lastName}</p>
          <p>Last Name: {card.firstName}</p>
          <p>Gender: {card.gender}</p>
          <p>Height: x{card.height}</p>
          <p>Birth: {card.birth.toDateString()}</p>
          <img src={card.picture} />
        </div>
      ))}
    </div>
  );
}

export default IdCard;