import "./App.css";
import IdCard from "./components/IdCard/IdCard";
import Greetings from "./components/Greetings/Greetings";
import Random from './components/Random/Random'
import BoxColor from "./components/BoxColor/BoxColor";

function App() {
  return (
    <div className="App">

      <h1> LAB | React Training</h1>

      <IdCard
        firstName={'John'}
        lastName={'Doe'}
        gender={'male'}
        height={178}
        birth={new Date("1992-07-14")}
        picture={"https://randomuser.me/api/portraits/men/44.jpg"}
      />

      <IdCard
        firstName={'Delores'}
        lastName={'Obrien'}
        gender={'female'}
        height={172}
        birth={new Date("1988-05-11")}
        picture={"https://randomuser.me/api/portraits/women/44.jpg"}
      />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Random
        min={15}
        max={20}
      />

      <BoxColor
        r={200}
        g={50}
        b={0}
      />

    </div>
  );
}

export default App;
