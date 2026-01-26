import "./App.css";
import Greetings from "./components/Greetings.jsx";
import IdCard from "./components/IdCard.jsx";
import Random from "./components/Random.jsx";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Obrien"
        firstName="Delores"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="es">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

    </div>
  );
}

export default App;
