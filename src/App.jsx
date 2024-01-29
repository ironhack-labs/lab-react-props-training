import "./App.css";
import IdCard from "./components/IdCard/IdCard";
import Greetings from "./components/IdCard/Greetings/Greetings";
import Random from "./components/IdCard/Random/Random";
import BoxColor from "./BoxColor/BoxColor";

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>

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

      <h2>Greetings</h2>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h2>Random</h2>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h2>Box Color</h2>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
