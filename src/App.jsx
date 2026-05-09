import "./App.css";
import BoxColor from "./components/boxColor.jsx";
import Greetings from "./components/greetings.jsx";
import IdCard from "./components/idCard.jsx";
import Random from "./components/random.jsx";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <br />

      <Random min={6} max={20} />
      <Random min={1} max={100} />

      <br />

      <BoxColor r={1} g={222} b={255} />
    </div>
  );
}

export default App;
