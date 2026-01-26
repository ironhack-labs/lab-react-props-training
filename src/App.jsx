import "./App.css";
import IdCard from "./components/IdCard"
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";

function App() {
  return (
    <>
    <h1>IdCard</h1>
    <IdCard picture="https://randomuser.me/api/portraits/women/45.jpg"
    firstName="Pia" lastName="Martin" gender="female" height={174} birth={15-8-1995}/>
    
    <IdCard picture="https://randomuser.me/api/portraits/men/44.jpg"
    firstName="Martin" lastName="Hache" gender="male" height={191} birth={16-12-1995}/>
    <h1>Greetings</h1>
    <Greetings className="Greet" lang="es" name="Martina" />
    <Greetings lang="pr" name="Joao" />
    <Greetings lang="en" name="Sarah" />
    <h1>Random</h1>
    <Random min={1} max={20}/>
    <Random min={5} max={50} />
    <h1>Box Color</h1>
    <BoxColor r={255} g={0} b={0} />
    <BoxColor r={128} g={255} b={0} />
    </>
  );
}

export default App;
