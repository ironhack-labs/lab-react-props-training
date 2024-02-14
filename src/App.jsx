import "./App.css";
import IdCard from "./Components/IdCard";
import Random from "./Components/Random";
import faceImg1 from "./assets/images/man1.jpg";
import faceImg2 from "./assets/images/woman1.jpg";
import Greetings from "./components/Greetings";
import BoxColor from "./Components/BoxColor";

function App() {
  return (
    <div className="App">
      <h2>IdCard</h2>
      <IdCard
      lastName= {"Sanchez"}
      firstName= {"Pablo"}
      gender={"male"}
      height= {"182"}
      birth= {new Date("30-12-1989")}
      picture= {faceImg1}
      />

      <IdCard
      lastName= {"Salguero"}
      firstName= {"Amelia"}
      gender={"female"}
      height= {"170"}
      birth= {new Date("14-04-1990")}
      picture= {faceImg2}
      />

      <h2>Greetings</h2>
      <Greetings lang= "de">Kroos</Greetings>
      <Greetings lang= "fr">Karim</Greetings>

      <h2>Random</h2>
      <Random 
      min={1}
      max={6}
      />

      <Random 
      min={1}
      max={100}
      />

      <h2>BoxColor</h2>
      <BoxColor 
      r={255}
      g={0}
      b={0}
      />

      <BoxColor 
      r={128}
      g={255}
      b={0}
      />

    </div>
  );
}

export default App;
