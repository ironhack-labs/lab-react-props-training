import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="en">John</Greetings>
      <Greetings lang="es">Carlos</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} and max={100} />
      <BoxColor r={128} g={255} b={0} />
      <BoxColor r={255} g={0} b={0} />
    </div>
  );
}

export default App;