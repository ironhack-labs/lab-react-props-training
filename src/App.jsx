import "./App.css";
import IdCard from "./components/idcard";
import Greetings from "./components/Greetings";
import BoxColor from "./components/BoxColor";

function App() {
  return (
    
    <div className="App">
      <IdCard
        image={"https://randomuser.me/api/portraits/men/44.jpg"}lastName={"Doe"}
        firstName={"John"}
        gender={"male"}
        height={178}
        birth={new Date("1992-07-14")}
        
      />

      <IdCard
        image="https://randomuser.me/api/portraits/women/44.jpg"
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        
      />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <BoxColor 
        r={255} g={0} b={0}
      
      />

    </div>
  );
}

export default App;
