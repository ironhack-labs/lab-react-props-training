import "./App.css";
import IdCard from "./components/IdCard.jsx";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard
        lastName="Ogorek"
        firstName="Natalia"
        image="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <IdCard
        lastName="Pitt"
        firstName="Brad"
        image="https://randomuser.me/api/portraits/men/44.jpg"
      />
    </div>
  );
}

export default App;
