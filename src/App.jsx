import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/greetings";
import BoxColor from "./components/BoxColor";
import Random from "./components/random";


function App() {
  return (
    <div className="Id Card">
      <IdCard
      lastName="Bankole"
      firstName="Mariam"
      gender="female"
      height={182}
      birth={new Date("2002-03-20")}
      picture="https://share.google/2DX8QJUmKMLmqJrDV"
      />

      <IdCard
      lastName="Bankole"
      firstName="Amina"
      gender="female"
      height={150}
      birth={new Date("2005-02-11")}
      />

      <IdCard
      lastName="Bankole"
      firstName="Latifat"
      gender="female"
      height={150}
      birth={new Date("2011-01-23")}
      />
      <Greetings lang="de">Mariam</Greetings>
      <Greetings lang="fr">Aminat</Greetings>
      <Greetings lang="es">Latifat</Greetings>
      <Greetings lang="pt">Mariam</Greetings>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>


    

  );
}

export default App;
