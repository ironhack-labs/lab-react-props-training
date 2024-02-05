import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetins";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard
        card={{
          lastName: "Doe",
          firstName: "John",
          gender: "Male",
          height: 178,
          birth: new Date("1992-07-14"),
          picture: "https://randomuser.me/api/portraits/men/44.jpg",
        }}
      />
      <IdCard
        card={{
          lastName: "Delores",
          firstName: "Obrien",
          gender: "Female",
          height: 172,
          birth: new Date("1988-05-11"),
          picture: "https://randomuser.me/api/portraits/women/44.jpg",
        }}
      />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
