import "./App.css";
import IdCard from "./components/IdCard";
import berlin from "./data/berlin.json";

function App() {
  return (
    <div className="App">
      {berlin.map((person, index) => (
        <IdCard
          key={index}
          lastName={person.lastName}
          firstName={person.firstName}
          gender={person.gender}
          height={person.height}
          birth={person.birth}
          picture={person.picture}
        />
      ))}
    </div>
  );
}

export default App;
