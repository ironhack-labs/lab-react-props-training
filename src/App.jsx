import "./App.css";
import ShowIdCard from "./components/ShowIdCard.jsx";
import Greetings from "./components/Greetings.jsx";
import Random from "./components/Random.jsx";
import BoxColor from "./components/BoxColor.jsx";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <ShowIdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
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
