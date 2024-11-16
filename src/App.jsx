import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard 
      surname = 'Doe' name ='John' gender = 'male' height = {178} 
      birth = "14-07-2000" picture = "https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard 
      surname = 'Delores' name ='Obrien' gender = 'female' height = {172} 
      birth = "1992-07-14" picture = "https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="de">Ludwig</Greetings>
      <br></br>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <br></br>
      <BoxColor className="boxColor" red={255} green={0} blue={0} />
      <BoxColor className="boxColor" red={128} green={255} blue={0} />
      <br></br>
      <CreditCard 
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />
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
    
<CreditCard
  type="Visa"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Name of the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white" 
/>
    </div>
  );
}

export default App;
