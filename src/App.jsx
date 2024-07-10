import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";

function App() {
  return (
    <div className="App">
      <IdCard 
      lastName='Doe'
      firstName='John'
      gender='male'
      height={178}
      birth={new Date("1992-07-14").toDateString()}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <Greetings lang = "en">Jhon</Greetings>
      <Greetings lang = "es">Patricia</Greetings>

      <Random min = {1} max = {6}/>
      <Random min={1} max={100}/>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
