import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greeting";
import RandomInt from "./components/RandomInt";
function App() {
  return (
    <>
      <div className="App">
        <h1> LAB | React Training</h1>
      </div>
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
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <RandomInt min="1" max="6" />
      <RandomInt min="1" max="100" />
    </>
  );
}

export default App;
