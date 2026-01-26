import "./App.css";
import IdCard from './components/idcard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from "./components/BoxColor";



function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard 
      lastName="Smith"
      firsttName="Alice"
      gender="female"
      height={160}
      birth={new Date("1990-12-28")}
      picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <IdCard 
      lastName="Doe"
      firsttName="John"
      gender="male"
      height={178}
      birth={new Date("1990-12-28")}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <Greetings lang="es">Raul</Greetings>

      <Random min={1} max={6} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

    </div>
  );
}

export default App;
