import "./App.css";
import "./components/IdCard";
import IdCard from "./components/IdCard";
import Greetings from "./components/greetings";
import Random from "./components/Random";
import BoxColor from "./components/Boxcolor";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <h1>IdCards</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={255} g={0} b={0} /> {/* Red */}
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
