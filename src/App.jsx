import "./App.css";
import IdCards from "./components/IdCards.jsx";
import Greetings from "./components/Greetings.jsx";
import Random from "./components/random.jsx";
import BoxColors from "./components/BoxColors.jsx";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <IdCards
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCards
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">Maël</Greetings>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <BoxColors
        r={Math.floor(Math.random() * 255)}
        g={Math.floor(Math.random() * 255)}
        b={Math.floor(Math.random() * 255)}
      />
      <BoxColors
        r={Math.floor(Math.random() * 255)}
        g={Math.floor(Math.random() * 255)}
        b={Math.floor(Math.random() * 255)}
      />

      <BoxColors
        r={Math.floor(Math.random() * 255)}
        g={Math.floor(Math.random() * 255)}
        b={Math.floor(Math.random() * 255)}
      />
    </div>
  );
}

export default App;
