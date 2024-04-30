import "./App.css";
import BoxColor from "./components/BoxColor.jsx";
import DriverCard from "./components/DriverCard.jsx";
import Greetings from "./components/Greetings.jsx";
import IdCard from "./components/IdCard.jsx";
import Random from "./components/Random.jsx";
import Rating from "./components/Rating.jsx";

function App() {
  return (
    <>
    <h1>IDCARDS:</h1>
      <IdCard lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14").toDateString()}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11").toDateString()}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h1>GREETINGS:</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h1>RANDOM:</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      
      <h1>BOXCOLOR:</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />      

      <h1>RATING:</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      
      <h1>DRIVERCARDS:</h1>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
      />
    </>
  );
}

export default App;