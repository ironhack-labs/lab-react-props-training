import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from  "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard 
      person = {{firstName: 'John Doe', 
      lastName: 'Doe', 
      gender: 'male', 
      height: 178, 
      birth: new Date("1992-07-14"), 
      picture: "https://randomuser.me/api/portraits/men/44.jpg"}} 
      />
      <Greetings greeting= {{lang:"de", text:"Ludwig"}}/>
      <Random min={1} max={9}/>
      <BoxColor r={234} g={145} b={56}/>
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
    </div>
  );
}

export default App;
