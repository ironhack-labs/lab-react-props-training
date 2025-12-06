import Greetings from "./components/greetings";
import IdCard from "./components/IdCard";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
function App() {
  return (


    <section>

 <div >
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={0} g={255} b={0} />
      <BoxColor r={0} g={0} b={255} />
      <BoxColor r={128} g={128} b={128} />
    </div>

<div>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="en">John</Greetings>
      <Greetings lang="es">Francisco</Greetings>
      <Greetings lang="fr">Marie</Greetings>

</div>

<div className="App">
      <Random min={1} max={6} />
      <Random min={100} max={200} />
  </div>



    <div >
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
    </section>
  );
}

export default App;
