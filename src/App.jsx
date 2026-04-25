import "./App.css";
import IdCards from "./components/IdCards.jsx";
import Greeting from "./components/Greeting.jsx";
import Random from "./components/Random.jsx";
import BoxColor from "./components/BoxColor.jsx";
import CreditCard from "./components/CreditCard.jsx";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCards
        firstName={"First Name: Delores"}
        lastName={"Last Name: Obrien"}
        gender={"Gender: Female"}
        height={`Height: ${172}m`}
        birth={`Birth: ${"1988-05-11"}`}
      />
      <hr />
      <Greeting lang="de"> Ludwig</Greeting> <br />
      <Greeting lang="fr"> François</Greeting> <hr />
      <Random min={1} max={6}>
        Random
      </Random>
      <Random min={1} max={100}>
        Random
      </Random>{" "}
      <hr />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <hr />
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
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
    </div>
  );
}

export default App;
