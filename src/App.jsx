import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <Greetings firstName="John" lastName="Doe" />

      <IdCard
        firstName="John"
        lastName="Doe"
        gender="male"
        height={175}
        birth={new Date("1990-01-01")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

    <IdCard
      lastName='Delores '
      firstName='Obrien'
      gender='female'
      height={172}
      birth={new Date("1988-05-11")}
      picture="https://randomuser.me/api/portraits/women/44.jpg"
    />
    </div>
  );
}

export default App;
