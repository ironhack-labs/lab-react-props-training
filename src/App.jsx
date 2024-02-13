import "./App.css";
import IdCard from "./Components/IdCard";
import faceImg from "./assets/images/man1.jpg";
import Greetings from "./components/Greetings";

function App() {
  return (
    <div className="App">
      <IdCard
      lastName= {"Sanchez"}
      firstName= {"Pablo"}
      gender={"male"}
      height= {"182"}
      birth= {new Date("30-12-1989")}
      picture= {faceImg}
      />

      <Greetings lang= "de">Kroos</Greetings>
      <Greetings lang= "fr">Karim</Greetings>

    </div>
  );
}

export default App;
