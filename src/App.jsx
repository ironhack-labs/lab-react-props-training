import "./App.css";
import Greetings from "./components/Greetings.jsx";
import IdCard from "./components/IdCard.jsx";
function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div>
        <Greetings lang="es"> John </Greetings>
        <Greetings lang="de"> Obrien </Greetings>

        
        <IdCard user={{
      lastName:'Doe', firstName:'John',
      gender:'male',
      height:178,
      birth:"1992-07-14",
      picture:"https://randomuser.me/api/portraits/men/44.jpg"
    }} />
    <IdCard user={{
      lastName:'Delores ',
      firstName:'Obrien',
      gender:'female',
      height: 172,
      birth:"1988-05-11",
      picture: "https://randomuser.me/api/portraits/women/44.jpg"
    }} />
      </div>
    </div>
  );
}

export default App;
