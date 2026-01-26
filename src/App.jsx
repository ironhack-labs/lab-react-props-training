import "./App.css";
import BoxColor from "./components/BoxColor";
import Greetings from "./components/Greetings";
import IdCard from "./components/IdCard";
import Random from "./components/Random";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <IdCard
        picture="https://dummyimage.com/182x268/ffffff/000000"
        lastName="Doe"
        firstName="John"
        gender="Male"
        height={178}
        birth={new Date("1992-07-14")}
      />

      <IdCard
        picture="https://dummyimage.com/182x268/ffffff/000000"
        //picture = {<img src="../assets" alt="Profile" />}
        lastName="Smith"
        firstName="Julia"
        gender="Female"
        height={170}
        birth={new Date("1985-03-04")}
      />

      <Greetings lang="fr">Julia</Greetings>
      <Random min={1} max={20} />
      <Random min={1} max={100} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
