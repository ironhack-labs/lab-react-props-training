import "./App.css";
import IdCard from "./components/IdCard/IdCard.jsx";
import Greetings from "./components/Greetings/Greetings.jsx";
import Random from "./components/Random/Random.jsx";
import BoxColor from "./components/BoxColor/BoxColor.jsx";
import CreditCard from "./components/CreditCard/CreditCard.jsx";
import Ratings from "./components/Ratings/Ratings.jsx";
import DriverCard from "./components/DriverCard/DriverCard.jsx";

function App() {
  return (
    <div>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="es">Carmina</Greetings>
      <Random min={1} max={6} />
      <Random min={7} max={100} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />

      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />

      <Ratings>0</Ratings>
      <Ratings>1.49</Ratings>
      <Ratings>1.5</Ratings>
      <Ratings>3</Ratings>
      <Ratings>4</Ratings>
      <Ratings>5</Ratings>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE",
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER",
        }}
      />
    </div>
  );
}

export default App;
