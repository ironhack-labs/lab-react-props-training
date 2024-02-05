import "./App.css";
import IdCard from "./components/IdCard";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard lastName="Swift" firstName="Taylor" gender="female" age={30} birth="31/02/1994" height={174} picture="link"/>;
    </div>
  );
}

export default App;

