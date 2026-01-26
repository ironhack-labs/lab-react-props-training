import "./App.css";
import { BoxColor } from "./components/BoxColor";
import { Greeting } from "./components/Greeting";
import { IdCard } from "./components/IdCard";
import { Random } from "./components/Random";

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
      <Greeting lang="de">Ludwig</Greeting>
      <Greeting lang="fr">François</Greeting>
      <Random min="5" max="10" />
      <Random min="5" max="100" />
      <BoxColor r="255" g="50" b="80" />
      <BoxColor r="100" g="255" b="25" />
      <BoxColor r="50" g="10" b="180" />
      <BoxColor r="0" g="51" b="255" />
    </div>
  );
}

export default App;
