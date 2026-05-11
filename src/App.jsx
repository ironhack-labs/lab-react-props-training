import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";

function App() {
  return (
    <div className="App">
      <h1>LAB | React Training</h1>

      {/* IdCard */}
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores'
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      {/* Greetings */}
      <Greetings lang="de">Maria</Greetings>
      <Greetings lang="en">John</Greetings>
      <Greetings lang="es">Carlos</Greetings>
      <Greetings lang="fr">Sophie</Greetings>

      {/* Random */}
      <Random min={1} max={10} />
      <Random min={50} max={100} />

      {/* BoxColor */}
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={0} g={255} b={0} />
      <BoxColor r={0} g={0} b={255} />
    </div>
  );
}

export default App;