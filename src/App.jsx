import "./App.css";
import Greetings from "./components/Greetings";
import IdCard from "./components/IdCard";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";

const people = [
  {
    id: 1,
    lastName: "Doe",
    firstName: "John",
    gender: "male",
    height: 178,
    birth: new Date("1992-07-14"),
    picture: `https://randomuser.me/api/portraits/men/44.jpg`,
  },
  {
    id: 2,
    lastName: "Obrien",
    firstName: "Delores",
    gender: "female",
    height: 172,
    birth: new Date("1988-05-11"),
    picture: `https://randomuser.me/api/portraits/women/44.jpg`,
  },
];

const creditCards = [
  {
    type: "Visa",
    number: "0123456789018845",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "BNP",
    owner: "Maxence Bouret",
    bgColor: "#11aa99",
    color: "white",
  },
  {
    type: "Master Card",
    number: "0123456789010995",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "N26",
    owner: "Maxence Bouret",
    bgColor: "#eeeeee",
    color: "#222222",
  },
  {
    type: "Visa",
    number: "0123456789016984",
    expirationMonth: 12,
    expirationYear: 2019,
    bank: "Name of the Bank",
    owner: "Firstname Lastname",
    bgColor: "#ddbb55",
    color: "white",
  },
];

const drivers = [
  {
    name: "Travis Kalanick",
    rating: 4.2,
    img: "https://picsum.photos/150",
    car: {
      model: "Toyota Corolla Altis",
      licensePlate: "CO42DE",
    },
  },
  {
    name: "Dara Khosrowshahi",
    rating: 4.9,
    img: "https://picsum.photos/150",
    car: {
      model: "Audi A3",
      licensePlate: "BE33ER",
    },
  },
];

const App = () => {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <ul className="idCards">
        {people.map((person) => (
          <IdCard
            key={person.id}
            lastName={person.lastName}
            firstName={person.firstName}
            gender={person.gender}
            height={person.height}
            birth={person.birth}
            picture={person.picture}
          />
        ))}
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <Random min={1} max={6} />
        <Random min={1} max={100} />

        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        {creditCards.map((creditCard, index) => (
          <CreditCard
            key={index}
            type={creditCard.type}
            number={creditCard.number}
            expirationMonth={creditCard.expirationMonth}
            expirationYear={creditCard.expirationYear}
            bank={creditCard.bank}
            owner={creditCard.owner}
            bgColor={creditCard.bgColor}
            color={creditCard.color}
          />
        ))}
        <Rating rating={0} />
        <Rating rating={1.49} />
        <Rating rating={1.5} />
        <Rating rating={3} />
        <Rating rating={4} />
        <Rating rating={5} />

        {drivers.map((driver, index) => (
          <DriverCard
            key={index}
            name={driver.name}
            rating={driver.rating}
            img={driver.img}
            car={driver.car}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
