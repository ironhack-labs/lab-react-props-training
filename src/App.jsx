import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="Male"
        height={178}
        birth={new Date("17.02.1995")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Dolores"
        firstName="Obrien"
        gender="Female"
        height={172}
        birth={new Date("17.02.1995")}
        picture={"https://randomuser.me/api/portraits/women/44.jpg"}
      />
      <Greetings lang={"en"}>Noah</Greetings>
      <Greetings lang={"de"}>Noah</Greetings>

      <Random min={1} max={99} />
      <Random min={2} max={88} />
      
    </div>
  );
}
export default App;
