import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";


function App() {
  return (
    <div className="container">

      <IdCard
        firstName="John"
        lastName="Doe"
        gender="male"
        height={1.78}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        firstName="Obrien"
        lastName="Delores"
        gender="female"
        height={1.72}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <br />

      <div className="container">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>

      <br />

      <div className="container">
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>

      <br />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

    </div>
  );
}

export default App;