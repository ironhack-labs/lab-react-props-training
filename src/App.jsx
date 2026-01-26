import Greeting from "./components/Greetings/Greetings";
import IdCard from "./components/IdCard/IdCard";
import Random from "./components/Random/Random";
import BoxColor from "./components/BoxColor/BoxColor";

function App() {
  return (
    <>
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

      <Greeting lan="de">Ludwig</Greeting>
      <Greeting lan="fr">Francois</Greeting>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </>
  );
}

export default App;
