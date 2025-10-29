import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";

function App() {
  return (
    <div className="App">
      <h1>LAB | React Training</h1>

      <IdCard
        lastName="García"
        firstName="Juan"
        gender="masculino"
        height={180}
        birth={new Date("1990-03-15")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Martínez"
        firstName="Ana"
        gender="femenino"
        height={165}
        birth={new Date("1992-08-22")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="es">María</Greetings>
      <Greetings lang="en">John</Greetings>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <BoxColor r={0} g={0} b={255} />
    </div>
  );
}

export default App;
