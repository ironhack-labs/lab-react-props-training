import IdCard from "./components/IdCard";
import Greetings from "./components/greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor"
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard className="boxId" />
      <Greetings lang="de" />
      <Random min={1} max={6} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
