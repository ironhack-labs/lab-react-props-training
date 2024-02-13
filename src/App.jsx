import "./App.css";
import IdCard from "./components/IdCar";
import Greetings from "./components/Greetings";

function App() {
  return (
    <div className="App">
      <IdCard />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="es">Español</Greetings>
      <Greetings lang="en">English</Greetings>
    </div>

  );
}

export default App;



