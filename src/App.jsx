import "./App.css";
import BoxColor from "./components/BoxColor";
import Greetings from "./components/Greetings";
import IdCard from "./components/IdCard";

function App() {
  return (
    <div className="App">
      <IdCard 
        lastName="Doe"
        firstName="Jhon"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard 
        lastName="Delores"
        firstName="Obrien"
        gender="famale"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
  />

      <Greetings lang="de"></Greetings>
      <Greetings lang="fr"></Greetings>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
