import "./App.css";
import IdCard from "./Component/IdCard"
import GreetBox from "./Component/Greeting";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height="178"
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"

      />
      <>
        <GreetBox />
        <GreetBox />
      </>
     
    </div>
 


  );
}

export default App;
