import "./App.css";
import BoxColor from "./components/BoxColor";
import Greetings from "./components/Greetings";
import IdCard from "./components/IdCard";
import IdInfo from "./components/IdInfo";
import Random from "./components/Random";

function App() {
  return (
    <div className="App">
      <IdInfo />
      <Greetings lang="es">Paco</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
