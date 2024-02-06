import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/random";
import BoxColor from "./components/Boxcolor";

function App() {
  return (
    <div>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14").toDateString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11").toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="de">klaus</Greetings>
      <Greetings lang="fr">mane</Greetings>
      <Greetings lang="es">carlos</Greetings>
      <Greetings lang="en">john</Greetings>

      <h2>Random</h2>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h2>BoxColor</h2>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
