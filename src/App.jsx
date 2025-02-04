import "./App.css";
import IdCard from "./IdCard";
import idCardData from "./assets/components/IdCard.json";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div>
        {idCardData.map((id, index) => {
          return (
            <IdCard id={id} key={index} />
          )
        })}

      </div>
    </div>
  );
}

export default App;
