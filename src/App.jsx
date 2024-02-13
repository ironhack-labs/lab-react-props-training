import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard
        lastName={"Doe"}
        name={"John"}
        gender={"male"}
        height={178}
        birth={new Date("1992-07-14")}
        image={"https://randomuser.me/api/portraits/men/44.jpg"}
      />
      <IdCard
        lastName={"Delores"}
        name={"Obrien"}
        gender={"female"}
        height={172}
        birth={new Date("1988-05-11")}
        image={"https://randomuser.me/api/portraits/women/44.jpg"}
      />
      <Greetings lang={"de"}>Ludwig</Greetings>
      <Greetings lang={"fr"}>François</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
