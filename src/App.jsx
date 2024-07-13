import "./App.css";
import BoxColor from "./Components/BoxColor";
import IdCard from "./Components/IdCard";
import Random from "./Components/Random";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="Male"
        height="175"
        birth="1990-05-15"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <Random min={1} max={10} />

      <h2>Box Color</h2>
      <BoxColor r={255} g={255} b={0} />
    </div>
  );
}

export default App;
