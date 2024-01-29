import "./App.css";
import IdCard from "./components/IdCard.jsx";
import Greeting from "./components/Greetings.jsx";
import Random from "./components/Random.jsx";
import BoxColor from "./components/BoxColor.jsx";

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Obrien"
        firstName="Delores"
        gender="female"
        height="172"
        birth="1988-05-11"
        image="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height="178"
        birth="1992-07-14"
        image="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Greeting lang="de" name="Ludwig" />
      <Greeting lang="fr" name="Jacques" />
      <Greeting lang="en" name="John" />
      <Greeting lang="es" name="Juan" />
      <Random min={1} max={6} />
      <Random min={10} max={22} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
