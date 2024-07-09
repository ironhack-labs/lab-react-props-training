import "./App.css";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import IdCard from "./components/IdCard";
import Random from "./components/Random";
import Greetings from "./components/greetings";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div>
      <IdCard 
      lastName="López"
      firstName="Pepe"
      gender="male"
      height={140}
      birth={new Date("1990-01-02").toDateString()}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard 
      lastName="Pérez"
      firstName="Marisa"
      gender="female"
      height={190}
      birth={new Date("1990-03-10").toDateString()}
      picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      </div>
      <div>
        <Greetings lang="es">Ernesto</Greetings>
        <Greetings lang="de">Ernst</Greetings>
      </div>
      <div>
        <Random min={4} max={21}></Random>
      </div>
      <div>
        <BoxColor 
          r={50}
          g={90}
          b={100}
        />
      </div>
      <div>
        <CreditCard
          type="Visa"
          number = {4567}
          expirationMonth = {2}
          expirationYear = {2012}
          bank = "Caixa"
          owner = "Pepe Cruz"
          bgColor = "red"
          color = "white"

        >

        </CreditCard>
      </div>
    </div>
  );
}

export default App;
