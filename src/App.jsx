import BoxColor from "./components/box-color/box-color";
import CreditCard from "./components/credit-card/credit-card";
import DriverCard from "./components/driver-card/driver-card";
import Greetings from "./components/greetings/greetings";
import IdCard from "./components/id-card/idCard";
import Random from "./components/random/random";
import Rating from "./components/rating/rating";

function App() {
  return (
    <div className="container py-5">
      <IdCard
        className="mb-2"
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings className="mb-2">Carlos</Greetings>
      <Greetings lang="fr">Juli</Greetings>
      <Random className="mb-2" min={3} max={20} />
      <Random className="mb-2" min={5} max={6} />
      <Random className="mb-2" min={3} max={20} />

      <BoxColor className="mb-2" r={250} g={0} b={0} />
      <BoxColor className="mb-2" r={0} g={250} b={0} />
      <BoxColor className="mb-2" r={0} g={0} b={255} />
      <CreditCard
        className="mb-1"
        card={{
          type: "Visa",
          number: "0123456789016984",
          expirationMonth: 12,
          expirationYear: 2019,
          bank: "Name of the Bank",
          owner: "Firstname Lastname",
        }}
        bgColor="#ddbb55"
        color="white"
      />
      <CreditCard
        className="mb-1"
        card={{
          type: "Master Card",
          number: "0123456789010995",
          expirationMonth: 3,
          expirationYear: 2021,
          bank: "N26",
          owner: "Maxence Bouret",
        }}
        bgColor="#eeeeee"
        color="#222222"
      />
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <DriverCard
        className="mb-2"
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />

      <DriverCard
        className="mb-2"
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
      />
    </div>

  );
}

export default App;
