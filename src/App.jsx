import "./index.css"; 
import IdCard from "./Components/IdCard";
import Greetings from "./Components/Greetings";
import Randomizer from "./Components/Randomizer";

function App() {
  return (
    <div className="App">
      <h1>LAB | React Training</h1>
      <IdCard 
        lastName="Mendes" 
        firstName="Andre" 
        gender="male" 
        height={181}
        date="1989-10-14" 
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="es">Carlos</Greetings>
      <Greetings lang="en">John</Greetings>
      <Greetings lang="pt">Maria</Greetings>
      <Greetings lang="it">Giovanni</Greetings>

      <Randomizer min={1} max={6} />
      <Randomizer min={1} max={100} />
    </div>
  );
}

export default App;